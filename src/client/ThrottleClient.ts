// AUTO-GENERATED - DO NOT MODIFY //
import { RPCMethods, RPCMethodParams } from '../types';
import { RPCClient } from '../util/RPCClient';

/** A client that exposes all throttle.* RPC methods as directly callable functions. */
export class ThrottleClient {
  constructor(protected readonly rpc: RPCClient) {}
  /**
   * Define a named throttle.
   * @param name The name of the throttle.
   * @param rate The rate of the throttle, in KiB/s.
   */
  public down: RPCMethods['throttle.down'] = <P extends RPCMethodParams['throttle.down']>(...params: P) => this.rpc.callRPCMethod('throttle.down', ...params);
  /**
   * Define a named throttle.
   * @param name The name of the throttle.
   * @param rate The rate of the throttle, in KiB/s.
   */
  public up: RPCMethods['throttle.up'] = <P extends RPCMethodParams['throttle.up']>(...params: P) => this.rpc.callRPCMethod('throttle.up', ...params);
  /**
   *
   * @param name
   */
  public downMax: RPCMethods['throttle.down.max'] = <P extends RPCMethodParams['throttle.down.max']>(...params: P) => this.rpc.callRPCMethod('throttle.down.max', ...params);
  /**
   *
   * @param name
   */
  public upMax: RPCMethods['throttle.up.max'] = <P extends RPCMethodParams['throttle.up.max']>(...params: P) => this.rpc.callRPCMethod('throttle.up.max', ...params);
  /**
   *
   * @param name
   */
  public downRate: RPCMethods['throttle.down.rate'] = <P extends RPCMethodParams['throttle.down.rate']>(...params: P) => this.rpc.callRPCMethod('throttle.down.rate', ...params);
  /**
   *
   * @param name
   */
  public upRate: RPCMethods['throttle.up.rate'] = <P extends RPCMethodParams['throttle.up.rate']>(...params: P) => this.rpc.callRPCMethod('throttle.up.rate', ...params);
  /**
   *
   */
  public globalDownRate: RPCMethods['throttle.global_down.rate'] = <P extends RPCMethodParams['throttle.global_down.rate']>(...params: P) => this.rpc.callRPCMethod('throttle.global_down.rate', ...params);
  /**
   *
   */
  public globalUpRate: RPCMethods['throttle.global_up.rate'] = <P extends RPCMethodParams['throttle.global_up.rate']>(...params: P) => this.rpc.callRPCMethod('throttle.global_up.rate', ...params);
  /**
   *
   */
  public globalDownTotal: RPCMethods['throttle.global_down.total'] = <P extends RPCMethodParams['throttle.global_down.total']>(...params: P) => this.rpc.callRPCMethod('throttle.global_down.total', ...params);
  /**
   *
   */
  public globalUpTotal: RPCMethods['throttle.global_up.total'] = <P extends RPCMethodParams['throttle.global_up.total']>(...params: P) => this.rpc.callRPCMethod('throttle.global_up.total', ...params);
  /**
   *
   * @param throttleName
   * @param domainOrIP
   */
  public ip: RPCMethods['throttle.ip'] = <P extends RPCMethodParams['throttle.ip']>(...params: P) => this.rpc.callRPCMethod('throttle.ip', ...params);
}
