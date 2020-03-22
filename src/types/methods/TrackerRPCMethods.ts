import { RPCMethodMulticallReturn } from '../RPC';

export interface TrackerRPCMethods {
  /**
   *
   * @param infohash
   * @param calls
   */
  ['t.multicall']<C extends Exclude<keyof TrackerRPCMethods, 't.multicall'>[]>(
    infohash: string,
    ...calls: C
  ): Promise<RPCMethodMulticallReturn<C>>;
  /**
   *
   * @param target
   */
  ['t.activity_time_last'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.activity_time_next'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.can_scrape'](target: string): Promise<0 | 1>;
  /**
   *
   * @param target
   */
  ['t.is_usable'](target: string): Promise<0 | 1>;
  /**
   *
   * @param target
   */
  ['t.is_enabled'](target: string): Promise<0 | 1>;
  /**
   *
   * @param target
   */
  ['t.is_enabled.set'](target: string): Promise<0>;
  /**
   *
   * @param target
   */
  ['t.disable'](target: string): Promise<0>;
  /**
   *
   * @param target
   */
  ['t.enable'](target: string): Promise<0>;
  /**
   *
   * @param target
   */
  ['t.failed_counter'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.failed_time_last'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.failed_time_next'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.group'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.id'](target: string): Promise<string>;
  /**
   *
   * @param target
   */
  ['t.is_busy'](target: string): Promise<0 | 1>;
  /**
   *
   * @param target
   */
  ['t.is_open'](target: string): Promise<0 | 1>;
  /**
   *
   * @param target
   */
  ['t.is_extra_tracker'](target: string): Promise<0 | 1>;
  /**
   *
   * @param target
   */
  ['t.latest_event'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.latest_sum_peers'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.latest_new_peers'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.min_interval'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.normal_interval'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.scrape_counter'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.scrape_downloaded'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.scrape_complete'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.scrape_incomplete'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.scrape_time_last'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.success_counter'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.success_time_last'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.success_time_next'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.type'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['t.url'](target: string): Promise<string>;
}
