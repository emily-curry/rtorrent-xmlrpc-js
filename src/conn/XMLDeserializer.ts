import { Readable } from 'stream';
import { Parser } from 'node-expat';
import DateFormatter from 'xmlrpc/lib/date_formatter';
import { RPCError, RPCAggregateError } from './RPCError';

/**
 * Utility for deserializng streams of XML data.
 * Quick n dirty port of https://github.com/baalexander/node-xmlrpc/blob/master/lib/deserializer.js,
 * but uses node-expat for improved performance.
 */
export class XMLDeserializer {
  private readonly parser: Parser;
  private readonly encoding: string;
  private error?: Error;
  private value: boolean = false;
  private responseType?: string;
  private type?: string;
  private methodname?: string;
  private marks: Array<number> = [];
  private data: Array<string> = [];
  private stack: Array<any> = [];

  constructor(encoding: string = 'UTF-8') {
    this.encoding = encoding;

    this.parser = new Parser(encoding);
    this.parser.on('startElement', this.onOpentag.bind(this));
    this.parser.on('endElement', this.onClosetag.bind(this));
    this.parser.on('text', this.onText.bind(this));
    this.parser.on('comment', this.onCDATA.bind(this));
  }

  public deserializeMethodResponse = (stream: Readable): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      const onError = (err: Error) => {
        this.onError(err).catch(reject);
      };
      const onComplete = () => {
        this.onDone()
          .then(this.onMethodReponseComplete)
          .then(resolve)
          .catch(reject);
      };
      stream.on('error', onError);
      this.parser.on('error', onError);
      this.parser.on('end', onComplete);
      stream.setEncoding(this.encoding);
      stream.pipe(this.parser);
    });
  };

  private onDone = async () => {
    if (!!this.error) throw this.error;
    if (!this.type || this.marks.length) {
      throw new Error('Invalid XML-RPC message');
    } else if (this.responseType === 'fault') {
      throw this.createFaultError(this.stack[0]);
    } else if (
      Array.isArray(this.stack[0]) &&
      this.stack[0].some(i => typeof i === 'object' && i.hasOwnProperty('faultCode'))
    ) {
      throw this.createAggregateFaultError(this.stack[0]);
    }
    return this.stack;
  };

  // TODO:
  // Error handling needs a little thinking. There are two different kinds of
  // errors:
  //   1. Low level errors like network, stream or xml errors. These don't
  //      require special treatment. They only need to be forwarded. The IO
  //      is already stopped in these cases.
  //   2. Protocol errors: Invalid tags, invalid values &c. These happen in
  //      our code and we should tear down the IO and stop parsing.
  // Currently all errors end here. Guess I'll split it up.
  private onError = async (msg: string | Error) => {
    if (!this.error) {
      if (typeof msg === 'string') {
        this.error = new Error(msg);
      } else {
        this.error = msg;
      }
    }
    throw this.error;
  };

  //TODO:
  private onMethodReponseComplete = async (result: any[]) => {
    if (this.error) {
      throw this.error;
    } else if (!result) {
      throw new Error('No response');
    } else if (result.length > 1) {
      throw new Error('Response has more than one param');
    } else if (this.type !== 'methodresponse') {
      throw new Error('Not a method response');
    } else if (!this.responseType) {
      throw new Error('Invalid method response');
    }
    return result[0];
  };

  private createFaultError(fault: {
    faultString: string;
    faultCode: number;
    code?: number;
  }): RPCError {
    return new RPCError(
      `XML-RPC fault: ${fault.faultString ?? 'Unknown'}`,
      fault.faultString,
      fault.code ?? fault.faultCode,
      fault.faultCode
    );
  }

  private createAggregateFaultError(maybeFaults: any[]): RPCAggregateError {
    const rpcErrors = new Map<number, RPCError>();
    for (let i = 0; i < maybeFaults.length; i++) {
      const item = maybeFaults[i];
      if (typeof item === 'object' && item.hasOwnProperty('faultCode')) {
        rpcErrors.set(i, this.createFaultError(item));
      }
    }
    const aggregateMessage = `XML-RPC faults occurred in result indices [ ${[
      ...rpcErrors.keys()
    ].join(', ')} ]`;
    throw new RPCAggregateError(aggregateMessage, [...rpcErrors.values()]);
  }

  private push = (value: any) => {
    this.stack.push(value);
  };

  //==============================================================================
  // SAX Handlers
  //==============================================================================

  private onOpentag = (name: string) => {
    if (name.toUpperCase() === 'ARRAY' || name.toUpperCase() === 'STRUCT') {
      this.marks.push(this.stack.length);
    }
    this.data = [];
    this.value = name.toUpperCase() === 'VALUE';
  };

  private onText = (text: string) => {
    this.data.push(text);
  };

  private onCDATA = (cdata: string) => {
    this.data.push(cdata);
  };

  private onClosetag = (el: string) => {
    var data = this.data.join('');
    try {
      switch (el.toUpperCase()) {
        case 'BOOLEAN':
          this.endBoolean(data);
          break;
        case 'INT':
        case 'I4':
        case 'I8':
          this.endInt(data);
          break;
        case 'DOUBLE':
          this.endDouble(data);
          break;
        case 'STRING':
        case 'NAME':
          this.endString(data);
          break;
        case 'ARRAY':
          this.endArray(data);
          break;
        case 'STRUCT':
          this.endStruct(data);
          break;
        case 'BASE64':
          this.endBase64(data);
          break;
        case 'DATETIME.ISO8601':
          this.endDateTime(data);
          break;
        case 'VALUE':
          this.endValue(data);
          break;
        case 'PARAMS':
          this.endParams(data);
          break;
        case 'FAULT':
          this.endFault(data);
          break;
        case 'METHODRESPONSE':
          this.endMethodResponse(data);
          break;
        case 'METHODNAME':
          this.endMethodName(data);
          break;
        case 'METHODCALL':
          this.endMethodCall(data);
          break;
        case 'NIL':
          this.endNil(data);
          break;
        case 'DATA':
        case 'PARAM':
        case 'MEMBER':
          // Ignored by design
          break;
        default:
          this.onError("Unknown XML-RPC tag '" + el + "'");
          break;
      }
    } catch (e) {
      this.onError(e);
    }
  };

  private endNil = (data: string) => {
    this.push(null);
    this.value = false;
  };

  private endBoolean = (data: string) => {
    if (data === '1') {
      this.push(true);
    } else if (data === '0') {
      this.push(false);
    } else {
      throw new Error("Illegal boolean value '" + data + "'");
    }
    this.value = false;
  };

  private endInt = (data: string) => {
    var value = parseInt(data, 10);
    if (isNaN(value)) {
      throw new Error("Expected an integer but got '" + data + "'");
    } else if (!Number.isSafeInteger(value)) {
      throw new Error("Recieved an out-of-range integer '" + data + "'");
    } else {
      this.push(value);
      this.value = false;
    }
  };

  private endDouble = (data: string) => {
    var value = parseFloat(data);
    if (isNaN(value)) {
      throw new Error("Expected a double but got '" + data + "'");
    } else {
      this.push(value);
      this.value = false;
    }
  };

  private endString = (data: string) => {
    this.push(data);
    this.value = false;
  };

  private endArray = (data: string) => {
    var mark = this.marks.pop()!;
    this.stack.splice(mark, this.stack.length - mark, this.stack.slice(mark));
    this.value = false;
  };

  private endStruct = (data: string) => {
    var mark = this.marks.pop()!,
      struct: Record<string, any> = {},
      items = this.stack.slice(mark),
      i = 0;

    for (; i < items.length; i += 2) {
      struct[items[i]] = items[i + 1];
    }
    this.stack.splice(mark, this.stack.length - mark, struct);
    this.value = false;
  };

  private endBase64 = (data: string) => {
    var buffer = new Buffer(data, 'base64');
    this.push(buffer);
    this.value = false;
  };

  private endDateTime = (data: string) => {
    var date = DateFormatter.decodeIso8601(data);
    this.push(date);
    this.value = false;
  };

  private endValue = (data: string) => {
    if (this.value) {
      this.endString(data);
    }
  };

  private endParams = (data: string) => {
    this.responseType = 'params';
  };

  private endFault = (data: string) => {
    this.responseType = 'fault';
  };

  private endMethodResponse = (data: string) => {
    this.type = 'methodresponse';
  };

  private endMethodName = (data: string) => {
    this.methodname = data;
  };

  private endMethodCall = (data: string) => {
    this.type = 'methodcall';
  };
}
