import * as net from 'net';
import { SCGIResponseTransformer } from './SCGIResponseTransformer';
import { XMLDeserializer } from './XMLDeserializer';
import { serializeMethodCall } from 'xmlrpc/lib/serializer';

const NULL_CHAR = String.fromCharCode(0);

export class Connection {
  constructor(private readonly host: string, private readonly port: number) {}

  public async rpcMethodCall(method: string, ...params: Array<any>): Promise<unknown> {
    const client = await this.createClient();
    const xml = serializeMethodCall(method, params);
    const xmlLength = Buffer.byteLength(xml, 'utf8');

    const scgiHeaderItems = [
      `CONTENT_LENGTH${NULL_CHAR}${xmlLength}${NULL_CHAR}`,
      `SCGI${NULL_CHAR}1${NULL_CHAR}`,
    ];

    const headerLength = scgiHeaderItems.reduce(
      (accumulator, headerItem) => accumulator + headerItem.length,
      0
    );
    const des = new XMLDeserializer('UTF-8');
    const response = client.pipe(new SCGIResponseTransformer());
    const result = des.deserializeMethodResponse(response);
    client.end(`${headerLength}:${scgiHeaderItems.join('')},${xml}`);
    return (await result) as any; // TODO:
  }

  private createClient(): Promise<net.Socket> {
    return new Promise((resolve, reject) => {
      const client = net.createConnection({ host: this.host, port: this.port }, () => {
        resolve(client);
      });
    });
  }
}
