// AUTO-GENERATED - DO NOT MODIFY //
import { RPCMethods, RPCMethodParams } from '../types';
import { RPCClient } from '../util/RPCClient';

/** A client that exposes all d.* RPC methods as directly callable functions. */
export class DownloadClient {
  constructor(protected readonly rpc: RPCClient) {}
  /**
   *
   * @param hash Unused, always empty string.
   * @param view
   * @param calls
   */
  public multicall2: RPCMethods['d.multicall2'] = <P extends RPCMethodParams['d.multicall2']>(...params: P) => {
    return this.rpc.callRPCMethod('d.multicall2', ...params);
  }
  /**
   *
   * @param hash Unused, always empty string.
   * @param view
   */
  public downloadList: RPCMethods['download_list'] = <P extends RPCMethodParams['download_list']>(...params: P) => {
    return this.rpc.callRPCMethod('download_list', ...params);
  }
  /**
   *
   * @param hash
   */
  public baseFilename: RPCMethods['d.base_filename'] = <P extends RPCMethodParams['d.base_filename']>(...params: P) => {
    return this.rpc.callRPCMethod('d.base_filename', ...params);
  }
  /**
   *
   * @param hash
   */
  public basePath: RPCMethods['d.base_path'] = <P extends RPCMethodParams['d.base_path']>(...params: P) => {
    return this.rpc.callRPCMethod('d.base_path', ...params);
  }
  /**
   *
   * @param hash
   */
  public directory: RPCMethods['d.directory'] = <P extends RPCMethodParams['d.directory']>(...params: P) => {
    return this.rpc.callRPCMethod('d.directory', ...params);
  }
  /**
   *
   * @param hash
   */
  public directoryBase: RPCMethods['d.directory_base'] = <P extends RPCMethodParams['d.directory_base']>(...params: P) => {
    return this.rpc.callRPCMethod('d.directory_base', ...params);
  }
  /**
   *
   * @param hash
   * @param value
   */
  public directorySet: RPCMethods['d.directory.set'] = <P extends RPCMethodParams['d.directory.set']>(...params: P) => {
    return this.rpc.callRPCMethod('d.directory.set', ...params);
  }
  /**
   *
   * @param hash
   * @param value
   */
  public directoryBaseSet: RPCMethods['d.directory_base.set'] = <P extends RPCMethodParams['d.directory_base.set']>(...params: P) => {
    return this.rpc.callRPCMethod('d.directory_base.set', ...params);
  }
  /**
   *
   * @param hash
   */
  public state: RPCMethods['d.state'] = <P extends RPCMethodParams['d.state']>(...params: P) => {
    return this.rpc.callRPCMethod('d.state', ...params);
  }
  /**
   *
   * @param hash
   */
  public stateChanged: RPCMethods['d.state_changed'] = <P extends RPCMethodParams['d.state_changed']>(...params: P) => {
    return this.rpc.callRPCMethod('d.state_changed', ...params);
  }
  /**
   *
   * @param hash
   */
  public stateCounter: RPCMethods['d.state_counter'] = <P extends RPCMethodParams['d.state_counter']>(...params: P) => {
    return this.rpc.callRPCMethod('d.state_counter', ...params);
  }
  /**
   *
   * @param hash
   */
  public isOpen: RPCMethods['d.is_open'] = <P extends RPCMethodParams['d.is_open']>(...params: P) => {
    return this.rpc.callRPCMethod('d.is_open', ...params);
  }
  /**
   *
   * @param hash
   */
  public isActive: RPCMethods['d.is_active'] = <P extends RPCMethodParams['d.is_active']>(...params: P) => {
    return this.rpc.callRPCMethod('d.is_active', ...params);
  }
  /**
   *
   * @param hash
   */
  public acceptingSeeders: RPCMethods['d.accepting_seeders'] = <P extends RPCMethodParams['d.accepting_seeders']>(...params: P) => {
    return this.rpc.callRPCMethod('d.accepting_seeders', ...params);
  }
  /**
   *
   * @param hash
   */
  public acceptingSeedersDisable: RPCMethods['d.accepting_seeders.disable'] = <P extends RPCMethodParams['d.accepting_seeders.disable']>(...params: P) => {
    return this.rpc.callRPCMethod('d.accepting_seeders.disable', ...params);
  }
  /**
   *
   * @param hash
   */
  public acceptingSeedersEnable: RPCMethods['d.accepting_seeders.enable'] = <P extends RPCMethodParams['d.accepting_seeders.enable']>(...params: P) => {
    return this.rpc.callRPCMethod('d.accepting_seeders.enable', ...params);
  }
  /**
   *
   * @param hash
   */
  public bitfield: RPCMethods['d.bitfield'] = <P extends RPCMethodParams['d.bitfield']>(...params: P) => {
    return this.rpc.callRPCMethod('d.bitfield', ...params);
  }
  /**
   *
   * @param hash
   */
  public bytesDone: RPCMethods['d.bytes_done'] = <P extends RPCMethodParams['d.bytes_done']>(...params: P) => {
    return this.rpc.callRPCMethod('d.bytes_done', ...params);
  }
  /**
   *
   * @param hash
   */
  public checkHash: RPCMethods['d.check_hash'] = <P extends RPCMethodParams['d.check_hash']>(...params: P) => {
    return this.rpc.callRPCMethod('d.check_hash', ...params);
  }
  /**
   *
   * @param hash
   */
  public chunkSize: RPCMethods['d.chunk_size'] = <P extends RPCMethodParams['d.chunk_size']>(...params: P) => {
    return this.rpc.callRPCMethod('d.chunk_size', ...params);
  }
  /**
   *
   * @param hash
   */
  public chunksHashed: RPCMethods['d.chunks_hashed'] = <P extends RPCMethodParams['d.chunks_hashed']>(...params: P) => {
    return this.rpc.callRPCMethod('d.chunks_hashed', ...params);
  }
  /**
   *
   * @param hash
   */
  public complete: RPCMethods['d.complete'] = <P extends RPCMethodParams['d.complete']>(...params: P) => {
    return this.rpc.callRPCMethod('d.complete', ...params);
  }
  /**
   *
   * @param hash
   */
  public incomplete: RPCMethods['d.incomplete'] = <P extends RPCMethodParams['d.incomplete']>(...params: P) => {
    return this.rpc.callRPCMethod('d.incomplete', ...params);
  }
  /**
   *
   * @param hash
   */
  public completedBytes: RPCMethods['d.completed_bytes'] = <P extends RPCMethodParams['d.completed_bytes']>(...params: P) => {
    return this.rpc.callRPCMethod('d.completed_bytes', ...params);
  }
  /**
   *
   * @param hash
   */
  public completedChunks: RPCMethods['d.completed_chunks'] = <P extends RPCMethodParams['d.completed_chunks']>(...params: P) => {
    return this.rpc.callRPCMethod('d.completed_chunks', ...params);
  }
  /**
   *
   * @param type
   * @param path
   * @param suffix
   */
  public createLink: RPCMethods['d.create_link'] = <P extends RPCMethodParams['d.create_link']>(...params: P) => {
    return this.rpc.callRPCMethod('d.create_link', ...params);
  }
  /**
   *
   * @param type
   * @param path
   * @param suffix
   */
  public deleteLink: RPCMethods['d.delete_link'] = <P extends RPCMethodParams['d.delete_link']>(...params: P) => {
    return this.rpc.callRPCMethod('d.delete_link', ...params);
  }
  /**
   *
   * @param hash
   */
  public deleteTied: RPCMethods['d.delete_tied'] = <P extends RPCMethodParams['d.delete_tied']>(...params: P) => {
    return this.rpc.callRPCMethod('d.delete_tied', ...params);
  }
  /**
   *
   * @param hash
   */
  public creationDate: RPCMethods['d.creation_date'] = <P extends RPCMethodParams['d.creation_date']>(...params: P) => {
    return this.rpc.callRPCMethod('d.creation_date', ...params);
  }
  /**
   *
   * @param hash
   * @param key
   */
  public custom: RPCMethods['d.custom'] = <P extends RPCMethodParams['d.custom']>(...params: P) => {
    return this.rpc.callRPCMethod('d.custom', ...params);
  }
  /**
   *
   * @param hash
   * @param key
   */
  public customThrow: RPCMethods['d.custom_throw'] = <P extends RPCMethodParams['d.custom_throw']>(...params: P) => {
    return this.rpc.callRPCMethod('d.custom_throw', ...params);
  }
  /**
   *
   * @param hash
   * @param key
   * @param value
   */
  public customSet: RPCMethods['d.custom.set'] = <P extends RPCMethodParams['d.custom.set']>(...params: P) => {
    return this.rpc.callRPCMethod('d.custom.set', ...params);
  }
  /**
   *
   * @param hash
   */
  public custom1: RPCMethods['d.custom1'] = <P extends RPCMethodParams['d.custom1']>(...params: P) => {
    return this.rpc.callRPCMethod('d.custom1', ...params);
  }
  /**
   *
   * @param hash
   * @param value
   */
  public custom1Set: RPCMethods['d.custom1.set'] = <P extends RPCMethodParams['d.custom1.set']>(...params: P) => {
    return this.rpc.callRPCMethod('d.custom1.set', ...params);
  }
  /**
   *
   * @param hash
   * @param key
   * @param defaultValue
   */
  public customIfZ: RPCMethods['d.custom.if_z'] = <P extends RPCMethodParams['d.custom.if_z']>(...params: P) => {
    return this.rpc.callRPCMethod('d.custom.if_z', ...params);
  }
  /**
   *
   * @param hash
   * @param key
   * @param value
   */
  public customSetIfZ: RPCMethods['d.custom.set_if_z'] = <P extends RPCMethodParams['d.custom.set_if_z']>(...params: P) => {
    return this.rpc.callRPCMethod('d.custom.set_if_z', ...params);
  }
  /**
   *
   * @param hash
   * @param key
   */
  public customErase: RPCMethods['d.custom.erase'] = <P extends RPCMethodParams['d.custom.erase']>(...params: P) => {
    return this.rpc.callRPCMethod('d.custom.erase', ...params);
  }
  /**
   *
   * @param hash
   * @param key
   */
  public customToggle: RPCMethods['d.custom.toggle'] = <P extends RPCMethodParams['d.custom.toggle']>(...params: P) => {
    return this.rpc.callRPCMethod('d.custom.toggle', ...params);
  }
  /**
   *
   * @param hash
   * @param key
   */
  public customAsValue: RPCMethods['d.custom.as_value'] = <P extends RPCMethodParams['d.custom.as_value']>(...params: P) => {
    return this.rpc.callRPCMethod('d.custom.as_value', ...params);
  }
  /**
   *
   * @param hash
   */
  public customKeys: RPCMethods['d.custom.keys'] = <P extends RPCMethodParams['d.custom.keys']>(...params: P) => {
    return this.rpc.callRPCMethod('d.custom.keys', ...params);
  }
  /**
   *
   * @param hash
   */
  public customItems: RPCMethods['d.custom.items'] = <P extends RPCMethodParams['d.custom.items']>(...params: P) => {
    return this.rpc.callRPCMethod('d.custom.items', ...params);
  }
  /**
   *
   * @param hash
   */
  public disconnectSeeders: RPCMethods['d.disconnect.seeders'] = <P extends RPCMethodParams['d.disconnect.seeders']>(...params: P) => {
    return this.rpc.callRPCMethod('d.disconnect.seeders', ...params);
  }
  /**
   *
   * @param hash
   */
  public downRate: RPCMethods['d.down.rate'] = <P extends RPCMethodParams['d.down.rate']>(...params: P) => {
    return this.rpc.callRPCMethod('d.down.rate', ...params);
  }
  /**
   *
   * @param hash
   */
  public downTotal: RPCMethods['d.down.total'] = <P extends RPCMethodParams['d.down.total']>(...params: P) => {
    return this.rpc.callRPCMethod('d.down.total', ...params);
  }
  /**
   *
   * @param hash
   */
  public downloadsMax: RPCMethods['d.downloads_max'] = <P extends RPCMethodParams['d.downloads_max']>(...params: P) => {
    return this.rpc.callRPCMethod('d.downloads_max', ...params);
  }
  /**
   *
   * @param hash
   * @param max
   */
  public downloadsMaxSet: RPCMethods['d.downloads_max.set'] = <P extends RPCMethodParams['d.downloads_max.set']>(...params: P) => {
    return this.rpc.callRPCMethod('d.downloads_max.set', ...params);
  }
  /**
   *
   * @param hash
   */
  public downloadsMin: RPCMethods['d.downloads_min'] = <P extends RPCMethodParams['d.downloads_min']>(...params: P) => {
    return this.rpc.callRPCMethod('d.downloads_min', ...params);
  }
  /**
   *
   * @param hash
   * @param max
   */
  public downloadsMinSet: RPCMethods['d.downloads_min.set'] = <P extends RPCMethodParams['d.downloads_min.set']>(...params: P) => {
    return this.rpc.callRPCMethod('d.downloads_min.set', ...params);
  }
  /**
   *
   * @param hash
   */
  public erase: RPCMethods['d.erase'] = <P extends RPCMethodParams['d.erase']>(...params: P) => {
    return this.rpc.callRPCMethod('d.erase', ...params);
  }
  /**
   *
   * @param hash
   */
  public freeDiskspace: RPCMethods['d.free_diskspace'] = <P extends RPCMethodParams['d.free_diskspace']>(...params: P) => {
    return this.rpc.callRPCMethod('d.free_diskspace', ...params);
  }
  /**
   *
   * @param hash
   */
  public hash: RPCMethods['d.hash'] = <P extends RPCMethodParams['d.hash']>(...params: P) => {
    return this.rpc.callRPCMethod('d.hash', ...params);
  }
  /**
   *
   * @param hash
   */
  public hashing: RPCMethods['d.hashing'] = <P extends RPCMethodParams['d.hashing']>(...params: P) => {
    return this.rpc.callRPCMethod('d.hashing', ...params);
  }
  /**
   *
   * @param hash
   */
  public hashingFailed: RPCMethods['d.hashing_failed'] = <P extends RPCMethodParams['d.hashing_failed']>(...params: P) => {
    return this.rpc.callRPCMethod('d.hashing_failed', ...params);
  }
  /**
   *
   * @param hash
   */
  public hashingFailedSet: RPCMethods['d.hashing_failed.set'] = <P extends RPCMethodParams['d.hashing_failed.set']>(...params: P) => {
    return this.rpc.callRPCMethod('d.hashing_failed.set', ...params);
  }
  /**
   *
   * @param hash
   */
  public ignoreCommands: RPCMethods['d.ignore_commands'] = <P extends RPCMethodParams['d.ignore_commands']>(...params: P) => {
    return this.rpc.callRPCMethod('d.ignore_commands', ...params);
  }
  /**
   *
   * @param hash
   */
  public ignoreCommandsSet: RPCMethods['d.ignore_commands.set'] = <P extends RPCMethodParams['d.ignore_commands.set']>(...params: P) => {
    return this.rpc.callRPCMethod('d.ignore_commands.set', ...params);
  }
  /**
   *
   * @param hash
   */
  public isHashChecked: RPCMethods['d.is_hash_checked'] = <P extends RPCMethodParams['d.is_hash_checked']>(...params: P) => {
    return this.rpc.callRPCMethod('d.is_hash_checked', ...params);
  }
  /**
   *
   * @param hash
   */
  public isHashChecking: RPCMethods['d.is_hash_checking'] = <P extends RPCMethodParams['d.is_hash_checking']>(...params: P) => {
    return this.rpc.callRPCMethod('d.is_hash_checking', ...params);
  }
  /**
   *
   * @param hash
   */
  public isMeta: RPCMethods['d.is_meta'] = <P extends RPCMethodParams['d.is_meta']>(...params: P) => {
    return this.rpc.callRPCMethod('d.is_meta', ...params);
  }
  /**
   *
   * @param hash
   */
  public isMultiFile: RPCMethods['d.is_multi_file'] = <P extends RPCMethodParams['d.is_multi_file']>(...params: P) => {
    return this.rpc.callRPCMethod('d.is_multi_file', ...params);
  }
  /**
   *
   * @param hash
   */
  public isPexActive: RPCMethods['d.is_pex_active'] = <P extends RPCMethodParams['d.is_pex_active']>(...params: P) => {
    return this.rpc.callRPCMethod('d.is_pex_active', ...params);
  }
  /**
   *
   * @param hash
   */
  public isPrivate: RPCMethods['d.is_private'] = <P extends RPCMethodParams['d.is_private']>(...params: P) => {
    return this.rpc.callRPCMethod('d.is_private', ...params);
  }
  /**
   *
   * @param hash
   */
  public leftBytes: RPCMethods['d.left_bytes'] = <P extends RPCMethodParams['d.left_bytes']>(...params: P) => {
    return this.rpc.callRPCMethod('d.left_bytes', ...params);
  }
  /**
   *
   * @param hash
   */
  public loadDate: RPCMethods['d.load_date'] = <P extends RPCMethodParams['d.load_date']>(...params: P) => {
    return this.rpc.callRPCMethod('d.load_date', ...params);
  }
  /**
   *
   * @param hash
   */
  public localId: RPCMethods['d.local_id'] = <P extends RPCMethodParams['d.local_id']>(...params: P) => {
    return this.rpc.callRPCMethod('d.local_id', ...params);
  }
  /**
   *
   * @param hash
   */
  public localIdHtml: RPCMethods['d.local_id_html'] = <P extends RPCMethodParams['d.local_id_html']>(...params: P) => {
    return this.rpc.callRPCMethod('d.local_id_html', ...params);
  }
  /**
   *
   * @param hash
   */
  public maxFileSize: RPCMethods['d.max_file_size'] = <P extends RPCMethodParams['d.max_file_size']>(...params: P) => {
    return this.rpc.callRPCMethod('d.max_file_size', ...params);
  }
  /**
   *
   * @param hash
   * @param bytes
   */
  public maxFileSizeSet: RPCMethods['d.max_file_size.set'] = <P extends RPCMethodParams['d.max_file_size.set']>(...params: P) => {
    return this.rpc.callRPCMethod('d.max_file_size.set', ...params);
  }
  /**
   *
   * @param hash
   */
  public message: RPCMethods['d.message'] = <P extends RPCMethodParams['d.message']>(...params: P) => {
    return this.rpc.callRPCMethod('d.message', ...params);
  }
  /**
   *
   * @param hash
   * @param message
   */
  public messageSet: RPCMethods['d.message.set'] = <P extends RPCMethodParams['d.message.set']>(...params: P) => {
    return this.rpc.callRPCMethod('d.message.set', ...params);
  }
  /**
   *
   * @param hash
   */
  public messageAlert: RPCMethods['d.message.alert'] = <P extends RPCMethodParams['d.message.alert']>(...params: P) => {
    return this.rpc.callRPCMethod('d.message.alert', ...params);
  }
  /**
   *
   * @param hash
   */
  public name: RPCMethods['d.name'] = <P extends RPCMethodParams['d.name']>(...params: P) => {
    return this.rpc.callRPCMethod('d.name', ...params);
  }
  /**
   *
   * @param hash
   */
  public peerExchange: RPCMethods['d.peer_exchange'] = <P extends RPCMethodParams['d.peer_exchange']>(...params: P) => {
    return this.rpc.callRPCMethod('d.peer_exchange', ...params);
  }
  /**
   *
   * @param hash
   */
  public peerExchangeSet: RPCMethods['d.peer_exchange.set'] = <P extends RPCMethodParams['d.peer_exchange.set']>(...params: P) => {
    return this.rpc.callRPCMethod('d.peer_exchange.set', ...params);
  }
  /**
   *
   * @param hash
   */
  public priority: RPCMethods['d.priority'] = <P extends RPCMethodParams['d.priority']>(...params: P) => {
    return this.rpc.callRPCMethod('d.priority', ...params);
  }
  /**
   *
   * @param hash
   * @param prio
   */
  public prioritySet: RPCMethods['d.priority.set'] = <P extends RPCMethodParams['d.priority.set']>(...params: P) => {
    return this.rpc.callRPCMethod('d.priority.set', ...params);
  }
  /**
   *
   * @param hash
   */
  public priorityStr: RPCMethods['d.priority_str'] = <P extends RPCMethodParams['d.priority_str']>(...params: P) => {
    return this.rpc.callRPCMethod('d.priority_str', ...params);
  }
  /**
   *
   * @param hash
   */
  public sizeBytes: RPCMethods['d.size_bytes'] = <P extends RPCMethodParams['d.size_bytes']>(...params: P) => {
    return this.rpc.callRPCMethod('d.size_bytes', ...params);
  }
  /**
   *
   * @param hash
   */
  public sizeChunks: RPCMethods['d.size_chunks'] = <P extends RPCMethodParams['d.size_chunks']>(...params: P) => {
    return this.rpc.callRPCMethod('d.size_chunks', ...params);
  }
  /**
   *
   * @param hash
   */
  public sizeFiles: RPCMethods['d.size_files'] = <P extends RPCMethodParams['d.size_files']>(...params: P) => {
    return this.rpc.callRPCMethod('d.size_files', ...params);
  }
  /**
   *
   * @param hash
   */
  public sizePex: RPCMethods['d.size_pex'] = <P extends RPCMethodParams['d.size_pex']>(...params: P) => {
    return this.rpc.callRPCMethod('d.size_pex', ...params);
  }
  /**
   *
   * @param hash
   */
  public skipRate: RPCMethods['d.skip.rate'] = <P extends RPCMethodParams['d.skip.rate']>(...params: P) => {
    return this.rpc.callRPCMethod('d.skip.rate', ...params);
  }
  /**
   *
   * @param hash
   */
  public skipTotal: RPCMethods['d.skip.total'] = <P extends RPCMethodParams['d.skip.total']>(...params: P) => {
    return this.rpc.callRPCMethod('d.skip.total', ...params);
  }
  /**
   *
   * @param hash
   */
  public timestampFinished: RPCMethods['d.timestamp.finished'] = <P extends RPCMethodParams['d.timestamp.finished']>(...params: P) => {
    return this.rpc.callRPCMethod('d.timestamp.finished', ...params);
  }
  /**
   *
   * @param hash
   */
  public timestampStarted: RPCMethods['d.timestamp.started'] = <P extends RPCMethodParams['d.timestamp.started']>(...params: P) => {
    return this.rpc.callRPCMethod('d.timestamp.started', ...params);
  }
  /**
   *
   * @param hash
   * @param group
   * @param url
   */
  public trackerInsert: RPCMethods['d.tracker.insert'] = <P extends RPCMethodParams['d.tracker.insert']>(...params: P) => {
    return this.rpc.callRPCMethod('d.tracker.insert', ...params);
  }
  /**
   *
   * @param hash
   * @param delay
   */
  public trackerSendScrape: RPCMethods['d.tracker.send_scrape'] = <P extends RPCMethodParams['d.tracker.send_scrape']>(...params: P) => {
    return this.rpc.callRPCMethod('d.tracker.send_scrape', ...params);
  }
  /**
   *
   * @param hash
   */
  public trackerAnnounce: RPCMethods['d.tracker_announce'] = <P extends RPCMethodParams['d.tracker_announce']>(...params: P) => {
    return this.rpc.callRPCMethod('d.tracker_announce', ...params);
  }
  /**
   *
   * @param hash
   */
  public trackerFocus: RPCMethods['d.tracker_focus'] = <P extends RPCMethodParams['d.tracker_focus']>(...params: P) => {
    return this.rpc.callRPCMethod('d.tracker_focus', ...params);
  }
  /**
   *
   * @param hash
   */
  public trackerSize: RPCMethods['d.tracker_size'] = <P extends RPCMethodParams['d.tracker_size']>(...params: P) => {
    return this.rpc.callRPCMethod('d.tracker_size', ...params);
  }
  /**
   *
   * @param hash
   */
  public trackerNumwant: RPCMethods['d.tracker_numwant'] = <P extends RPCMethodParams['d.tracker_numwant']>(...params: P) => {
    return this.rpc.callRPCMethod('d.tracker_numwant', ...params);
  }
  /**
   *
   * @param hash
   * @param numwant
   */
  public trackerNumwantSet: RPCMethods['d.tracker_numwant.set'] = <P extends RPCMethodParams['d.tracker_numwant.set']>(...params: P) => {
    return this.rpc.callRPCMethod('d.tracker_numwant.set', ...params);
  }
  /**
   *
   * @param target
   */
  public trackerScrapeDownloaded: RPCMethods['d.tracker_scrape.downloaded'] = <P extends RPCMethodParams['d.tracker_scrape.downloaded']>(...params: P) => {
    return this.rpc.callRPCMethod('d.tracker_scrape.downloaded', ...params);
  }
  /**
   *
   * @param target
   */
  public trackerScrapeComplete: RPCMethods['d.tracker_scrape.complete'] = <P extends RPCMethodParams['d.tracker_scrape.complete']>(...params: P) => {
    return this.rpc.callRPCMethod('d.tracker_scrape.complete', ...params);
  }
  /**
   *
   * @param target
   */
  public trackerScrapeIncomplete: RPCMethods['d.tracker_scrape.incomplete'] = <P extends RPCMethodParams['d.tracker_scrape.incomplete']>(...params: P) => {
    return this.rpc.callRPCMethod('d.tracker_scrape.incomplete', ...params);
  }
  /**
   *
   * @param hash
   */
  public upRate: RPCMethods['d.up.rate'] = <P extends RPCMethodParams['d.up.rate']>(...params: P) => {
    return this.rpc.callRPCMethod('d.up.rate', ...params);
  }
  /**
   *
   * @param hash
   */
  public upTotal: RPCMethods['d.up.total'] = <P extends RPCMethodParams['d.up.total']>(...params: P) => {
    return this.rpc.callRPCMethod('d.up.total', ...params);
  }
  /**
   *
   * @param hash
   */
  public updatePriorities: RPCMethods['d.update_priorities'] = <P extends RPCMethodParams['d.update_priorities']>(...params: P) => {
    return this.rpc.callRPCMethod('d.update_priorities', ...params);
  }
  /**
   *
   * @param hash
   */
  public uploadsMax: RPCMethods['d.uploads_max'] = <P extends RPCMethodParams['d.uploads_max']>(...params: P) => {
    return this.rpc.callRPCMethod('d.uploads_max', ...params);
  }
  /**
   *
   * @param hash
   * @param max
   */
  public uploadsMaxSet: RPCMethods['d.uploads_max.set'] = <P extends RPCMethodParams['d.uploads_max.set']>(...params: P) => {
    return this.rpc.callRPCMethod('d.uploads_max.set', ...params);
  }
  /**
   *
   * @param hash
   */
  public uploadsMin: RPCMethods['d.uploads_min'] = <P extends RPCMethodParams['d.uploads_min']>(...params: P) => {
    return this.rpc.callRPCMethod('d.uploads_min', ...params);
  }
  /**
   *
   * @param hash
   * @param min
   */
  public uploadsMinSet: RPCMethods['d.uploads_min.set'] = <P extends RPCMethodParams['d.uploads_min.set']>(...params: P) => {
    return this.rpc.callRPCMethod('d.uploads_min.set', ...params);
  }
  /**
   *
   * @param hash
   */
  public wantedChunks: RPCMethods['d.wanted_chunks'] = <P extends RPCMethodParams['d.wanted_chunks']>(...params: P) => {
    return this.rpc.callRPCMethod('d.wanted_chunks', ...params);
  }
}
