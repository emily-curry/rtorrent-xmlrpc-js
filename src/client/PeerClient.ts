// AUTO-GENERATED - DO NOT MODIFY //
import { RPCMethods, RPCMethodParams } from '../types';
import { RPCClient } from '../util/RPCClient';

/** A client that exposes all p.* RPC methods as directly callable functions. */
export class PeerClient {
  constructor(protected readonly rpc: RPCClient) {}
  /**
   *
   * @param infohash
   * @param calls
   */
  public multicall: RPCMethods['p.multicall'] = <P extends RPCMethodParams['p.multicall']>(...params: P) => this.rpc.callRPCMethod('p.multicall', ...params);
  /**
   *
   * @param target
   */
  public address: RPCMethods['p.address'] = <P extends RPCMethodParams['p.address']>(...params: P) => this.rpc.callRPCMethod('p.address', ...params);
  /**
   *
   * @param target
   */
  public banned: RPCMethods['p.banned'] = <P extends RPCMethodParams['p.banned']>(...params: P) => this.rpc.callRPCMethod('p.banned', ...params);
  /**
   *
   * @param target
   */
  public bannedSet: RPCMethods['p.banned.set'] = <P extends RPCMethodParams['p.banned.set']>(...params: P) => this.rpc.callRPCMethod('p.banned.set', ...params);
  /**
   *
   * @param target
   */
  public clientVersion: RPCMethods['p.client_version'] = <P extends RPCMethodParams['p.client_version']>(...params: P) => this.rpc.callRPCMethod('p.client_version', ...params);
  /**
   *
   * @param target
   */
  public completedPercent: RPCMethods['p.completed_percent'] = <P extends RPCMethodParams['p.completed_percent']>(...params: P) => this.rpc.callRPCMethod('p.completed_percent', ...params);
  /**
   *
   * @param target
   */
  public disconnect: RPCMethods['p.disconnect'] = <P extends RPCMethodParams['p.disconnect']>(...params: P) => this.rpc.callRPCMethod('p.disconnect', ...params);
  /**
   *
   * @param target
   */
  public disconnectDelayed: RPCMethods['p.disconnect_delayed'] = <P extends RPCMethodParams['p.disconnect_delayed']>(...params: P) => this.rpc.callRPCMethod('p.disconnect_delayed', ...params);
  /**
   *
   * @param target
   */
  public downRate: RPCMethods['p.down_rate'] = <P extends RPCMethodParams['p.down_rate']>(...params: P) => this.rpc.callRPCMethod('p.down_rate', ...params);
  /**
   *
   * @param target
   */
  public downTotal: RPCMethods['p.down_total'] = <P extends RPCMethodParams['p.down_total']>(...params: P) => this.rpc.callRPCMethod('p.down_total', ...params);
  /**
   *
   * @param target
   */
  public id: RPCMethods['p.id'] = <P extends RPCMethodParams['p.id']>(...params: P) => this.rpc.callRPCMethod('p.id', ...params);
  /**
   *
   * @param target
   */
  public idHtml: RPCMethods['p.id_html'] = <P extends RPCMethodParams['p.id_html']>(...params: P) => this.rpc.callRPCMethod('p.id_html', ...params);
  /**
   *
   * @param target
   */
  public isEncrypted: RPCMethods['p.is_encrypted'] = <P extends RPCMethodParams['p.is_encrypted']>(...params: P) => this.rpc.callRPCMethod('p.is_encrypted', ...params);
  /**
   *
   * @param target
   */
  public isIncoming: RPCMethods['p.is_incoming'] = <P extends RPCMethodParams['p.is_incoming']>(...params: P) => this.rpc.callRPCMethod('p.is_incoming', ...params);
  /**
   *
   * @param target
   */
  public isObfuscated: RPCMethods['p.is_obfuscated'] = <P extends RPCMethodParams['p.is_obfuscated']>(...params: P) => this.rpc.callRPCMethod('p.is_obfuscated', ...params);
  /**
   *
   * @param target
   */
  public isPreferred: RPCMethods['p.is_preferred'] = <P extends RPCMethodParams['p.is_preferred']>(...params: P) => this.rpc.callRPCMethod('p.is_preferred', ...params);
  /**
   *
   * @param target
   */
  public isUnwanted: RPCMethods['p.is_unwanted'] = <P extends RPCMethodParams['p.is_unwanted']>(...params: P) => this.rpc.callRPCMethod('p.is_unwanted', ...params);
  /**
   *
   * @param target
   */
  public optionsStr: RPCMethods['p.options_str'] = <P extends RPCMethodParams['p.options_str']>(...params: P) => this.rpc.callRPCMethod('p.options_str', ...params);
  /**
   *
   * @param target
   */
  public peerRate: RPCMethods['p.peer_rate'] = <P extends RPCMethodParams['p.peer_rate']>(...params: P) => this.rpc.callRPCMethod('p.peer_rate', ...params);
  /**
   *
   * @param target
   */
  public peerTotal: RPCMethods['p.peer_total'] = <P extends RPCMethodParams['p.peer_total']>(...params: P) => this.rpc.callRPCMethod('p.peer_total', ...params);
  /**
   *
   * @param target
   */
  public port: RPCMethods['p.port'] = <P extends RPCMethodParams['p.port']>(...params: P) => this.rpc.callRPCMethod('p.port', ...params);
  /**
   *
   * @param target
   */
  public snubbed: RPCMethods['p.snubbed'] = <P extends RPCMethodParams['p.snubbed']>(...params: P) => this.rpc.callRPCMethod('p.snubbed', ...params);
  /**
   *
   * @param target
   */
  public isSnubbed: RPCMethods['p.is_snubbed'] = <P extends RPCMethodParams['p.is_snubbed']>(...params: P) => this.rpc.callRPCMethod('p.is_snubbed', ...params);
  /**
   *
   * @param target
   */
  public snubbedSet: RPCMethods['p.snubbed.set'] = <P extends RPCMethodParams['p.snubbed.set']>(...params: P) => this.rpc.callRPCMethod('p.snubbed.set', ...params);
  /**
   *
   * @param target
   */
  public upRate: RPCMethods['p.up_rate'] = <P extends RPCMethodParams['p.up_rate']>(...params: P) => this.rpc.callRPCMethod('p.up_rate', ...params);
  /**
   *
   * @param target
   */
  public upTotal: RPCMethods['p.up_total'] = <P extends RPCMethodParams['p.up_total']>(...params: P) => this.rpc.callRPCMethod('p.up_total', ...params);
}
