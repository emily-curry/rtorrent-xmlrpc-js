import { RPCMethodMulticallReturn } from '../RPC';

export interface DownloadRPCMethods {
  /**
   *
   * @param hash Unused, always empty string.
   * @param view
   * @param calls
   */
  ['d.multicall2']<C extends Exclude<keyof DownloadRPCMethods, 'd.multicall2'>[]>(
    hash: '',
    view: string,
    ...calls: C
  ): Promise<RPCMethodMulticallReturn<C>>;
  /**
   *
   * @param hash Unused, always empty string.
   * @param view
   */
  ['download_list'](hash: '', view: string): Promise<Array<string>>;
  /**
   *
   * @param hash
   */
  ['d.base_filename'](hash: string): Promise<string>;
  /**
   *
   * @param hash
   */
  ['d.base_path'](hash: string): Promise<string>;
  /**
   *
   * @param hash
   */
  ['d.directory'](hash: string): Promise<string>;
  /**
   *
   * @param hash
   */
  ['d.directory_base'](hash: string): Promise<string>;
  /**
   *
   * @param hash
   * @param value
   */
  ['d.directory.set'](hash: string, value: string): Promise<0>;
  /**
   *
   * @param hash
   * @param value
   */
  ['d.directory_base.set'](hash: string, value: string): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.state'](hash: string): Promise<0 | 1>;
  /**
   *
   * @param hash
   */
  ['d.state_changed'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.state_counter'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.is_open'](hash: string): Promise<0 | 1>;
  /**
   *
   * @param hash
   */
  ['d.is_active'](hash: string): Promise<0 | 1>;
  /**
   *
   * @param hash
   */
  ['d.accepting_seeders'](hash: string): Promise<0 | 1>;
  /**
   *
   * @param hash
   */
  ['d.accepting_seeders.disable'](hash: string): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.accepting_seeders.enable'](hash: string): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.bitfield'](hash: string): Promise<string>;
  /**
   *
   * @param hash
   */
  ['d.bytes_done'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.check_hash'](hash: string): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.chunk_size'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.chunks_hashed'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.complete'](hash: string): Promise<0 | 1>;
  /**
   *
   * @param hash
   */
  ['d.incomplete'](hash: string): Promise<0 | 1>;
  /**
   *
   * @param hash
   */
  ['d.completed_bytes'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.completed_chunks'](hash: string): Promise<number>;
  /**
   *
   * @param type
   * @param path
   * @param suffix
   */
  ['d.create_link'](type: string, path: string, suffix: string): Promise<0>;
  /**
   *
   * @param type
   * @param path
   * @param suffix
   */
  ['d.delete_link'](type: string, path: string, suffix: string): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.delete_tied'](hash: string): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.creation_date'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   * @param key
   */
  ['d.custom'](hash: string, key: string): Promise<string>;
  /**
   *
   * @param hash
   * @param key
   */
  ['d.custom_throw'](hash: string, key: string): Promise<string>;
  /**
   *
   * @param hash
   * @param key
   * @param value
   */
  ['d.custom.set'](hash: string, key: string, value: string): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.custom1'](hash: string): Promise<string>;
  /**
   *
   * @param hash
   * @param value
   */
  ['d.custom1.set'](hash: string, value: string): Promise<0>;
  /**
   *
   * @param hash
   * @param key
   * @param defaultValue
   */
  ['d.custom.if_z'](hash: string, key: string, defaultValue: unknown): Promise<string>;
  /**
   *
   * @param hash
   * @param key
   * @param value
   */
  ['d.custom.set_if_z'](hash: string, key: string, value: unknown): Promise<0>;
  /**
   *
   * @param hash
   * @param key
   */
  ['d.custom.erase'](hash: string, key: string): Promise<0>;
  /**
   *
   * @param hash
   * @param key
   */
  ['d.custom.toggle'](hash: string, key: string): Promise<number>;
  /**
   *
   * @param hash
   * @param key
   */
  ['d.custom.as_value'](hash: string, key: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.custom.keys'](hash: string): Promise<unknown>;
  /**
   *
   * @param hash
   */
  ['d.custom.items'](hash: string): Promise<unknown>;
  /**
   *
   * @param hash
   */
  ['d.disconnect.seeders'](hash: string): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.down.rate'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.down.total'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.downloads_max'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   * @param max
   */
  ['d.downloads_max.set'](hash: string, max: unknown): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.downloads_min'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   * @param max
   */
  ['d.downloads_min.set'](hash: string, max: unknown): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.erase'](hash: string): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.free_diskspace'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.hash'](hash: string): Promise<string>;
  /**
   *
   * @param hash
   */
  ['d.hashing'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.hashing_failed'](hash: string): Promise<0 | 1>;
  /**
   *
   * @param hash
   */
  ['d.hashing_failed.set'](hash: string): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.ignore_commands'](hash: string): Promise<0 | 1>;
  /**
   *
   * @param hash
   */
  ['d.ignore_commands.set'](hash: string): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.is_hash_checked'](hash: string): Promise<0 | 1>;
  /**
   *
   * @param hash
   */
  ['d.is_hash_checking'](hash: string): Promise<0 | 1>;
  /**
   *
   * @param hash
   */
  ['d.is_meta'](hash: string): Promise<0 | 1>;
  /**
   *
   * @param hash
   */
  ['d.is_multi_file'](hash: string): Promise<0 | 1>;
  /**
   *
   * @param hash
   */
  ['d.is_pex_active'](hash: string): Promise<0 | 1>;
  /**
   *
   * @param hash
   */
  ['d.is_private'](hash: string): Promise<0 | 1>;
  /**
   *
   * @param hash
   */
  ['d.left_bytes'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.load_date'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.local_id'](hash: string): Promise<string>;
  /**
   *
   * @param hash
   */
  ['d.local_id_html'](hash: string): Promise<string>;
  /**
   *
   * @param hash
   */
  ['d.max_file_size'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   * @param bytes
   */
  ['d.max_file_size.set'](hash: string, bytes: unknown): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.message'](hash: string): Promise<string>;
  /**
   *
   * @param hash
   * @param message
   */
  ['d.message.set'](hash: string, message: unknown): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.message.alert'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.name'](hash: string): Promise<string>;
  /**
   *
   * @param hash
   */
  ['d.peer_exchange'](hash: string): Promise<0 | 1>;
  /**
   *
   * @param hash
   */
  ['d.peer_exchange.set'](hash: string): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.priority'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   * @param prio
   */
  ['d.priority.set'](hash: string, prio: unknown): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.priority_str'](hash: string): Promise<string>;
  /**
   *
   * @param hash
   */
  ['d.size_bytes'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.size_chunks'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.size_files'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.size_pex'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.skip.rate'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.skip.total'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.timestamp.finished'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.timestamp.started'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   * @param group
   * @param url
   */
  ['d.tracker.insert'](hash: string, group: unknown, url: unknown): Promise<0>;
  /**
   *
   * @param hash
   * @param delay
   */
  ['d.tracker.send_scrape'](hash: string, delay: unknown): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.tracker_announce'](hash: string): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.tracker_focus'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.tracker_size'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.tracker_numwant'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   * @param numwant
   */
  ['d.tracker_numwant.set'](hash: string, numwant: unknown): Promise<0>;
  /**
   *
   * @param target
   */
  ['d.tracker_scrape.downloaded'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['d.tracker_scrape.complete'](target: string): Promise<number>;
  /**
   *
   * @param target
   */
  ['d.tracker_scrape.incomplete'](target: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.up.rate'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.up.total'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   */
  ['d.update_priorities'](hash: string): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.uploads_max'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   * @param max
   */
  ['d.uploads_max.set'](hash: string, max: unknown): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.uploads_min'](hash: string): Promise<number>;
  /**
   *
   * @param hash
   * @param min
   */
  ['d.uploads_min.set'](hash: string, min: unknown): Promise<0>;
  /**
   *
   * @param hash
   */
  ['d.wanted_chunks'](hash: string): Promise<number>;
}
