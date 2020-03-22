// AUTO-GENERATED - DO NOT MODIFY //
import { RPCMethods, RPCMethodParams } from '../types';
import { RPCClient } from '../util/RPCClient';

/** A client that exposes all execute.* RPC methods as directly callable functions. */
export class ExecuteClient {
  constructor(protected readonly rpc: RPCClient) {}
  /**
   *
   * @param command
   * @param args
   */
  public throw: RPCMethods['execute.throw'] = <P extends RPCMethodParams['execute.throw']>(...params: P) => this.rpc.callRPCMethod('execute.throw', ...params);
  /**
   *
   * @param command
   * @param args
   */
  public throwBg: RPCMethods['execute.throw.bg'] = <P extends RPCMethodParams['execute.throw.bg']>(...params: P) => this.rpc.callRPCMethod('execute.throw.bg', ...params);
  /**
   *
   * @param command
   * @param args
   */
  public nothrow: RPCMethods['execute.nothrow'] = <P extends RPCMethodParams['execute.nothrow']>(...params: P) => this.rpc.callRPCMethod('execute.nothrow', ...params);
  /**
   *
   * @param command
   * @param args
   */
  public nothrowBg: RPCMethods['execute.nothrow.bg'] = <P extends RPCMethodParams['execute.nothrow.bg']>(...params: P) => this.rpc.callRPCMethod('execute.nothrow.bg', ...params);
  /**
   *
   * @param command
   * @param args
   */
  public capture: RPCMethods['execute.capture'] = <P extends RPCMethodParams['execute.capture']>(...params: P) => this.rpc.callRPCMethod('execute.capture', ...params);
  /**
   *
   * @param command
   * @param args
   */
  public captureNothrow: RPCMethods['execute.capture_nothrow'] = <P extends RPCMethodParams['execute.capture_nothrow']>(...params: P) => this.rpc.callRPCMethod('execute.capture_nothrow', ...params);
}
