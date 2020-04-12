import {
  DHTClient,
  DownloadClient,
  ExecuteClient,
  FileClient,
  LoadClient,
  LogClient,
  NetworkClient,
  PeerClient,
  PiecesClient,
  ProtocolClient,
  SessionClient,
  SystemClient,
  ThrottleClient,
  TrackerClient,
} from './client';
import { RPCMethodName, RPCMethodParams, RPCMethodReturnType } from './types';
import { RPCClient, RPCClientOpts } from './util/RPCClient';

export interface RTorrentClientOpts extends RPCClientOpts {}

export class RTorrentClient {
  private rpc: RPCClient;
  constructor(opts: RTorrentClientOpts) {
    this.rpc = new RPCClient(opts);
    this.dht = new DHTClient(this.rpc);
    this.d = new DownloadClient(this.rpc);
    this.execute = new ExecuteClient(this.rpc);
    this.f = new FileClient(this.rpc);
    this.load = new LoadClient(this.rpc);
    this.log = new LogClient(this.rpc);
    this.network = new NetworkClient(this.rpc);
    this.p = new PeerClient(this.rpc);
    this.pieces = new PiecesClient(this.rpc);
    this.protocol = new ProtocolClient(this.rpc);
    this.session = new SessionClient(this.rpc);
    this.system = new SystemClient(this.rpc);
    this.throttle = new ThrottleClient(this.rpc);
    this.t = new TrackerClient(this.rpc);
  }

  /**
   * Calls an XMLRPC method directly by name.
   * @param methodName
   * @param params
   */
  public async call<
    K extends RPCMethodName,
    P extends RPCMethodParams[K],
    R extends RPCMethodReturnType<K>
  >(methodName: K, ...params: P): Promise<R>;
  public async call<K extends string, P extends any[], R extends any>(
    methodName: K,
    ...params: P
  ): Promise<R>;
  public async call(methodName: any, ...params: any[]): Promise<any> {
    return await this.rpc.callRPCMethod(methodName, ...params);
  }

  public dht: DHTClient;
  public d: DownloadClient;
  public execute: ExecuteClient;
  public f: FileClient;
  public load: LoadClient;
  public log: LogClient;
  public network: NetworkClient;
  public p: PeerClient;
  public pieces: PiecesClient;
  public protocol: ProtocolClient;
  public session: SessionClient;
  public system: SystemClient;
  public throttle: ThrottleClient;
  public t: TrackerClient;
}
