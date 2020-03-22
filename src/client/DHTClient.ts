// AUTO-GENERATED - DO NOT MODIFY //
import { RPCMethods, RPCMethodParams } from '../types';
import { RPCClient } from '../util/RPCClient';

/** A client that exposes all dht.* RPC methods as directly callable functions. */
export class DHTClient {
  constructor(protected readonly rpc: RPCClient) {}
  /**
   *
   * @param host
   */
  public addNode: RPCMethods['dht.add_node'] = <P extends RPCMethodParams['dht.add_node']>(...params: P) => this.rpc.callRPCMethod('dht.add_node', ...params);
  /**
   *
   * @param mode
   */
  public modeSet: RPCMethods['dht.mode.set'] = <P extends RPCMethodParams['dht.mode.set']>(...params: P) => this.rpc.callRPCMethod('dht.mode.set', ...params);
  /**
   *
   * @param mode
   */
  public dht: RPCMethods['dht'] = <P extends RPCMethodParams['dht']>(...params: P) => this.rpc.callRPCMethod('dht', ...params);
  /**
   *
   */
  public port: RPCMethods['dht.port'] = <P extends RPCMethodParams['dht.port']>(...params: P) => this.rpc.callRPCMethod('dht.port', ...params);
  /**
   *
   * @param port
   */
  public portSet: RPCMethods['dht.port.set'] = <P extends RPCMethodParams['dht.port.set']>(...params: P) => this.rpc.callRPCMethod('dht.port.set', ...params);
  /**
   *
   * @param port
   */
  public dhtPort: RPCMethods['dht_port'] = <P extends RPCMethodParams['dht_port']>(...params: P) => this.rpc.callRPCMethod('dht_port', ...params);
}
