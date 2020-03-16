import { BaseClient, BaseClientOpts } from './client/BaseClient';
import { RPCMethodName, RPCMethodParams, RPCMethodReturnType } from './types';
import { Connection } from './conn/Connection';

export interface RTorrentClientOpts extends BaseClientOpts {}

export class RTorrentClient extends BaseClient {
  constructor(opts: RTorrentClientOpts) {
    const conn = new Connection(opts.host, opts.port);
    super(conn);
  }

  /**
   * Calls an XMLRPC method directly by name.
   * @param methodName
   * @param params
   */
  public async call<
    K extends RPCMethodName,
    P extends RPCMethodParams[K],
    R extends RPCMethodReturnType<K, P>
  >(methodName: K, ...params: P): Promise<R> {
    return await this.rpcMethodCall<K, P, R>(methodName, ...params);
  }
}
