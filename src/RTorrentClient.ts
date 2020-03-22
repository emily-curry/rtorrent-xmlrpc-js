import { RPCClient, RPCClientOpts } from './util/RPCClient';
import { RPCMethodName, RPCMethodParams, RPCMethodReturnType } from './types';
import { DownloadClient, LoadClient, SystemClient } from './client';

export interface RTorrentClientOpts extends RPCClientOpts {}

export class RTorrentClient {
  private rpc: RPCClient;
  constructor(opts: RTorrentClientOpts) {
    this.rpc = new RPCClient(opts);
    this.d = new DownloadClient(this.rpc);
    this.load = new LoadClient(this.rpc);
    this.system = new SystemClient(this.rpc);
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
  >(methodName: K, ...params: P): Promise<R> {
    return await this.rpc.callRPCMethod(methodName, ...params);
  }

  public d: DownloadClient;
  public load: LoadClient;
  public system: SystemClient;
}
