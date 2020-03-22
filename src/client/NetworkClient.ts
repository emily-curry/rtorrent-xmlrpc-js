// AUTO-GENERATED - DO NOT MODIFY //
import { RPCMethods, RPCMethodParams } from '../types';
import { RPCClient } from '../util/RPCClient';

/** A client that exposes all network.* RPC methods as directly callable functions. */
export class NetworkClient {
  constructor(protected readonly rpc: RPCClient) {}
  /**
   *
   * @param seconds
   */
  public httpDnsCacheTimeoutSet: RPCMethods['network.http.dns_cache_timeout.set'] = <P extends RPCMethodParams['network.http.dns_cache_timeout.set']>(...params: P) => this.rpc.callRPCMethod('network.http.dns_cache_timeout.set', ...params);
  /**
   *
   */
  public httpDnsCacheTimeout: RPCMethods['network.http.dns_cache_timeout'] = <P extends RPCMethodParams['network.http.dns_cache_timeout']>(...params: P) => this.rpc.callRPCMethod('network.http.dns_cache_timeout', ...params);
  /**
   *
   */
  public httpCurrentOpen: RPCMethods['network.http.current_open'] = <P extends RPCMethodParams['network.http.current_open']>(...params: P) => this.rpc.callRPCMethod('network.http.current_open', ...params);
  /**
   *
   */
  public httpMaxOpen: RPCMethods['network.http.max_open'] = <P extends RPCMethodParams['network.http.max_open']>(...params: P) => this.rpc.callRPCMethod('network.http.max_open', ...params);
  /**
   *
   * @param max
   */
  public httpMaxOpenSet: RPCMethods['network.http.max_open.set'] = <P extends RPCMethodParams['network.http.max_open.set']>(...params: P) => this.rpc.callRPCMethod('network.http.max_open.set', ...params);
  /**
   *
   */
  public receiveBufferSize: RPCMethods['network.receive_buffer.size'] = <P extends RPCMethodParams['network.receive_buffer.size']>(...params: P) => this.rpc.callRPCMethod('network.receive_buffer.size', ...params);
  /**
   *
   * @param size
   */
  public receiveBufferSizeSet: RPCMethods['network.receive_buffer.size.set'] = <P extends RPCMethodParams['network.receive_buffer.size.set']>(...params: P) => this.rpc.callRPCMethod('network.receive_buffer.size.set', ...params);
  /**
   *
   */
  public sendBufferSize: RPCMethods['network.send_buffer.size'] = <P extends RPCMethodParams['network.send_buffer.size']>(...params: P) => this.rpc.callRPCMethod('network.send_buffer.size', ...params);
  /**
   *
   * @param size
   */
  public sendBufferSizeSet: RPCMethods['network.send_buffer.size.set'] = <P extends RPCMethodParams['network.send_buffer.size.set']>(...params: P) => this.rpc.callRPCMethod('network.send_buffer.size.set', ...params);
  /**
   *
   */
  public scgiDontRoute: RPCMethods['network.scgi.dont_route'] = <P extends RPCMethodParams['network.scgi.dont_route']>(...params: P) => this.rpc.callRPCMethod('network.scgi.dont_route', ...params);
  /**
   *
   * @param bool
   */
  public scgiDontRouteSet: RPCMethods['network.scgi.dont_route.set'] = <P extends RPCMethodParams['network.scgi.dont_route.set']>(...params: P) => this.rpc.callRPCMethod('network.scgi.dont_route.set', ...params);
  /**
   *
   * @param path
   */
  public scgiOpenLocal: RPCMethods['network.scgi.open_local'] = <P extends RPCMethodParams['network.scgi.open_local']>(...params: P) => this.rpc.callRPCMethod('network.scgi.open_local', ...params);
  /**
   *
   * @param host
   */
  public scgiOpenPort: RPCMethods['network.scgi.open_port'] = <P extends RPCMethodParams['network.scgi.open_port']>(...params: P) => this.rpc.callRPCMethod('network.scgi.open_port', ...params);
  /**
   *
   * @param flag
   */
  public tosSet: RPCMethods['network.tos.set'] = <P extends RPCMethodParams['network.tos.set']>(...params: P) => this.rpc.callRPCMethod('network.tos.set', ...params);
  /**
   *
   * @param value
   */
  public xmlrpcDialectSet: RPCMethods['network.xmlrpc.dialect.set'] = <P extends RPCMethodParams['network.xmlrpc.dialect.set']>(...params: P) => this.rpc.callRPCMethod('network.xmlrpc.dialect.set', ...params);
  /**
   *
   */
  public xmlrpcSizeLimit: RPCMethods['network.xmlrpc.size_limit'] = <P extends RPCMethodParams['network.xmlrpc.size_limit']>(...params: P) => this.rpc.callRPCMethod('network.xmlrpc.size_limit', ...params);
  /**
   *
   * @param maxSize
   */
  public xmlrpcSizeLimitSet: RPCMethods['network.xmlrpc.size_limit.set'] = <P extends RPCMethodParams['network.xmlrpc.size_limit.set']>(...params: P) => this.rpc.callRPCMethod('network.xmlrpc.size_limit.set', ...params);
}
