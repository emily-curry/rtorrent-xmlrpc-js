// AUTO-GENERATED - DO NOT MODIFY //
import { RPCMethods, RPCMethodParams } from '../types';
import { RPCClient } from '../util/RPCClient';

/** A client that exposes all d. RPC methods as directly callable functions. */
export class DownloadClient {
  constructor(protected readonly rpc: RPCClient) {}
  
  public multicall2: RPCMethods['d.multicall2'] = <P extends RPCMethodParams['d.multicall2']>(...params: P) => this.rpc.callRPCMethod('d.multicall2', ...params) as any;
  
  public downloadList: RPCMethods['download_list'] = <P extends RPCMethodParams['download_list']>(...params: P) => this.rpc.callRPCMethod('download_list', ...params);
  
  public baseFilename: RPCMethods['d.base_filename'] = <P extends RPCMethodParams['d.base_filename']>(...params: P) => this.rpc.callRPCMethod('d.base_filename', ...params);
  
  public basePath: RPCMethods['d.base_path'] = <P extends RPCMethodParams['d.base_path']>(...params: P) => this.rpc.callRPCMethod('d.base_path', ...params);
  
  public directory: RPCMethods['d.directory'] = <P extends RPCMethodParams['d.directory']>(...params: P) => this.rpc.callRPCMethod('d.directory', ...params);
  
  public directoryBase: RPCMethods['d.directory_base'] = <P extends RPCMethodParams['d.directory_base']>(...params: P) => this.rpc.callRPCMethod('d.directory_base', ...params);
  
  public directorySet: RPCMethods['d.directory.set'] = <P extends RPCMethodParams['d.directory.set']>(...params: P) => this.rpc.callRPCMethod('d.directory.set', ...params);
  
  public directoryBaseSet: RPCMethods['d.directory_base.set'] = <P extends RPCMethodParams['d.directory_base.set']>(...params: P) => this.rpc.callRPCMethod('d.directory_base.set', ...params);
  
  public state: RPCMethods['d.state'] = <P extends RPCMethodParams['d.state']>(...params: P) => this.rpc.callRPCMethod('d.state', ...params);
  
  public stateChanged: RPCMethods['d.state_changed'] = <P extends RPCMethodParams['d.state_changed']>(...params: P) => this.rpc.callRPCMethod('d.state_changed', ...params);
  
  public stateCounter: RPCMethods['d.state_counter'] = <P extends RPCMethodParams['d.state_counter']>(...params: P) => this.rpc.callRPCMethod('d.state_counter', ...params);
  
  public isOpen: RPCMethods['d.is_open'] = <P extends RPCMethodParams['d.is_open']>(...params: P) => this.rpc.callRPCMethod('d.is_open', ...params);
  
  public isActive: RPCMethods['d.is_active'] = <P extends RPCMethodParams['d.is_active']>(...params: P) => this.rpc.callRPCMethod('d.is_active', ...params);
  
  public acceptingSeeders: RPCMethods['d.accepting_seeders'] = <P extends RPCMethodParams['d.accepting_seeders']>(...params: P) => this.rpc.callRPCMethod('d.accepting_seeders', ...params);
  
  public acceptingSeedersDisable: RPCMethods['d.accepting_seeders.disable'] = <P extends RPCMethodParams['d.accepting_seeders.disable']>(...params: P) => this.rpc.callRPCMethod('d.accepting_seeders.disable', ...params);
  
  public acceptingSeedersEnable: RPCMethods['d.accepting_seeders.enable'] = <P extends RPCMethodParams['d.accepting_seeders.enable']>(...params: P) => this.rpc.callRPCMethod('d.accepting_seeders.enable', ...params);
  
  public bitfield: RPCMethods['d.bitfield'] = <P extends RPCMethodParams['d.bitfield']>(...params: P) => this.rpc.callRPCMethod('d.bitfield', ...params);
  
  public bytesDone: RPCMethods['d.bytes_done'] = <P extends RPCMethodParams['d.bytes_done']>(...params: P) => this.rpc.callRPCMethod('d.bytes_done', ...params);
  
  public checkHash: RPCMethods['d.check_hash'] = <P extends RPCMethodParams['d.check_hash']>(...params: P) => this.rpc.callRPCMethod('d.check_hash', ...params);
  
  public chunkSize: RPCMethods['d.chunk_size'] = <P extends RPCMethodParams['d.chunk_size']>(...params: P) => this.rpc.callRPCMethod('d.chunk_size', ...params);
  
  public chunksHashed: RPCMethods['d.chunks_hashed'] = <P extends RPCMethodParams['d.chunks_hashed']>(...params: P) => this.rpc.callRPCMethod('d.chunks_hashed', ...params);
  
  public complete: RPCMethods['d.complete'] = <P extends RPCMethodParams['d.complete']>(...params: P) => this.rpc.callRPCMethod('d.complete', ...params);
  
  public incomplete: RPCMethods['d.incomplete'] = <P extends RPCMethodParams['d.incomplete']>(...params: P) => this.rpc.callRPCMethod('d.incomplete', ...params);
  
  public completedBytes: RPCMethods['d.completed_bytes'] = <P extends RPCMethodParams['d.completed_bytes']>(...params: P) => this.rpc.callRPCMethod('d.completed_bytes', ...params);
  
  public completedChunks: RPCMethods['d.completed_chunks'] = <P extends RPCMethodParams['d.completed_chunks']>(...params: P) => this.rpc.callRPCMethod('d.completed_chunks', ...params);
  
  public createLink: RPCMethods['d.create_link'] = <P extends RPCMethodParams['d.create_link']>(...params: P) => this.rpc.callRPCMethod('d.create_link', ...params);
  
  public deleteLink: RPCMethods['d.delete_link'] = <P extends RPCMethodParams['d.delete_link']>(...params: P) => this.rpc.callRPCMethod('d.delete_link', ...params);
  
  public deleteTied: RPCMethods['d.delete_tied'] = <P extends RPCMethodParams['d.delete_tied']>(...params: P) => this.rpc.callRPCMethod('d.delete_tied', ...params);
  
  public creationDate: RPCMethods['d.creation_date'] = <P extends RPCMethodParams['d.creation_date']>(...params: P) => this.rpc.callRPCMethod('d.creation_date', ...params);
  
  public custom: RPCMethods['d.custom'] = <P extends RPCMethodParams['d.custom']>(...params: P) => this.rpc.callRPCMethod('d.custom', ...params);
  
  public customThrow: RPCMethods['d.custom_throw'] = <P extends RPCMethodParams['d.custom_throw']>(...params: P) => this.rpc.callRPCMethod('d.custom_throw', ...params);
  
  public customSet: RPCMethods['d.custom.set'] = <P extends RPCMethodParams['d.custom.set']>(...params: P) => this.rpc.callRPCMethod('d.custom.set', ...params);
  
  public custom1: RPCMethods['d.custom1'] = <P extends RPCMethodParams['d.custom1']>(...params: P) => this.rpc.callRPCMethod('d.custom1', ...params);
  
  public custom1Set: RPCMethods['d.custom1.set'] = <P extends RPCMethodParams['d.custom1.set']>(...params: P) => this.rpc.callRPCMethod('d.custom1.set', ...params);
  
  public customIfZ: RPCMethods['d.custom.if_z'] = <P extends RPCMethodParams['d.custom.if_z']>(...params: P) => this.rpc.callRPCMethod('d.custom.if_z', ...params);
  
  public customSetIfZ: RPCMethods['d.custom.set_if_z'] = <P extends RPCMethodParams['d.custom.set_if_z']>(...params: P) => this.rpc.callRPCMethod('d.custom.set_if_z', ...params);
  
  public customErase: RPCMethods['d.custom.erase'] = <P extends RPCMethodParams['d.custom.erase']>(...params: P) => this.rpc.callRPCMethod('d.custom.erase', ...params);
  
  public customToggle: RPCMethods['d.custom.toggle'] = <P extends RPCMethodParams['d.custom.toggle']>(...params: P) => this.rpc.callRPCMethod('d.custom.toggle', ...params);
  
  public customAsValue: RPCMethods['d.custom.as_value'] = <P extends RPCMethodParams['d.custom.as_value']>(...params: P) => this.rpc.callRPCMethod('d.custom.as_value', ...params);
  
  public customKeys: RPCMethods['d.custom.keys'] = <P extends RPCMethodParams['d.custom.keys']>(...params: P) => this.rpc.callRPCMethod('d.custom.keys', ...params);
  
  public customItems: RPCMethods['d.custom.items'] = <P extends RPCMethodParams['d.custom.items']>(...params: P) => this.rpc.callRPCMethod('d.custom.items', ...params);
  
  public disconnectSeeders: RPCMethods['d.disconnect.seeders'] = <P extends RPCMethodParams['d.disconnect.seeders']>(...params: P) => this.rpc.callRPCMethod('d.disconnect.seeders', ...params);
  
  public downRate: RPCMethods['d.down.rate'] = <P extends RPCMethodParams['d.down.rate']>(...params: P) => this.rpc.callRPCMethod('d.down.rate', ...params);
  
  public downTotal: RPCMethods['d.down.total'] = <P extends RPCMethodParams['d.down.total']>(...params: P) => this.rpc.callRPCMethod('d.down.total', ...params);
  
  public downloadsMax: RPCMethods['d.downloads_max'] = <P extends RPCMethodParams['d.downloads_max']>(...params: P) => this.rpc.callRPCMethod('d.downloads_max', ...params);
  
  public downloadsMaxSet: RPCMethods['d.downloads_max.set'] = <P extends RPCMethodParams['d.downloads_max.set']>(...params: P) => this.rpc.callRPCMethod('d.downloads_max.set', ...params);
  
  public downloadsMin: RPCMethods['d.downloads_min'] = <P extends RPCMethodParams['d.downloads_min']>(...params: P) => this.rpc.callRPCMethod('d.downloads_min', ...params);
  
  public downloadsMinSet: RPCMethods['d.downloads_min.set'] = <P extends RPCMethodParams['d.downloads_min.set']>(...params: P) => this.rpc.callRPCMethod('d.downloads_min.set', ...params);
  
  public erase: RPCMethods['d.erase'] = <P extends RPCMethodParams['d.erase']>(...params: P) => this.rpc.callRPCMethod('d.erase', ...params);
  
  public freeDiskspace: RPCMethods['d.free_diskspace'] = <P extends RPCMethodParams['d.free_diskspace']>(...params: P) => this.rpc.callRPCMethod('d.free_diskspace', ...params);
  
  public hash: RPCMethods['d.hash'] = <P extends RPCMethodParams['d.hash']>(...params: P) => this.rpc.callRPCMethod('d.hash', ...params);
  
  public hashing: RPCMethods['d.hashing'] = <P extends RPCMethodParams['d.hashing']>(...params: P) => this.rpc.callRPCMethod('d.hashing', ...params);
  
  public hashingFailed: RPCMethods['d.hashing_failed'] = <P extends RPCMethodParams['d.hashing_failed']>(...params: P) => this.rpc.callRPCMethod('d.hashing_failed', ...params);
  
  public hashingFailedSet: RPCMethods['d.hashing_failed.set'] = <P extends RPCMethodParams['d.hashing_failed.set']>(...params: P) => this.rpc.callRPCMethod('d.hashing_failed.set', ...params);
  
  public ignoreCommands: RPCMethods['d.ignore_commands'] = <P extends RPCMethodParams['d.ignore_commands']>(...params: P) => this.rpc.callRPCMethod('d.ignore_commands', ...params);
  
  public ignoreCommandsSet: RPCMethods['d.ignore_commands.set'] = <P extends RPCMethodParams['d.ignore_commands.set']>(...params: P) => this.rpc.callRPCMethod('d.ignore_commands.set', ...params);
  
  public isHashChecked: RPCMethods['d.is_hash_checked'] = <P extends RPCMethodParams['d.is_hash_checked']>(...params: P) => this.rpc.callRPCMethod('d.is_hash_checked', ...params);
  
  public isHashChecking: RPCMethods['d.is_hash_checking'] = <P extends RPCMethodParams['d.is_hash_checking']>(...params: P) => this.rpc.callRPCMethod('d.is_hash_checking', ...params);
  
  public isMeta: RPCMethods['d.is_meta'] = <P extends RPCMethodParams['d.is_meta']>(...params: P) => this.rpc.callRPCMethod('d.is_meta', ...params);
  
  public isMultiFile: RPCMethods['d.is_multi_file'] = <P extends RPCMethodParams['d.is_multi_file']>(...params: P) => this.rpc.callRPCMethod('d.is_multi_file', ...params);
  
  public isPexActive: RPCMethods['d.is_pex_active'] = <P extends RPCMethodParams['d.is_pex_active']>(...params: P) => this.rpc.callRPCMethod('d.is_pex_active', ...params);
  
  public isPrivate: RPCMethods['d.is_private'] = <P extends RPCMethodParams['d.is_private']>(...params: P) => this.rpc.callRPCMethod('d.is_private', ...params);
  
  public leftBytes: RPCMethods['d.left_bytes'] = <P extends RPCMethodParams['d.left_bytes']>(...params: P) => this.rpc.callRPCMethod('d.left_bytes', ...params);
  
  public loadDate: RPCMethods['d.load_date'] = <P extends RPCMethodParams['d.load_date']>(...params: P) => this.rpc.callRPCMethod('d.load_date', ...params);
  
  public localId: RPCMethods['d.local_id'] = <P extends RPCMethodParams['d.local_id']>(...params: P) => this.rpc.callRPCMethod('d.local_id', ...params);
  
  public localIdHtml: RPCMethods['d.local_id_html'] = <P extends RPCMethodParams['d.local_id_html']>(...params: P) => this.rpc.callRPCMethod('d.local_id_html', ...params);
  
  public maxFileSize: RPCMethods['d.max_file_size'] = <P extends RPCMethodParams['d.max_file_size']>(...params: P) => this.rpc.callRPCMethod('d.max_file_size', ...params);
  
  public maxFileSizeSet: RPCMethods['d.max_file_size.set'] = <P extends RPCMethodParams['d.max_file_size.set']>(...params: P) => this.rpc.callRPCMethod('d.max_file_size.set', ...params);
  
  public message: RPCMethods['d.message'] = <P extends RPCMethodParams['d.message']>(...params: P) => this.rpc.callRPCMethod('d.message', ...params);
  
  public messageSet: RPCMethods['d.message.set'] = <P extends RPCMethodParams['d.message.set']>(...params: P) => this.rpc.callRPCMethod('d.message.set', ...params);
  
  public messageAlert: RPCMethods['d.message.alert'] = <P extends RPCMethodParams['d.message.alert']>(...params: P) => this.rpc.callRPCMethod('d.message.alert', ...params);
  
  public name: RPCMethods['d.name'] = <P extends RPCMethodParams['d.name']>(...params: P) => this.rpc.callRPCMethod('d.name', ...params);
  
  public peerExchange: RPCMethods['d.peer_exchange'] = <P extends RPCMethodParams['d.peer_exchange']>(...params: P) => this.rpc.callRPCMethod('d.peer_exchange', ...params);
  
  public peerExchangeSet: RPCMethods['d.peer_exchange.set'] = <P extends RPCMethodParams['d.peer_exchange.set']>(...params: P) => this.rpc.callRPCMethod('d.peer_exchange.set', ...params);
  
  public priority: RPCMethods['d.priority'] = <P extends RPCMethodParams['d.priority']>(...params: P) => this.rpc.callRPCMethod('d.priority', ...params);
  
  public prioritySet: RPCMethods['d.priority.set'] = <P extends RPCMethodParams['d.priority.set']>(...params: P) => this.rpc.callRPCMethod('d.priority.set', ...params);
  
  public priorityStr: RPCMethods['d.priority_str'] = <P extends RPCMethodParams['d.priority_str']>(...params: P) => this.rpc.callRPCMethod('d.priority_str', ...params);
  
  public sizeBytes: RPCMethods['d.size_bytes'] = <P extends RPCMethodParams['d.size_bytes']>(...params: P) => this.rpc.callRPCMethod('d.size_bytes', ...params);
  
  public sizeChunks: RPCMethods['d.size_chunks'] = <P extends RPCMethodParams['d.size_chunks']>(...params: P) => this.rpc.callRPCMethod('d.size_chunks', ...params);
  
  public sizeFiles: RPCMethods['d.size_files'] = <P extends RPCMethodParams['d.size_files']>(...params: P) => this.rpc.callRPCMethod('d.size_files', ...params);
  
  public sizePex: RPCMethods['d.size_pex'] = <P extends RPCMethodParams['d.size_pex']>(...params: P) => this.rpc.callRPCMethod('d.size_pex', ...params);
  
  public skipRate: RPCMethods['d.skip.rate'] = <P extends RPCMethodParams['d.skip.rate']>(...params: P) => this.rpc.callRPCMethod('d.skip.rate', ...params);
  
  public skipTotal: RPCMethods['d.skip.total'] = <P extends RPCMethodParams['d.skip.total']>(...params: P) => this.rpc.callRPCMethod('d.skip.total', ...params);
  
  public timestampFinished: RPCMethods['d.timestamp.finished'] = <P extends RPCMethodParams['d.timestamp.finished']>(...params: P) => this.rpc.callRPCMethod('d.timestamp.finished', ...params);
  
  public timestampStarted: RPCMethods['d.timestamp.started'] = <P extends RPCMethodParams['d.timestamp.started']>(...params: P) => this.rpc.callRPCMethod('d.timestamp.started', ...params);
  
  public trackerInsert: RPCMethods['d.tracker.insert'] = <P extends RPCMethodParams['d.tracker.insert']>(...params: P) => this.rpc.callRPCMethod('d.tracker.insert', ...params);
  
  public trackerSendScrape: RPCMethods['d.tracker.send_scrape'] = <P extends RPCMethodParams['d.tracker.send_scrape']>(...params: P) => this.rpc.callRPCMethod('d.tracker.send_scrape', ...params);
  
  public trackerAnnounce: RPCMethods['d.tracker_announce'] = <P extends RPCMethodParams['d.tracker_announce']>(...params: P) => this.rpc.callRPCMethod('d.tracker_announce', ...params);
  
  public trackerFocus: RPCMethods['d.tracker_focus'] = <P extends RPCMethodParams['d.tracker_focus']>(...params: P) => this.rpc.callRPCMethod('d.tracker_focus', ...params);
  
  public trackerSize: RPCMethods['d.tracker_size'] = <P extends RPCMethodParams['d.tracker_size']>(...params: P) => this.rpc.callRPCMethod('d.tracker_size', ...params);
  
  public trackerNumwant: RPCMethods['d.tracker_numwant'] = <P extends RPCMethodParams['d.tracker_numwant']>(...params: P) => this.rpc.callRPCMethod('d.tracker_numwant', ...params);
  
  public trackerNumwantSet: RPCMethods['d.tracker_numwant.set'] = <P extends RPCMethodParams['d.tracker_numwant.set']>(...params: P) => this.rpc.callRPCMethod('d.tracker_numwant.set', ...params);
  
  public trackerScrapeDownloaded: RPCMethods['d.tracker_scrape.downloaded'] = <P extends RPCMethodParams['d.tracker_scrape.downloaded']>(...params: P) => this.rpc.callRPCMethod('d.tracker_scrape.downloaded', ...params);
  
  public trackerScrapeComplete: RPCMethods['d.tracker_scrape.complete'] = <P extends RPCMethodParams['d.tracker_scrape.complete']>(...params: P) => this.rpc.callRPCMethod('d.tracker_scrape.complete', ...params);
  
  public trackerScrapeIncomplete: RPCMethods['d.tracker_scrape.incomplete'] = <P extends RPCMethodParams['d.tracker_scrape.incomplete']>(...params: P) => this.rpc.callRPCMethod('d.tracker_scrape.incomplete', ...params);
  
  public upRate: RPCMethods['d.up.rate'] = <P extends RPCMethodParams['d.up.rate']>(...params: P) => this.rpc.callRPCMethod('d.up.rate', ...params);
  
  public upTotal: RPCMethods['d.up.total'] = <P extends RPCMethodParams['d.up.total']>(...params: P) => this.rpc.callRPCMethod('d.up.total', ...params);
  
  public updatePriorities: RPCMethods['d.update_priorities'] = <P extends RPCMethodParams['d.update_priorities']>(...params: P) => this.rpc.callRPCMethod('d.update_priorities', ...params);
  
  public uploadsMax: RPCMethods['d.uploads_max'] = <P extends RPCMethodParams['d.uploads_max']>(...params: P) => this.rpc.callRPCMethod('d.uploads_max', ...params);
  
  public uploadsMaxSet: RPCMethods['d.uploads_max.set'] = <P extends RPCMethodParams['d.uploads_max.set']>(...params: P) => this.rpc.callRPCMethod('d.uploads_max.set', ...params);
  
  public uploadsMin: RPCMethods['d.uploads_min'] = <P extends RPCMethodParams['d.uploads_min']>(...params: P) => this.rpc.callRPCMethod('d.uploads_min', ...params);
  
  public uploadsMinSet: RPCMethods['d.uploads_min.set'] = <P extends RPCMethodParams['d.uploads_min.set']>(...params: P) => this.rpc.callRPCMethod('d.uploads_min.set', ...params);
  
  public wantedChunks: RPCMethods['d.wanted_chunks'] = <P extends RPCMethodParams['d.wanted_chunks']>(...params: P) => this.rpc.callRPCMethod('d.wanted_chunks', ...params);
}
