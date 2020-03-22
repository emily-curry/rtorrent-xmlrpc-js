// AUTO-GENERATED - DO NOT MODIFY //
import { RPCMethods, RPCMethodParams } from '../types';
import { RPCClient } from '../util/RPCClient';

/** A client that exposes all load.* RPC methods as directly callable functions. */
export class LoadClient {
  constructor(protected readonly rpc: RPCClient) {}
  /**
   * Loads a torrent from a url without starting the torrent.
   * @param target Unused, always empty.
   * @param url
   * @param postLoadCommands
   */
  public normal: RPCMethods['load.normal'] = <P extends RPCMethodParams['load.normal']>(...params: P) => this.rpc.callRPCMethod('load.normal', ...params);
  /**
   * Loads a torrent from a url and starts the torrent.
   * @param target Unused, always empty.
   * @param url
   * @param postLoadCommands
   */
  public start: RPCMethods['load.start'] = <P extends RPCMethodParams['load.start']>(...params: P) => this.rpc.callRPCMethod('load.start', ...params);
  /**
   * Loads a torrent from raw data without starting the torrent.
   * @param target Unused, always empty.
   * @param data
   * @param postLoadCommands
   */
  public raw: RPCMethods['load.raw'] = <P extends RPCMethodParams['load.raw']>(...params: P) => this.rpc.callRPCMethod('load.raw', ...params);
  /**
   * Loads a torrent from raw data and starts the torrent.
   * @param target Unused, always empty.
   * @param data
   * @param postLoadCommands
   */
  public rawStart: RPCMethods['load.raw_start'] = <P extends RPCMethodParams['load.raw_start']>(...params: P) => this.rpc.callRPCMethod('load.raw_start', ...params);
}
