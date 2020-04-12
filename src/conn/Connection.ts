import * as net from 'net';
import { EventEmitter } from 'events';
import { SCGIResponseTransformer } from './SCGIResponseTransformer';
import { XMLDeserializer } from './XMLDeserializer';
import { serializeMethodCall } from 'xmlrpc/lib/serializer';

const NULL_CHAR = String.fromCharCode(0);

export class Connection {
  private readonly clientLockTarget = new EventEmitter();
  private readonly clientLockQueue: string[] = [];
  private isProcessingQueue = false;

  constructor(private readonly host: string, private readonly port: number) {}

  public async rpcMethodCall(method: string, ...params: Array<any>): Promise<unknown> {
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
    const message = `${headerLength}:${scgiHeaderItems.join('')},${xml}`;

    const client = await this.createClient();
    const des = new XMLDeserializer('UTF-8');
    const response = client.pipe(new SCGIResponseTransformer());
    const result = des.deserializeMethodResponse(response);
    client.end(message);
    return await result;
  }

  private async createClient(): Promise<net.Socket> {
    return await new Promise((resolve, reject) => {
      const lockId = this.makeLockId();
      const onReady = () => {
        const client = net.createConnection({ host: this.host, port: this.port }, () => {
          client.on('close', () => this.clientLockTarget.emit(this.releaseEvent(lockId)));
          resolve(client);
        });
      };
      this.clientLockTarget.once(this.readyEvent(lockId), onReady);
      this.queueClient(lockId);
    });
  }

  private queueClient(lockId: string) {
    this.clientLockQueue.push(lockId);
    this.processClientLockQueue();
  }

  private processClientLockQueue() {
    if (this.isProcessingQueue || this.clientLockQueue.length === 0) return;
    this.isProcessingQueue = true;
    const lockId = this.clientLockQueue.shift()!;
    const onRelease = () => {
      this.isProcessingQueue = false;
      this.processClientLockQueue();
    };
    this.clientLockTarget.once(this.releaseEvent(lockId), onRelease);
    this.clientLockTarget.emit(this.readyEvent(lockId));
  }

  private makeLockId(): string {
    return [...Array(20)].map((_) => ((Math.random() * 36) | 0).toString(36)).join('');
  }

  private readyEvent(lockId: string): string {
    return `ready-${lockId}`;
  }

  private releaseEvent(lockId: string): string {
    return `release-${lockId}`;
  }
}
