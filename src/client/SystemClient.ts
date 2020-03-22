// AUTO-GENERATED - DO NOT MODIFY //
import { RPCMethods, RPCMethodParams } from '../types';
import { RPCClient } from '../util/RPCClient';

/** A client that exposes all system. RPC methods as directly callable functions. */
export class SystemClient {
  constructor(protected readonly rpc: RPCClient) {}
  
  public multicall: RPCMethods['system.multicall'] = <P extends RPCMethodParams['system.multicall']>(...params: P) => this.rpc.callRPCMethod('system.multicall', ...params);
  
  public listMethods: RPCMethods['system.listMethods'] = <P extends RPCMethodParams['system.listMethods']>(...params: P) => this.rpc.callRPCMethod('system.listMethods', ...params);
  
  public methodExist: RPCMethods['system.methodExist'] = <P extends RPCMethodParams['system.methodExist']>(...params: P) => this.rpc.callRPCMethod('system.methodExist', ...params);
  
  public methodHelp: RPCMethods['system.methodHelp'] = <P extends RPCMethodParams['system.methodHelp']>(...params: P) => this.rpc.callRPCMethod('system.methodHelp', ...params);
  
  public methodSignature: RPCMethods['system.methodSignature'] = <P extends RPCMethodParams['system.methodSignature']>(...params: P) => this.rpc.callRPCMethod('system.methodSignature', ...params);
  
  public getCapabilities: RPCMethods['system.getCapabilities'] = <P extends RPCMethodParams['system.getCapabilities']>(...params: P) => this.rpc.callRPCMethod('system.getCapabilities', ...params);
  
  public capabilities: RPCMethods['system.capabilities'] = <P extends RPCMethodParams['system.capabilities']>(...params: P) => this.rpc.callRPCMethod('system.capabilities', ...params);
  
  public apiVersion: RPCMethods['system.api_version'] = <P extends RPCMethodParams['system.api_version']>(...params: P) => this.rpc.callRPCMethod('system.api_version', ...params);
  
  public clientVersion: RPCMethods['system.client_version'] = <P extends RPCMethodParams['system.client_version']>(...params: P) => this.rpc.callRPCMethod('system.client_version', ...params);
  
  public libraryVersion: RPCMethods['system.library_version'] = <P extends RPCMethodParams['system.library_version']>(...params: P) => this.rpc.callRPCMethod('system.library_version', ...params);
  
  public clientVersionAsValue: RPCMethods['system.client_version.as_value'] = <P extends RPCMethodParams['system.client_version.as_value']>(...params: P) => this.rpc.callRPCMethod('system.client_version.as_value', ...params);
  
  public colorsEnabled: RPCMethods['system.colors.enabled'] = <P extends RPCMethodParams['system.colors.enabled']>(...params: P) => this.rpc.callRPCMethod('system.colors.enabled', ...params);
  
  public colorsMax: RPCMethods['system.colors.max'] = <P extends RPCMethodParams['system.colors.max']>(...params: P) => this.rpc.callRPCMethod('system.colors.max', ...params);
  
  public colorsRgb: RPCMethods['system.colors.rgb'] = <P extends RPCMethodParams['system.colors.rgb']>(...params: P) => this.rpc.callRPCMethod('system.colors.rgb', ...params);
  
  public cwd: RPCMethods['system.cwd'] = <P extends RPCMethodParams['system.cwd']>(...params: P) => this.rpc.callRPCMethod('system.cwd', ...params);
  
  public cwdSet: RPCMethods['system.cwd.set'] = <P extends RPCMethodParams['system.cwd.set']>(...params: P) => this.rpc.callRPCMethod('system.cwd.set', ...params);
  
  public env: RPCMethods['system.env'] = <P extends RPCMethodParams['system.env']>(...params: P) => this.rpc.callRPCMethod('system.env', ...params);
  
  public fileAllocate: RPCMethods['system.file.allocate'] = <P extends RPCMethodParams['system.file.allocate']>(...params: P) => this.rpc.callRPCMethod('system.file.allocate', ...params);
  
  public fileAllocateSet: RPCMethods['system.file.allocate.set'] = <P extends RPCMethodParams['system.file.allocate.set']>(...params: P) => this.rpc.callRPCMethod('system.file.allocate.set', ...params);
  
  public fileStatusCacheSize: RPCMethods['system.file_status_cache.size'] = <P extends RPCMethodParams['system.file_status_cache.size']>(...params: P) => this.rpc.callRPCMethod('system.file_status_cache.size', ...params);
  
  public fileStatusCachePrune: RPCMethods['system.file_status_cache.prune'] = <P extends RPCMethodParams['system.file_status_cache.prune']>(...params: P) => this.rpc.callRPCMethod('system.file_status_cache.prune', ...params);
  
  public filesClosedCounter: RPCMethods['system.files.closed_counter'] = <P extends RPCMethodParams['system.files.closed_counter']>(...params: P) => this.rpc.callRPCMethod('system.files.closed_counter', ...params);
  
  public filesFailedCounter: RPCMethods['system.files.failed_counter'] = <P extends RPCMethodParams['system.files.failed_counter']>(...params: P) => this.rpc.callRPCMethod('system.files.failed_counter', ...params);
  
  public filesOpenedCounter: RPCMethods['system.files.opened_counter'] = <P extends RPCMethodParams['system.files.opened_counter']>(...params: P) => this.rpc.callRPCMethod('system.files.opened_counter', ...params);
  
  public has: RPCMethods['system.has'] = <P extends RPCMethodParams['system.has']>(...params: P) => this.rpc.callRPCMethod('system.has', ...params);
  
  public hasList: RPCMethods['system.has.list'] = <P extends RPCMethodParams['system.has.list']>(...params: P) => this.rpc.callRPCMethod('system.has.list', ...params);
  
  public hasPrivateMethods: RPCMethods['system.has.private_methods'] = <P extends RPCMethodParams['system.has.private_methods']>(...params: P) => this.rpc.callRPCMethod('system.has.private_methods', ...params);
  
  public hasPublicMethods: RPCMethods['system.has.public_methods'] = <P extends RPCMethodParams['system.has.public_methods']>(...params: P) => this.rpc.callRPCMethod('system.has.public_methods', ...params);
  
  public hostname: RPCMethods['system.hostname'] = <P extends RPCMethodParams['system.hostname']>(...params: P) => this.rpc.callRPCMethod('system.hostname', ...params);
  
  public pid: RPCMethods['system.pid'] = <P extends RPCMethodParams['system.pid']>(...params: P) => this.rpc.callRPCMethod('system.pid', ...params);
  
  public random: RPCMethods['system.random'] = <P extends RPCMethodParams['system.random']>(...params: P) => this.rpc.callRPCMethod('system.random', ...params);
  
  public time: RPCMethods['system.time'] = <P extends RPCMethodParams['system.time']>(...params: P) => this.rpc.callRPCMethod('system.time', ...params);
  
  public timeSeconds: RPCMethods['system.time_seconds'] = <P extends RPCMethodParams['system.time_seconds']>(...params: P) => this.rpc.callRPCMethod('system.time_seconds', ...params);
  
  public timeUsec: RPCMethods['system.time_usec'] = <P extends RPCMethodParams['system.time_usec']>(...params: P) => this.rpc.callRPCMethod('system.time_usec', ...params);
  
  public umaskSet: RPCMethods['system.umask.set'] = <P extends RPCMethodParams['system.umask.set']>(...params: P) => this.rpc.callRPCMethod('system.umask.set', ...params);
}
