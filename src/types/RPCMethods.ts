import {
  RPCMethodCallDescriptorLoad,
  RPCMethodMulticallReturn,
  RPCMethodCallDescriptorSystem,
  RPCMethodSystemMulticallReturn
} from './RPC';

export interface DownloadRPCMethods {
  ['d.multicall2']<C extends Exclude<keyof DownloadRPCMethods, 'd.multicall2'>[]>(
    hash: '',
    view: string,
    ...calls: C
  ): Promise<RPCMethodMulticallReturn<C>>;
  ['download_list'](hash: '', view: string): Promise<Array<string>>;
  ['d.base_filename'](hash: string): Promise<string>;
  ['d.base_path'](hash: string): Promise<string>;
  ['d.directory'](hash: string): Promise<string>;
  ['d.directory_base'](hash: string): Promise<string>;
  ['d.directory.set'](hash: string, value: string): Promise<0>;
  ['d.directory_base.set'](hash: string, value: string): Promise<0>;
  ['d.state'](hash: string): Promise<0 | 1>;
  ['d.state_changed'](hash: string): Promise<number>;
  ['d.state_counter'](hash: string): Promise<number>;
  ['d.is_open'](hash: string): Promise<0 | 1>;
  ['d.is_active'](hash: string): Promise<0 | 1>;
  ['d.accepting_seeders'](hash: string): Promise<0 | 1>;
  ['d.accepting_seeders.disable'](hash: string): Promise<0>;
  ['d.accepting_seeders.enable'](hash: string): Promise<0>;
  ['d.bitfield'](hash: string): Promise<string>;
  ['d.bytes_done'](hash: string): Promise<number>;
  ['d.check_hash'](hash: string): Promise<0>;
  ['d.chunk_size'](hash: string): Promise<number>;
  ['d.chunks_hashed'](hash: string): Promise<number>;
  ['d.complete'](hash: string): Promise<0 | 1>;
  ['d.incomplete'](hash: string): Promise<0 | 1>;
  ['d.completed_bytes'](hash: string): Promise<number>;
  ['d.completed_chunks'](hash: string): Promise<number>;
  ['d.create_link'](type: string, path: string, suffix: string): Promise<0>;
  ['d.delete_link'](type: string, path: string, suffix: string): Promise<0>;
  ['d.delete_tied'](hash: string): Promise<0>;
  ['d.creation_date'](hash: string): Promise<number>;
  ['d.custom'](hash: string, key: string): Promise<string>;
  ['d.custom_throw'](hash: string, key: string): Promise<string>;
  ['d.custom.set'](hash: string, key: string, value: string): Promise<0>;
  ['d.custom1'](hash: string): Promise<string>;
  ['d.custom1.set'](hash: string, value: unknown): Promise<0>;
  ['d.custom.if_z'](hash: string, key: string, defaultValue: unknown): Promise<string>;
  ['d.custom.set_if_z'](hash: string, key: string, value: unknown): Promise<0>;
  ['d.custom.erase'](hash: string, key: string): Promise<0>;
  ['d.custom.toggle'](hash: string, key: string): Promise<number>;
  ['d.custom.as_value'](hash: string, key: string): Promise<number>;
  ['d.custom.keys'](hash: string): Promise<unknown>;
  ['d.custom.items'](hash: string): Promise<unknown>;
  ['d.disconnect.seeders'](hash: string): Promise<0>;
  ['d.down.rate'](hash: string): Promise<number>;
  ['d.down.total'](hash: string): Promise<number>;
  ['d.downloads_max'](hash: string): Promise<number>;
  ['d.downloads_max.set'](hash: string, max: unknown): Promise<0>;
  ['d.downloads_min'](hash: string): Promise<number>;
  ['d.downloads_min.set'](hash: string, max: unknown): Promise<0>;
  ['d.erase'](hash: string): Promise<0>;
  ['d.free_diskspace'](hash: string): Promise<number>;
  ['d.hash'](hash: string): Promise<string>;
  ['d.hashing'](hash: string): Promise<number>;
  ['d.hashing_failed'](hash: string): Promise<0 | 1>;
  ['d.hashing_failed.set'](hash: string): Promise<0>;
  ['d.ignore_commands'](hash: string): Promise<0 | 1>;
  ['d.ignore_commands.set'](hash: string): Promise<0>;
  ['d.is_hash_checked'](hash: string): Promise<0 | 1>;
  ['d.is_hash_checking'](hash: string): Promise<0 | 1>;
  ['d.is_meta'](hash: string): Promise<0 | 1>;
  ['d.is_multi_file'](hash: string): Promise<0 | 1>;
  ['d.is_pex_active'](hash: string): Promise<0 | 1>;
  ['d.is_private'](hash: string): Promise<0 | 1>;
  ['d.left_bytes'](hash: string): Promise<number>;
  ['d.load_date'](hash: string): Promise<number>;
  ['d.local_id'](hash: string): Promise<string>;
  ['d.local_id_html'](hash: string): Promise<string>;
  ['d.max_file_size'](hash: string): Promise<number>;
  ['d.max_file_size.set'](hash: string, bytes: unknown): Promise<0>;
  ['d.message'](hash: string): Promise<string>;
  ['d.message.set'](hash: string, message: unknown): Promise<0>;
  ['d.message.alert'](hash: string): Promise<number>;
  ['d.name'](hash: string): Promise<string>;
  ['d.peer_exchange'](hash: string): Promise<0 | 1>;
  ['d.peer_exchange.set'](hash: string): Promise<0>;
  ['d.priority'](hash: string): Promise<number>;
  ['d.priority.set'](hash: string, prio: unknown): Promise<0>;
  ['d.priority_str'](hash: string): Promise<string>;
  ['d.size_bytes'](hash: string): Promise<number>;
  ['d.size_chunks'](hash: string): Promise<number>;
  ['d.size_files'](hash: string): Promise<number>;
  ['d.size_pex'](hash: string): Promise<number>;
  ['d.skip.rate'](hash: string): Promise<number>;
  ['d.skip.total'](hash: string): Promise<number>;
  ['d.timestamp.finished'](hash: string): Promise<number>;
  ['d.timestamp.started'](hash: string): Promise<number>;
  ['d.tracker.insert'](hash: string, group: unknown, url: unknown): Promise<0>;
  ['d.tracker.send_scrape'](hash: string, delay: unknown): Promise<0>;
  ['d.tracker_announce'](hash: string): Promise<0>;
  ['d.tracker_focus'](hash: string): Promise<number>;
  ['d.tracker_size'](hash: string): Promise<number>;
  ['d.tracker_numwant'](hash: string): Promise<number>;
  ['d.tracker_numwant.set'](hash: string, numwant: unknown): Promise<0>;
  ['d.tracker_scrape.downloaded'](target: string): Promise<number>;
  ['d.tracker_scrape.complete'](target: string): Promise<number>;
  ['d.tracker_scrape.incomplete'](target: string): Promise<number>;
  ['d.up.rate'](hash: string): Promise<number>;
  ['d.up.total'](hash: string): Promise<number>;
  ['d.update_priorities'](hash: string): Promise<0>;
  ['d.uploads_max'](hash: string): Promise<number>;
  ['d.uploads_max.set'](hash: string, max: unknown): Promise<0>;
  ['d.uploads_min'](hash: string): Promise<number>;
  ['d.uploads_min.set'](hash: string, min: unknown): Promise<0>;
  ['d.wanted_chunks'](hash: string): Promise<number>;
}

export interface FileRPCMethods {
  ['f.multicall']<C extends Exclude<keyof FileRPCMethods, 'f.multicall'>[]>(
    infohash: string,
    pattern: string,
    ...calls: C
  ): Promise<RPCMethodMulticallReturn<C>>;
  ['f.completed_chunks'](infohash: string): Promise<number>;
  ['f.frozen_path'](infohash: string): Promise<string>;
  ['f.last_touched'](infohash: string): Promise<number>;
  ['f.offset'](infohash: string): Promise<number>;
  ['f.path'](infohash: string): Promise<string>;
  ['f.path_components'](infohash: string): Promise<unknown>;
  ['f.path_depth'](infohash: string): Promise<number>;
  ['f.prioritize_first'](infohash: string): Promise<0 | 1>;
  ['f.prioritize_first.disable'](infohash: string): Promise<0>;
  ['f.prioritize_first.enable'](infohash: string): Promise<0>;
  ['f.prioritize_last'](infohash: string): Promise<0 | 1>;
  ['f.prioritize_last.disable'](infohash: string): Promise<0>;
  ['f.prioritize_last.enable'](infohash: string): Promise<0>;
  ['f.priority'](infohash: string): Promise<number>;
  ['f.priority.set'](infohash: string, priority: number): Promise<0>;
  ['f.size_bytes'](infohash: string): Promise<number>;
  ['f.size_chunks'](infohash: string): Promise<number>;
}

export interface PeerRPCMethods {
  ['p.multicall']<C extends Exclude<keyof PeerRPCMethods, 'p.multicall'>[]>(
    infohash: string,
    ...calls: C
  ): Promise<RPCMethodMulticallReturn<C>>;
  ['p.address'](target: string): Promise<string>;
  ['p.banned'](target: string): Promise<0 | 1>;
  ['p.banned.set'](target: string): Promise<0>;
  ['p.client_version'](target: string): Promise<string>;
  ['p.completed_percent'](target: string): Promise<number>;
  ['p.disconnect'](target: string): Promise<0>;
  ['p.disconnect_delayed'](target: string): Promise<0>;
  ['p.down_rate'](target: string): Promise<number>;
  ['p.down_total'](target: string): Promise<number>;
  ['p.id'](target: string): Promise<string>;
  ['p.id_html'](target: string): Promise<string>;
  ['p.is_encrypted'](target: string): Promise<0 | 1>;
  ['p.is_incoming'](target: string): Promise<0 | 1>;
  ['p.is_obfuscated'](target: string): Promise<0 | 1>;
  ['p.is_preferred'](target: string): Promise<0 | 1>;
  ['p.is_unwanted'](target: string): Promise<0 | 1>;
  ['p.options_str'](target: string): Promise<string>;
  ['p.peer_rate'](target: string): Promise<number>;
  ['p.peer_total'](target: string): Promise<number>;
  ['p.port'](target: string): Promise<number>;
  ['p.snubbed'](target: string): Promise<0 | 1>;
  ['p.is_snubbed'](target: string): Promise<0 | 1>;
  ['p.snubbed.set'](target: string): Promise<0>;
  ['p.up_rate'](target: string): Promise<number>;
  ['p.up_total'](target: string): Promise<number>;
}

export interface TrackerRPCMethods {
  ['t.multicall']<C extends Exclude<keyof TrackerRPCMethods, 't.multicall'>[]>(
    infohash: string,
    ...calls: C
  ): Promise<RPCMethodMulticallReturn<C>>;
  ['t.activity_time_last'](target: string): Promise<number>;
  ['t.activity_time_next'](target: string): Promise<number>;
  ['t.can_scrape'](target: string): Promise<0 | 1>;
  ['t.is_usable'](target: string): Promise<0 | 1>;
  ['t.is_enabled'](target: string): Promise<0 | 1>;
  ['t.is_enabled.set'](target: string): Promise<0>;
  ['t.disable'](target: string): Promise<0>;
  ['t.enable'](target: string): Promise<0>;
  ['t.failed_counter'](target: string): Promise<number>;
  ['t.failed_time_last'](target: string): Promise<number>;
  ['t.failed_time_next'](target: string): Promise<number>;
  ['t.group'](target: string): Promise<number>;
  ['t.id'](target: string): Promise<string>;
  ['t.is_busy'](target: string): Promise<0 | 1>;
  ['t.is_open'](target: string): Promise<0 | 1>;
  ['t.is_extra_tracker'](target: string): Promise<0 | 1>;
  ['t.latest_event'](target: string): Promise<number>;
  ['t.latest_sum_peers'](target: string): Promise<number>;
  ['t.latest_new_peers'](target: string): Promise<number>;
  ['t.min_interval'](target: string): Promise<number>;
  ['t.normal_interval'](target: string): Promise<number>;
  ['t.scrape_counter'](target: string): Promise<number>;
  ['t.scrape_downloaded'](target: string): Promise<number>;
  ['t.scrape_complete'](target: string): Promise<number>;
  ['t.scrape_incomplete'](target: string): Promise<number>;
  ['t.scrape_time_last'](target: string): Promise<number>;
  ['t.success_counter'](target: string): Promise<number>;
  ['t.success_time_last'](target: string): Promise<number>;
  ['t.success_time_next'](target: string): Promise<number>;
  ['t.type'](target: string): Promise<number>;
  ['t.url'](target: string): Promise<string>;
}

export interface LoadRPCMethods {
  /**
   * Loads a torrent from a url without starting the torrent.
   * @param target Unused.
   * @param url
   * @param postLoadCommands
   */
  ['load.normal']<C extends RPCMethodCallDescriptorLoad[]>(
    target: '',
    url: string,
    ...postLoadCommands: C
  ): Promise<0>;
  /**
   * Loads a torrent from a url and starts the torrent.
   * @param target Unused.
   * @param url
   * @param postLoadCommands
   */
  ['load.start']<C extends RPCMethodCallDescriptorLoad[]>(
    target: '',
    url: string,
    ...postLoadCommands: C
  ): Promise<0>;
  /**
   * Loads a torrent from raw data without starting the torrent.
   * @param target Unused.
   * @param data
   * @param postLoadCommands
   */
  ['load.raw']<C extends RPCMethodCallDescriptorLoad[]>(
    target: '',
    data: Buffer,
    ...postLoadCommands: C
  ): Promise<0>;
  /**
   * Loads a torrent from raw data and starts the torrent.
   * @param target Unused.
   * @param data
   * @param postLoadCommands
   */
  ['load.raw_start']<C extends RPCMethodCallDescriptorLoad[]>(
    target: '',
    data: Buffer,
    ...postLoadCommands: C
  ): Promise<0>;
}

export interface SessionRPCMethods {
  ['session.name'](): Promise<string>;
  ['session.name.set'](name: string): Promise<0>;
  ['session.on_completion'](): Promise<0 | 1>;
  ['session.on_completion.set'](value: boolean): Promise<0>;
  ['session.path'](): Promise<string>;
  ['session.path.set'](path: string): Promise<0>;
  ['session.save'](): Promise<0>;
  ['session.use_lock'](): Promise<0 | 1>;
  ['session.use_lock.set'](value: boolean): Promise<0>;
}

export interface ExecuteRPCMethods {
  ['execute.throw'](command: string, ...args: string[]): Promise<0>;
  ['execute.throw.bg'](command: string, ...args: string[]): Promise<0>;
  ['execute.nothrow'](command: string, ...args: string[]): Promise<number>;
  ['execute.nothrow.bg'](command: string, ...args: string[]): Promise<number>;
  ['execute.capture'](command: string, ...args: string[]): Promise<string>;
  ['execute.capture_nothrow'](command: string, ...args: string[]): Promise<string>;
}

export interface SystemRPCMethods {
  ['system.multicall']<C extends RPCMethodCallDescriptorSystem[]>(
    ...calls: C
  ): Promise<RPCMethodSystemMulticallReturn<C>>;
  ['system.listMethods'](): Promise<string[]>;
  ['system.methodExist'](method: string): Promise<boolean>;
  ['system.methodHelp'](method: string): Promise<string>;
  ['system.methodSignature'](method: string): Promise<string>;
  ['system.getCapabilities'](): Promise<unknown>;
  ['system.capabilities'](): Promise<unknown>;
  ['system.api_version'](): Promise<string>;
  ['system.client_version'](): Promise<string>;
  ['system.library_version'](): Promise<string>;
  ['system.client_version.as_value'](): Promise<number>;
  ['system.colors.enabled'](): Promise<0 | 1>;
  ['system.colors.max'](): Promise<unknown>;
  ['system.colors.rgb'](): Promise<unknown>;
  ['system.cwd'](): Promise<string>;
  ['system.cwd.set'](path: string): Promise<0>;
  ['system.env'](varname: string): Promise<string>;
  ['system.file.allocate'](): Promise<0 | 1>;
  ['system.file.allocate.set'](): Promise<0>;
  ['system.file_status_cache.size'](): Promise<number>;
  ['system.file_status_cache.prune'](): Promise<0>;
  ['system.files.closed_counter'](): Promise<number>;
  ['system.files.failed_counter'](): Promise<number>;
  ['system.files.opened_counter'](): Promise<number>;
  ['system.has'](capability: unknown): Promise<0 | 1>;
  ['system.has.list'](): Promise<unknown>;
  ['system.has.private_methods'](): Promise<unknown>;
  ['system.has.public_methods'](): Promise<unknown>;
  ['system.hostname'](): Promise<string>;
  ['system.pid'](): Promise<number>;
  ['system.random'](lower: unknown, upper?: unknown): Promise<number>;
  ['system.time'](): Promise<number>;
  ['system.time_seconds'](): Promise<number>;
  ['system.time_usec'](): Promise<number>;
  ['system.umask.set'](): Promise<number>;
}

/** An interface that describes the signatures of all RPC methods, indexed by thier RPC method name. */
export type RPCMethods = DownloadRPCMethods &
  FileRPCMethods &
  PeerRPCMethods &
  TrackerRPCMethods &
  LoadRPCMethods &
  SessionRPCMethods &
  ExecuteRPCMethods &
  SystemRPCMethods;
