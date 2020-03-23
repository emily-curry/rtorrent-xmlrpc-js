// AUTO-GENERATED - DO NOT MODIFY //
import { RPCMethods, RPCMethodParams } from '../types';
import { RPCClient } from '../util/RPCClient';

/** A client that exposes all log.* RPC methods as directly callable functions. */
export class LogClient {
  constructor(protected readonly rpc: RPCClient) {}
  /**
   *
   * @param scope
   * @param name
   */
  public addOutput: RPCMethods['log.add_output'] = <P extends RPCMethodParams['log.add_output']>(...params: P) => {
    return this.rpc.callRPCMethod('log.add_output', ...params);
  }
  /**
   *
   * @param path
   */
  public execute: RPCMethods['log.execute'] = <P extends RPCMethodParams['log.execute']>(...params: P) => {
    return this.rpc.callRPCMethod('log.execute', ...params);
  }
  /**
   *
   * @param path
   */
  public xmlrpc: RPCMethods['log.xmlrpc'] = <P extends RPCMethodParams['log.xmlrpc']>(...params: P) => {
    return this.rpc.callRPCMethod('log.xmlrpc', ...params);
  }
  /**
   *
   * @param name
   * @param logfilePath
   * @param scope
   */
  public openFile: RPCMethods['log.open_file'] = <P extends RPCMethodParams['log.open_file']>(...params: P) => {
    return this.rpc.callRPCMethod('log.open_file', ...params);
  }
  /**
   *
   * @param name
   * @param logfilePath
   * @param scope
   */
  public openFilePid: RPCMethods['log.open_file_pid'] = <P extends RPCMethodParams['log.open_file_pid']>(...params: P) => {
    return this.rpc.callRPCMethod('log.open_file_pid', ...params);
  }
  /**
   *
   * @param name
   * @param logfilePath
   * @param scope
   */
  public openGzFile: RPCMethods['log.open_gz_file'] = <P extends RPCMethodParams['log.open_gz_file']>(...params: P) => {
    return this.rpc.callRPCMethod('log.open_gz_file', ...params);
  }
  /**
   *
   * @param name
   * @param logfilePath
   * @param scope
   */
  public openGzFilePid: RPCMethods['log.open_gz_file_pid'] = <P extends RPCMethodParams['log.open_gz_file_pid']>(...params: P) => {
    return this.rpc.callRPCMethod('log.open_gz_file_pid', ...params);
  }
  /**
   *
   * @param dumpfilePath
   */
  public vmmapDump: RPCMethods['log.vmmap.dump'] = <P extends RPCMethodParams['log.vmmap.dump']>(...params: P) => {
    return this.rpc.callRPCMethod('log.vmmap.dump', ...params);
  }
  /**
   *
   * @param dumpfilePath
   */
  public messages: RPCMethods['log.messages'] = <P extends RPCMethodParams['log.messages']>(...params: P) => {
    return this.rpc.callRPCMethod('log.messages', ...params);
  }
}
