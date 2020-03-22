import { RPCMethodMulticallReturn } from '../RPC';

export interface PeerRPCMethods {
  /**
   *
   * @param infohash
   * @param calls
   */
  ['p.multicall']<C extends Exclude<keyof PeerRPCMethods, 'p.multicall'>[]>(
    infohash: string,
    ...calls: C
  ): Promise<RPCMethodMulticallReturn<C>>;
  /**
   *
   * @param target
   */
  ['p.address'](target: string): Promise<string>;
  /**
   *
   * @param target
   */
  ['p.banned'](target: string): Promise<0 | 1>;
  /**
   *
   * @param target
   */
  ['p.banned.set'](target: string): Promise<0>;
  /**
   *
   * @param target
   */
  ['p.client_version'](target: string): Promise<string>;
  /**
   *
   * @param target
   */
  ['p.completed_percent'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['p.disconnect'](target: string): Promise<0>;
  /**
   *
   * @param target
   */
  ['p.disconnect_delayed'](target: string): Promise<0>;
  /**
   *
   * @param target
   */
  ['p.down_rate'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['p.down_total'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['p.id'](target: string): Promise<string>;
  /**
   *
   * @param target
   */
  ['p.id_html'](target: string): Promise<string>;
  /**
   *
   * @param target
   */
  ['p.is_encrypted'](target: string): Promise<0 | 1>;
  /**
   *
   * @param target
   */
  ['p.is_incoming'](target: string): Promise<0 | 1>;
  /**
   *
   * @param target
   */
  ['p.is_obfuscated'](target: string): Promise<0 | 1>;
  /**
   *
   * @param target
   */
  ['p.is_preferred'](target: string): Promise<0 | 1>;
  /**
   *
   * @param target
   */
  ['p.is_unwanted'](target: string): Promise<0 | 1>;
  /**
   *
   * @param target
   */
  ['p.options_str'](target: string): Promise<string>;
  /**
   *
   * @param target
   */
  ['p.peer_rate'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['p.peer_total'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['p.port'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['p.snubbed'](target: string): Promise<0 | 1>;
  /**
   *
   * @param target
   */
  ['p.is_snubbed'](target: string): Promise<0 | 1>;
  /**
   *
   * @param target
   */
  ['p.snubbed.set'](target: string): Promise<0>;
  /**
   *
   * @param target
   */
  ['p.up_rate'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['p.up_total'](target: string): Promise<number>;
}
