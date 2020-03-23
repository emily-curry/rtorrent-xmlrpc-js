// AUTO-GENERATED - DO NOT MODIFY //
import { RPCMethods, RPCMethodParams } from '../types';
import { RPCClient } from '../util/RPCClient';

/** A client that exposes all t.* RPC methods as directly callable functions. */
export class TrackerClient {
  constructor(protected readonly rpc: RPCClient) {}
  /**
   *
   * @param infohash
   * @param calls
   */
  public multicall: RPCMethods['t.multicall'] = <P extends RPCMethodParams['t.multicall']>(...params: P) => {
    return this.rpc.callRPCMethod('t.multicall', ...params);
  }
  /**
   *
   * @param target
   */
  public activityTimeLast: RPCMethods['t.activity_time_last'] = <P extends RPCMethodParams['t.activity_time_last']>(...params: P) => {
    return this.rpc.callRPCMethod('t.activity_time_last', ...params);
  }
  /**
   *
   * @param target
   */
  public activityTimeNext: RPCMethods['t.activity_time_next'] = <P extends RPCMethodParams['t.activity_time_next']>(...params: P) => {
    return this.rpc.callRPCMethod('t.activity_time_next', ...params);
  }
  /**
   *
   * @param target
   */
  public canScrape: RPCMethods['t.can_scrape'] = <P extends RPCMethodParams['t.can_scrape']>(...params: P) => {
    return this.rpc.callRPCMethod('t.can_scrape', ...params);
  }
  /**
   *
   * @param target
   */
  public isUsable: RPCMethods['t.is_usable'] = <P extends RPCMethodParams['t.is_usable']>(...params: P) => {
    return this.rpc.callRPCMethod('t.is_usable', ...params);
  }
  /**
   *
   * @param target
   */
  public isEnabled: RPCMethods['t.is_enabled'] = <P extends RPCMethodParams['t.is_enabled']>(...params: P) => {
    return this.rpc.callRPCMethod('t.is_enabled', ...params);
  }
  /**
   *
   * @param target
   */
  public isEnabledSet: RPCMethods['t.is_enabled.set'] = <P extends RPCMethodParams['t.is_enabled.set']>(...params: P) => {
    return this.rpc.callRPCMethod('t.is_enabled.set', ...params);
  }
  /**
   *
   * @param target
   */
  public disable: RPCMethods['t.disable'] = <P extends RPCMethodParams['t.disable']>(...params: P) => {
    return this.rpc.callRPCMethod('t.disable', ...params);
  }
  /**
   *
   * @param target
   */
  public enable: RPCMethods['t.enable'] = <P extends RPCMethodParams['t.enable']>(...params: P) => {
    return this.rpc.callRPCMethod('t.enable', ...params);
  }
  /**
   *
   * @param target
   */
  public failedCounter: RPCMethods['t.failed_counter'] = <P extends RPCMethodParams['t.failed_counter']>(...params: P) => {
    return this.rpc.callRPCMethod('t.failed_counter', ...params);
  }
  /**
   *
   * @param target
   */
  public failedTimeLast: RPCMethods['t.failed_time_last'] = <P extends RPCMethodParams['t.failed_time_last']>(...params: P) => {
    return this.rpc.callRPCMethod('t.failed_time_last', ...params);
  }
  /**
   *
   * @param target
   */
  public failedTimeNext: RPCMethods['t.failed_time_next'] = <P extends RPCMethodParams['t.failed_time_next']>(...params: P) => {
    return this.rpc.callRPCMethod('t.failed_time_next', ...params);
  }
  /**
   *
   * @param target
   */
  public group: RPCMethods['t.group'] = <P extends RPCMethodParams['t.group']>(...params: P) => {
    return this.rpc.callRPCMethod('t.group', ...params);
  }
  /**
   *
   * @param target
   */
  public id: RPCMethods['t.id'] = <P extends RPCMethodParams['t.id']>(...params: P) => {
    return this.rpc.callRPCMethod('t.id', ...params);
  }
  /**
   *
   * @param target
   */
  public isBusy: RPCMethods['t.is_busy'] = <P extends RPCMethodParams['t.is_busy']>(...params: P) => {
    return this.rpc.callRPCMethod('t.is_busy', ...params);
  }
  /**
   *
   * @param target
   */
  public isOpen: RPCMethods['t.is_open'] = <P extends RPCMethodParams['t.is_open']>(...params: P) => {
    return this.rpc.callRPCMethod('t.is_open', ...params);
  }
  /**
   *
   * @param target
   */
  public isExtraTracker: RPCMethods['t.is_extra_tracker'] = <P extends RPCMethodParams['t.is_extra_tracker']>(...params: P) => {
    return this.rpc.callRPCMethod('t.is_extra_tracker', ...params);
  }
  /**
   *
   * @param target
   */
  public latestEvent: RPCMethods['t.latest_event'] = <P extends RPCMethodParams['t.latest_event']>(...params: P) => {
    return this.rpc.callRPCMethod('t.latest_event', ...params);
  }
  /**
   *
   * @param target
   */
  public latestSumPeers: RPCMethods['t.latest_sum_peers'] = <P extends RPCMethodParams['t.latest_sum_peers']>(...params: P) => {
    return this.rpc.callRPCMethod('t.latest_sum_peers', ...params);
  }
  /**
   *
   * @param target
   */
  public latestNewPeers: RPCMethods['t.latest_new_peers'] = <P extends RPCMethodParams['t.latest_new_peers']>(...params: P) => {
    return this.rpc.callRPCMethod('t.latest_new_peers', ...params);
  }
  /**
   *
   * @param target
   */
  public minInterval: RPCMethods['t.min_interval'] = <P extends RPCMethodParams['t.min_interval']>(...params: P) => {
    return this.rpc.callRPCMethod('t.min_interval', ...params);
  }
  /**
   *
   * @param target
   */
  public normalInterval: RPCMethods['t.normal_interval'] = <P extends RPCMethodParams['t.normal_interval']>(...params: P) => {
    return this.rpc.callRPCMethod('t.normal_interval', ...params);
  }
  /**
   *
   * @param target
   */
  public scrapeCounter: RPCMethods['t.scrape_counter'] = <P extends RPCMethodParams['t.scrape_counter']>(...params: P) => {
    return this.rpc.callRPCMethod('t.scrape_counter', ...params);
  }
  /**
   *
   * @param target
   */
  public scrapeDownloaded: RPCMethods['t.scrape_downloaded'] = <P extends RPCMethodParams['t.scrape_downloaded']>(...params: P) => {
    return this.rpc.callRPCMethod('t.scrape_downloaded', ...params);
  }
  /**
   *
   * @param target
   */
  public scrapeComplete: RPCMethods['t.scrape_complete'] = <P extends RPCMethodParams['t.scrape_complete']>(...params: P) => {
    return this.rpc.callRPCMethod('t.scrape_complete', ...params);
  }
  /**
   *
   * @param target
   */
  public scrapeIncomplete: RPCMethods['t.scrape_incomplete'] = <P extends RPCMethodParams['t.scrape_incomplete']>(...params: P) => {
    return this.rpc.callRPCMethod('t.scrape_incomplete', ...params);
  }
  /**
   *
   * @param target
   */
  public scrapeTimeLast: RPCMethods['t.scrape_time_last'] = <P extends RPCMethodParams['t.scrape_time_last']>(...params: P) => {
    return this.rpc.callRPCMethod('t.scrape_time_last', ...params);
  }
  /**
   *
   * @param target
   */
  public successCounter: RPCMethods['t.success_counter'] = <P extends RPCMethodParams['t.success_counter']>(...params: P) => {
    return this.rpc.callRPCMethod('t.success_counter', ...params);
  }
  /**
   *
   * @param target
   */
  public successTimeLast: RPCMethods['t.success_time_last'] = <P extends RPCMethodParams['t.success_time_last']>(...params: P) => {
    return this.rpc.callRPCMethod('t.success_time_last', ...params);
  }
  /**
   *
   * @param target
   */
  public successTimeNext: RPCMethods['t.success_time_next'] = <P extends RPCMethodParams['t.success_time_next']>(...params: P) => {
    return this.rpc.callRPCMethod('t.success_time_next', ...params);
  }
  /**
   *
   * @param target
   */
  public type: RPCMethods['t.type'] = <P extends RPCMethodParams['t.type']>(...params: P) => {
    return this.rpc.callRPCMethod('t.type', ...params);
  }
  /**
   *
   * @param target
   */
  public url: RPCMethods['t.url'] = <P extends RPCMethodParams['t.url']>(...params: P) => {
    return this.rpc.callRPCMethod('t.url', ...params);
  }
}
