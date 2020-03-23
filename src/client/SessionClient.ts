// AUTO-GENERATED - DO NOT MODIFY //
import { RPCMethods, RPCMethodParams } from '../types';
import { RPCClient } from '../util/RPCClient';

/** A client that exposes all session.* RPC methods as directly callable functions. */
export class SessionClient {
  constructor(protected readonly rpc: RPCClient) {}
  /**
   *
   */
  public name: RPCMethods['session.name'] = <P extends RPCMethodParams['session.name']>(...params: P) => {
    return this.rpc.callRPCMethod('session.name', ...params);
  }
  /**
   *
   * @param name
   */
  public nameSet: RPCMethods['session.name.set'] = <P extends RPCMethodParams['session.name.set']>(...params: P) => {
    return this.rpc.callRPCMethod('session.name.set', ...params);
  }
  /**
   *
   */
  public onCompletion: RPCMethods['session.on_completion'] = <P extends RPCMethodParams['session.on_completion']>(...params: P) => {
    return this.rpc.callRPCMethod('session.on_completion', ...params);
  }
  /**
   *
   * @param value
   */
  public onCompletionSet: RPCMethods['session.on_completion.set'] = <P extends RPCMethodParams['session.on_completion.set']>(...params: P) => {
    return this.rpc.callRPCMethod('session.on_completion.set', ...params);
  }
  /**
   *
   */
  public path: RPCMethods['session.path'] = <P extends RPCMethodParams['session.path']>(...params: P) => {
    return this.rpc.callRPCMethod('session.path', ...params);
  }
  /**
   *
   * @param path
   */
  public pathSet: RPCMethods['session.path.set'] = <P extends RPCMethodParams['session.path.set']>(...params: P) => {
    return this.rpc.callRPCMethod('session.path.set', ...params);
  }
  /**
   *
   */
  public save: RPCMethods['session.save'] = <P extends RPCMethodParams['session.save']>(...params: P) => {
    return this.rpc.callRPCMethod('session.save', ...params);
  }
  /**
   *
   */
  public useLock: RPCMethods['session.use_lock'] = <P extends RPCMethodParams['session.use_lock']>(...params: P) => {
    return this.rpc.callRPCMethod('session.use_lock', ...params);
  }
  /**
   *
   * @param value
   */
  public useLockSet: RPCMethods['session.use_lock.set'] = <P extends RPCMethodParams['session.use_lock.set']>(...params: P) => {
    return this.rpc.callRPCMethod('session.use_lock.set', ...params);
  }
}
