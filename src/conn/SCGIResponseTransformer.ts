import { Transform, TransformCallback } from 'stream';

/**
 * A stream transformer that strips headers from response streams.
 */
export class SCGIResponseTransformer extends Transform {
  private headersRead: boolean = false;
  private headers: string = '';
  constructor() {
    super({
      readableObjectMode: true,
      writableObjectMode: false,
    });
  }

  public _transform(chunk: any, encoding: string, next: TransformCallback) {
    if (this.headersRead) return next(null, chunk);

    // TODO:FIXME: This would fail if \r\n\r\n sequence got split b/t chunks
    if (chunk instanceof Buffer) {
      const splitIndex = chunk.indexOf('\r\n\r\n', undefined, 'utf-8');
      if (splitIndex === -1) {
        this.headers += chunk.toString('utf-8');
        return next(null);
      } else {
        this.headersRead = true;
        this.headers += chunk.toString('utf-8', 0, splitIndex);
        return next(null, chunk.subarray(splitIndex + 4, chunk.length));
      }
    } else if (typeof chunk === 'string') {
      const splitIndex = chunk.indexOf('\r\n\r\n');
      if (splitIndex === -1) {
        this.headers += chunk;
        return next(null);
      } else {
        this.headersRead = true;
        this.headers += chunk.substring(0, splitIndex);
        return next(null, chunk.substring(splitIndex + 4, chunk.length));
      }
    } else {
      throw new Error(
        `SCGIResponseTransformer cannot be used to process stream data of type [ ${
          typeof chunk === 'object' ? chunk.constructor.name : typeof chunk
        } ]`
      );
    }
  }
}
