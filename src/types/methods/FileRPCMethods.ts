import { RPCMethodMulticallReturn } from '../RPC';

export interface FileRPCMethods {
  /**
   *
   * @param infohash
   * @param pattern
   * @param calls
   */
  ['f.multicall']<C extends Exclude<keyof FileRPCMethods, 'f.multicall'>[]>(
    infohash: string,
    pattern: string,
    ...calls: C
  ): Promise<RPCMethodMulticallReturn<C>>;
  /**
   *
   * @param infohash
   */
  ['f.completed_chunks'](infohash: string): Promise<number>;
  /**
   *
   * @param infohash
   */
  ['f.frozen_path'](infohash: string): Promise<string>;
  /**
   *
   * @param infohash
   */
  ['f.last_touched'](infohash: string): Promise<number>;
  /**
   *
   * @param infohash
   */
  ['f.offset'](infohash: string): Promise<number>;
  /**
   *
   * @param infohash
   */
  ['f.path'](infohash: string): Promise<string>;
  /**
   *
   * @param infohash
   */
  ['f.path_components'](infohash: string): Promise<unknown>;
  /**
   *
   * @param infohash
   */
  ['f.path_depth'](infohash: string): Promise<number>;
  /**
   *
   * @param infohash
   */
  ['f.prioritize_first'](infohash: string): Promise<0 | 1>;
  /**
   *
   * @param infohash
   */
  ['f.prioritize_first.disable'](infohash: string): Promise<0>;
  /**
   *
   * @param infohash
   */
  ['f.prioritize_first.enable'](infohash: string): Promise<0>;
  /**
   *
   * @param infohash
   */
  ['f.prioritize_last'](infohash: string): Promise<0 | 1>;
  /**
   *
   * @param infohash
   */
  ['f.prioritize_last.disable'](infohash: string): Promise<0>;
  /**
   *
   * @param infohash
   */
  ['f.prioritize_last.enable'](infohash: string): Promise<0>;
  /**
   *
   * @param infohash
   */
  ['f.priority'](infohash: string): Promise<number>;
  /**
   *
   * @param infohash
   * @param priority
   */
  ['f.priority.set'](infohash: string, priority: number): Promise<0>;
  /**
   *
   * @param infohash
   */
  ['f.size_bytes'](infohash: string): Promise<number>;
  /**
   *
   * @param infohash
   */
  ['f.size_chunks'](infohash: string): Promise<number>;
}
