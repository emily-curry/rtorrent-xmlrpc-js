// AUTO-GENERATED - DO NOT MODIFY //
import { RPCMethods, RPCMethodParams } from '../types';
import { RPCClient } from '../util/RPCClient';

/** A client that exposes all f.* RPC methods as directly callable functions. */
export class FileClient {
  constructor(protected readonly rpc: RPCClient) {}
  /**
   *
   * @param infohash
   * @param pattern
   * @param calls
   */
  public multicall: RPCMethods['f.multicall'] = <P extends RPCMethodParams['f.multicall']>(...params: P) => {
    return this.rpc.callRPCMethod('f.multicall', ...params);
  }
  /**
   *
   * @param infohash
   */
  public completedChunks: RPCMethods['f.completed_chunks'] = <P extends RPCMethodParams['f.completed_chunks']>(...params: P) => {
    return this.rpc.callRPCMethod('f.completed_chunks', ...params);
  }
  /**
   *
   * @param infohash
   */
  public frozenPath: RPCMethods['f.frozen_path'] = <P extends RPCMethodParams['f.frozen_path']>(...params: P) => {
    return this.rpc.callRPCMethod('f.frozen_path', ...params);
  }
  /**
   *
   * @param infohash
   */
  public lastTouched: RPCMethods['f.last_touched'] = <P extends RPCMethodParams['f.last_touched']>(...params: P) => {
    return this.rpc.callRPCMethod('f.last_touched', ...params);
  }
  /**
   *
   * @param infohash
   */
  public offset: RPCMethods['f.offset'] = <P extends RPCMethodParams['f.offset']>(...params: P) => {
    return this.rpc.callRPCMethod('f.offset', ...params);
  }
  /**
   *
   * @param infohash
   */
  public path: RPCMethods['f.path'] = <P extends RPCMethodParams['f.path']>(...params: P) => {
    return this.rpc.callRPCMethod('f.path', ...params);
  }
  /**
   *
   * @param infohash
   */
  public pathComponents: RPCMethods['f.path_components'] = <P extends RPCMethodParams['f.path_components']>(...params: P) => {
    return this.rpc.callRPCMethod('f.path_components', ...params);
  }
  /**
   *
   * @param infohash
   */
  public pathDepth: RPCMethods['f.path_depth'] = <P extends RPCMethodParams['f.path_depth']>(...params: P) => {
    return this.rpc.callRPCMethod('f.path_depth', ...params);
  }
  /**
   *
   * @param infohash
   */
  public prioritizeFirst: RPCMethods['f.prioritize_first'] = <P extends RPCMethodParams['f.prioritize_first']>(...params: P) => {
    return this.rpc.callRPCMethod('f.prioritize_first', ...params);
  }
  /**
   *
   * @param infohash
   */
  public prioritizeFirstDisable: RPCMethods['f.prioritize_first.disable'] = <P extends RPCMethodParams['f.prioritize_first.disable']>(...params: P) => {
    return this.rpc.callRPCMethod('f.prioritize_first.disable', ...params);
  }
  /**
   *
   * @param infohash
   */
  public prioritizeFirstEnable: RPCMethods['f.prioritize_first.enable'] = <P extends RPCMethodParams['f.prioritize_first.enable']>(...params: P) => {
    return this.rpc.callRPCMethod('f.prioritize_first.enable', ...params);
  }
  /**
   *
   * @param infohash
   */
  public prioritizeLast: RPCMethods['f.prioritize_last'] = <P extends RPCMethodParams['f.prioritize_last']>(...params: P) => {
    return this.rpc.callRPCMethod('f.prioritize_last', ...params);
  }
  /**
   *
   * @param infohash
   */
  public prioritizeLastDisable: RPCMethods['f.prioritize_last.disable'] = <P extends RPCMethodParams['f.prioritize_last.disable']>(...params: P) => {
    return this.rpc.callRPCMethod('f.prioritize_last.disable', ...params);
  }
  /**
   *
   * @param infohash
   */
  public prioritizeLastEnable: RPCMethods['f.prioritize_last.enable'] = <P extends RPCMethodParams['f.prioritize_last.enable']>(...params: P) => {
    return this.rpc.callRPCMethod('f.prioritize_last.enable', ...params);
  }
  /**
   *
   * @param infohash
   */
  public priority: RPCMethods['f.priority'] = <P extends RPCMethodParams['f.priority']>(...params: P) => {
    return this.rpc.callRPCMethod('f.priority', ...params);
  }
  /**
   *
   * @param infohash
   * @param priority
   */
  public prioritySet: RPCMethods['f.priority.set'] = <P extends RPCMethodParams['f.priority.set']>(...params: P) => {
    return this.rpc.callRPCMethod('f.priority.set', ...params);
  }
  /**
   *
   * @param infohash
   */
  public sizeBytes: RPCMethods['f.size_bytes'] = <P extends RPCMethodParams['f.size_bytes']>(...params: P) => {
    return this.rpc.callRPCMethod('f.size_bytes', ...params);
  }
  /**
   *
   * @param infohash
   */
  public sizeChunks: RPCMethods['f.size_chunks'] = <P extends RPCMethodParams['f.size_chunks']>(...params: P) => {
    return this.rpc.callRPCMethod('f.size_chunks', ...params);
  }
}
