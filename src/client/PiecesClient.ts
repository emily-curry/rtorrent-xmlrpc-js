// AUTO-GENERATED - DO NOT MODIFY //
import { RPCMethods, RPCMethodParams } from '../types';
import { RPCClient } from '../util/RPCClient';

/** A client that exposes all pieces.* RPC methods as directly callable functions. */
export class PiecesClient {
  constructor(protected readonly rpc: RPCClient) {}
  /**
   *
   */
  public hashOnCompletion: RPCMethods['pieces.hash.on_completion'] = <P extends RPCMethodParams['pieces.hash.on_completion']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.hash.on_completion', ...params);
  }
  /**
   *
   * @param value
   */
  public hashOnCompletionSet: RPCMethods['pieces.hash.on_completion.set'] = <P extends RPCMethodParams['pieces.hash.on_completion.set']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.hash.on_completion.set', ...params);
  }
  /**
   *
   */
  public memoryBlockCount: RPCMethods['pieces.memory.block_count'] = <P extends RPCMethodParams['pieces.memory.block_count']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.memory.block_count', ...params);
  }
  /**
   *
   */
  public memoryCurrent: RPCMethods['pieces.memory.current'] = <P extends RPCMethodParams['pieces.memory.current']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.memory.current', ...params);
  }
  /**
   *
   */
  public memoryMax: RPCMethods['pieces.memory.max'] = <P extends RPCMethodParams['pieces.memory.max']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.memory.max', ...params);
  }
  /**
   *
   * @param bytes
   */
  public memoryMaxSet: RPCMethods['pieces.memory.max.set'] = <P extends RPCMethodParams['pieces.memory.max.set']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.memory.max.set', ...params);
  }
  /**
   *
   */
  public memorySyncQueue: RPCMethods['pieces.memory.sync_queue'] = <P extends RPCMethodParams['pieces.memory.sync_queue']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.memory.sync_queue', ...params);
  }
  /**
   *
   */
  public preloadMinRate: RPCMethods['pieces.preload.min_rate'] = <P extends RPCMethodParams['pieces.preload.min_rate']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.preload.min_rate', ...params);
  }
  /**
   *
   * @param bytes
   */
  public preloadMinRateSet: RPCMethods['pieces.preload.min_rate.set'] = <P extends RPCMethodParams['pieces.preload.min_rate.set']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.preload.min_rate.set', ...params);
  }
  /**
   *
   */
  public preloadMinSize: RPCMethods['pieces.preload.min_size'] = <P extends RPCMethodParams['pieces.preload.min_size']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.preload.min_size', ...params);
  }
  /**
   *
   * @param chunks
   */
  public preloadMinSizeSet: RPCMethods['pieces.preload.min_size.set'] = <P extends RPCMethodParams['pieces.preload.min_size.set']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.preload.min_size.set', ...params);
  }
  /**
   *
   */
  public preloadType: RPCMethods['pieces.preload.type'] = <P extends RPCMethodParams['pieces.preload.type']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.preload.type', ...params);
  }
  /**
   *
   * @param enumValue
   */
  public preloadTypeSet: RPCMethods['pieces.preload.type.set'] = <P extends RPCMethodParams['pieces.preload.type.set']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.preload.type.set', ...params);
  }
  /**
   *
   */
  public statsNotPreloaded: RPCMethods['pieces.stats_not_preloaded'] = <P extends RPCMethodParams['pieces.stats_not_preloaded']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.stats_not_preloaded', ...params);
  }
  /**
   *
   */
  public statsPreloaded: RPCMethods['pieces.stats_preloaded'] = <P extends RPCMethodParams['pieces.stats_preloaded']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.stats_preloaded', ...params);
  }
  /**
   *
   */
  public statsTotalSize: RPCMethods['pieces.stats.total_size'] = <P extends RPCMethodParams['pieces.stats.total_size']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.stats.total_size', ...params);
  }
  /**
   *
   */
  public syncAlwaysSafe: RPCMethods['pieces.sync.always_safe'] = <P extends RPCMethodParams['pieces.sync.always_safe']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.sync.always_safe', ...params);
  }
  /**
   *
   */
  public syncAlwaysSafeSet: RPCMethods['pieces.sync.always_safe.set'] = <P extends RPCMethodParams['pieces.sync.always_safe.set']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.sync.always_safe.set', ...params);
  }
  /**
   *
   */
  public syncQueueSize: RPCMethods['pieces.sync.queue_size'] = <P extends RPCMethodParams['pieces.sync.queue_size']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.sync.queue_size', ...params);
  }
  /**
   *
   */
  public syncSafeFreeDiskspace: RPCMethods['pieces.sync.safe_free_diskspace'] = <P extends RPCMethodParams['pieces.sync.safe_free_diskspace']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.sync.safe_free_diskspace', ...params);
  }
  /**
   *
   */
  public syncTimeout: RPCMethods['pieces.sync.timeout'] = <P extends RPCMethodParams['pieces.sync.timeout']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.sync.timeout', ...params);
  }
  /**
   *
   * @param seconds
   */
  public syncTimeoutSet: RPCMethods['pieces.sync.timeout.set'] = <P extends RPCMethodParams['pieces.sync.timeout.set']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.sync.timeout.set', ...params);
  }
  /**
   *
   */
  public syncTimeoutSafe: RPCMethods['pieces.sync.timeout_safe'] = <P extends RPCMethodParams['pieces.sync.timeout_safe']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.sync.timeout_safe', ...params);
  }
  /**
   *
   * @param seconds
   */
  public syncTimeoutSafeSet: RPCMethods['pieces.sync.timeout_safe.set'] = <P extends RPCMethodParams['pieces.sync.timeout_safe.set']>(...params: P) => {
    return this.rpc.callRPCMethod('pieces.sync.timeout_safe.set', ...params);
  }
}
