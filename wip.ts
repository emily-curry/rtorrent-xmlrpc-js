interface Test {
  ['d.name'](hash: string): Promise<string>;
  ['d.multicall2'](
    view: string,
    cmd1: unknown,
    args: unknown,
    cmd2: unknown,
    cmd2?: unknown
  ): Promise<unknown>;
  ['d.multicall.filtered'](
    view: string,
    predicate: unknown,
    cmd1: unknown,
    args: unknown,
    cmd2: unknown,
    cmd2?: unknown
  ): Promise<unknown>;
  ['download_list'](view: string): Promise<unknown>;
  ['d.name'](hash: string): Promise<string>;
  ['d.base_filename'](hash: string): Promise<string>;
  ['d.base_path'](hash: string): Promise<string>;
  ['d.directory'](hash: string): Promise<string>;
  ['d.directory_base'](hash: string): Promise<string>;
  ['d.directory.set'](hash: string, path: string): Promise<0>;
  ['d.directory_base.set'](hash: string, path: string): Promise<0>;
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
  // d.custom[_throw] = ‹hash›, string ‹key› ≫ string ‹value› // FIXME:
  ['d.custom.set'](hash: string, key: string, value: unknown): Promise<0>;
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
  ['d.up.rate'](hash: string): Promise<number>;
  ['d.up.total'](hash: string): Promise<number>;
  ['d.update_priorities'](hash: string): Promise<0>;
  ['d.uploads_max'](hash: string): Promise<number>;
  ['d.uploads_max.set'](hash: string, max: unknown): Promise<0>;
  ['d.uploads_min'](hash: string): Promise<number>;
  ['d.uploads_min.set'](hash: string, min: unknown): Promise<0>;
  ['d.wanted_chunks'](hash: string): Promise<number>;
  //
  ['view.add'](): Promise<unknown>;
  ['view.sort_new'](): Promise<unknown>;
  ['view.sort_current'](): Promise<unknown>;
  // d.tracker_domain= d.name= // FIXME:
  ['d.tracker_scrape.downloaded'](target: string): Promise<number>;
  ['d.tracker_scrape.complete'](target: string): Promise<number>;
  ['d.tracker_scrape.incomplete'](target: string): Promise<number>;
  ['f.multicall'](
    infohash: string,
    pattern: unknown,
    cmd1: unknown,
    args: unknown,
    cmd2: unknown,
    cmd2?: unknown
  ): Promise<unknown>;
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
  ['f.priority.set'](infohash: string, priority: unknown): Promise<0>;
  ['f.size_bytes'](infohash: string): Promise<number>;
  ['f.size_chunks'](infohash: string): Promise<number>;
  ['p.multicall'](
    infohash: string,
    cmd1: unknown,
    args: unknown,
    cmd2: unknown,
    cmd2?: unknown
  ): Promise<unknown>;
  ['p.address'](target: string): Promise<string>;
  ['p.banned'](target: string): Promise<0 | 1>;
  ['p.banned.set'](target: string): Promise<0>;
  ['p.call_target'](
    infohash: string,
    peerhash: string,
    cmd: unknown,
    arg1: unknown,
    arg2: unknown,
    arg2?: unknown
  ): Promise<0 | 1>;
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
  ['t.multicall'](
    infohash: string,
    cmd1: unknown,
    args: unknown,
    cmd2: unknown,
    cmd2?: unknown
  ): Promise<unknown>;
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
  ['load.normal'](
    metafile: string,
    cmd1: unknown,
    args: unknown,
    cmd2: unknown,
    cmd2?: unknown
  ): Promise<0>;
  ['load.raw'](
    metafileRaw: Buffer,
    cmd1: unknown,
    args: unknown,
    cmd2: unknown,
    cmd2?: unknown
  ): Promise<0>;
  ['session.name'](): Promise<string>;
  ['session.name.set'](name: string): Promise<0>;
  ['session.on_completion'](): Promise<0 | 1>;
  ['session.on_completion.set'](value: boolean): Promise<0>;
  ['session.path'](): Promise<string>;
  ['session.path.set'](path: string): Promise<0>;
  ['session.save'](): Promise<0>;
  ['session.use_lock'](): Promise<0 | 1>;
  ['session.use_lock.set'](value: boolean): Promise<0>;
  ['method.insert'](name: string, type: string, subType: unknown, definition?: string): Promise<0>;
  ['method.insert.simple'](name: string, definition: string): Promise<0>;
  ['method.insert.c_simple'](name: string, definition: string): Promise<0>;
  ['method.insert.s_c_simple'](name: string, definition: string): Promise<0>;
  ['method.insert.value'](name: string, defaultValue: unknown): Promise<0>;
  ['method.insert.value'](): Promise<unknown>;
  ['method.insert'](): Promise<unknown>;
  ['method.set_key'](): Promise<unknown>;
  ['method.set_key'](): Promise<unknown>;
  ['method.set_key'](): Promise<unknown>;
  ['method.const.enable'](): Promise<unknown>;
  ['method.const'](name: string): Promise<0 | 1>;
  ['method.const.enable'](name: string): Promise<0>;
  ['method.get'](name: string): Promise<unknown>;
  ['method.set_key'](name: string, key: string, definition?: string): Promise<0>;
  ['method.has_key'](name: string, key: string): Promise<0 | 1>;
  ['method.list_keys'](name: string): Promise<unknown>;
  ['method.rlookup'](key: string): Promise<unknown>;
  ['method.rlookup.clear'](key: string): Promise<0>;
  ['method.redirect'](alias: string, target: string): Promise<0>;
  ['event.view.hide'](newViewName: unknown): Promise<0>;
  ['event.view.show'](oldViewName: unknown): Promise<0>;
  ['method.set_key'](): Promise<unknown>;
  ['method.set_key'](): Promise<unknown>;
  ['schedule2'](name: string, start: number, interval: number, command: unknown): Promise<0>;
  ['schedule_remove2'](name: string): Promise<0>;
  ['close_low_diskspace'](limit: unknown): Promise<0>;
  ['close_low_diskspace.normal'](limit: unknown): Promise<0>;
  ['import'](rcFilePath: string): Promise<0>;
  ['try_import'](rcFilePath: string): Promise<0>;
  // execute.throw[.bg] = {command, arg1, arg2, ...} ≫ 0 // FIXME:
  // execute.nothrow[.bg] = {command, arg1, arg2, ...} ≫ value ‹exit status›  // FIXME:
  // execute.capture[_nothrow] = {command, arg1, arg2, ...} ≫ string ‹stdout› // FIXME:

  ['system.listMethods'](): Promise<unknown>;
  ['system.methodExist'](method: string): Promise<0 | 1>;
  ['system.methodHelp'](method: string): Promise<string>;
  ['system.methodSignature'](method: unknown): Promise<string>;
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
  ['system.env'](varname: unknown): Promise<string>;
  ['session.path.set'](): Promise<unknown>;
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
  // system.capabilities FIXME:
  // system.getCapabilities
  // system.listMethods
  // system.methodExist
  // system.methodHelp
  // system.methodSignature
  // system.multicall
  // system.shutdown
  ['system.hostname'](): Promise<string>;
  ['system.pid'](): Promise<number>;
  ['system.random'](lower: unknown, upper?: unknown): Promise<number>;
  ['system.time'](): Promise<number>;
  ['system.time_seconds'](): Promise<number>;
  ['system.time_usec'](): Promise<number>;
  ['system.umask.set'](): Promise<number>;
  // TODO: Continue from here
  ['log.add_output'](scope: unknown, name: string): Promise<0>;
  ['log.add_output'](): Promise<unknown>;
  ['log.execute'](path: string): Promise<0>;
  ['log.xmlrpc'](path: string): Promise<0>;
  ['log.open_file'](name: string, logfilePath: string, scope: unknown): Promise<0>;
  // log.open_gz_file FIXME
  // log.open_file_pid
  // log.open_gz_file_pid
  ['log.open_file_pid'](): Promise<unknown>;
  ['log.vmmap.dump'](dumpfilePath: string): Promise<0>;
  ['log.messages'](logFilePath: unknown): Promise<0>;
  ['network.http.dns_cache_timeout.set'](seconds: number): Promise<0>;
  ['network.http.dns_cache_timeout'](): Promise<number>;
  ['network.http.current_open'](): Promise<number>;
  ['network.http.max_open'](): Promise<number>;
  ['network.http.max_open.set'](max: unknown): Promise<0>;
  ['network.receive_buffer.size'](): Promise<number>;
  ['network.receive_buffer.size.set'](size: unknown): Promise<0>;
  ['network.send_buffer.size'](): Promise<number>;
  ['network.send_buffer.size.set'](size: unknown): Promise<0>;
  ['network.scgi.dont_route'](): Promise<0 | 1>;
  ['network.scgi.dont_route.set'](bool: unknown): Promise<0>;
  ['network.scgi.open_local'](path: string): Promise<0>;
  ['network.scgi.open_port'](domain_or_ip: unknown, port: unknown): Promise<0>;
  ['network.tos.set'](flag: unknown): Promise<0>;
  ['network.xmlrpc.dialect.set'](): Promise<0>;
  ['network.xmlrpc.size_limit'](): Promise<number>;
  ['network.xmlrpc.size_limit.set'](maxSize: unknown): Promise<0>;
  ['network.history.depth.set'](): Promise<unknown>;
  ['method.insert'](): Promise<unknown>;
  ['method.insert'](): Promise<unknown>;
  ['schedule2'](): Promise<unknown>;
  ['schedule2'](): Promise<unknown>;
  ['dht.add_node'](host: string): Promise<0>;
  ['dht.mode.set'](mode: unknown): Promise<0>;
  ['dht'](mode: unknown): Promise<0>;
  ['dht.port'](): Promise<number>;
  ['dht.mode.set'](port: unknown): Promise<0>;
  ['dht_port'](port: unknown): Promise<0>;
  ['pieces.hash.on_completion'](): Promise<0 | 1>;
  ['pieces.hash.on_completion.set'](): Promise<0>;
  ['pieces.memory.block_count'](): Promise<number>;
  ['pieces.memory.current'](): Promise<number>;
  ['pieces.memory.max'](): Promise<number>;
  ['pieces.memory.max.set'](bytes: unknown): Promise<0>;
  ['pieces.memory.sync_queue'](): Promise<number>;
  ['pieces.preload.min_rate'](): Promise<number>;
  ['pieces.preload.min_rate.set'](bytes: unknown): Promise<0>;
  ['pieces.preload.min_size'](): Promise<number>;
  ['pieces.preload.min_size.set'](chunks: unknown): Promise<0>;
  ['pieces.preload.type'](): Promise<number>;
  ['pieces.preload.type.set'](enumValue: unknown): Promise<0>;
  ['pieces.stats_not_preloaded'](): Promise<number>;
  ['pieces.stats_preloaded'](): Promise<number>;
  ['pieces.stats.total_size'](): Promise<number>;
  ['pieces.sync.always_safe'](): Promise<0 | 1>;
  ['pieces.sync.always_safe.set'](): Promise<0>;
  ['pieces.sync.queue_size'](): Promise<number>;
  ['pieces.sync.safe_free_diskspace'](): Promise<number>;
  ['pieces.sync.timeout'](): Promise<number>;
  ['pieces.sync.timeout.set'](seconds: unknown): Promise<0>;
  ['pieces.sync.timeout_safe'](): Promise<number>;
  ['pieces.sync.timeout_safe.set'](seconds: unknown): Promise<0>;
  ['protocol.encryption.set'](flags: unknown): Promise<0>;
  ['protocol.pex'](): Promise<0 | 1>;
  ['protocol.pex.set'](): Promise<0>;
  ['throttle.down'](name: string, rate: unknown): Promise<0>;
  ['throttle.up'](name: string, rate: unknown): Promise<0>;
  ['throttle.down.max'](name: string): Promise<number>;
  ['throttle.up.max'](name: string): Promise<number>;
  ['throttle.down.rate'](name: string): Promise<number>;
  ['throttle.up.rate'](name: string): Promise<number>;
  ['throttle.global_down.rate'](): Promise<number>;
  ['throttle.global_up.rate'](): Promise<number>;
  ['throttle.global_down.total'](): Promise<number>;
  ['throttle.global_up.total'](): Promise<number>;
  ['throttle.ip'](throttleName: unknown, domainOrIP: unknown): Promise<0>;
  // throttle.names= ≫ array ‹names› // FIXME:
  ['ui.current_view.set'](viewname: unknown): Promise<0>;
  ['ui.current_view'](): Promise<string>;
  ['ui.bind_key'](display: unknown, key: string): Promise<0>;
  ['ui.bind_key.verbose'](): Promise<0 | 1>;
  ['ui.bind_key.verbose.set'](mode: unknown): Promise<0>;
  // ui.color.‹type›= ≫ string ‹color-spec› // FIXME:
  // ui.color.‹type›.set=‹color-spec› ≫ 0
  ['ui.column.spec'](columnIndex: unknown): Promise<string>;
  ['ui.column.hide'](columnIndex: unknown): Promise<0>;
  ['ui.column.show'](columnIndex: unknown): Promise<0>;
  ['ui.column.is_hidden'](columnIndex: unknown): Promise<0 | 1>;
  ['ui.column.hidden.list'](): Promise<unknown>;
  // view.collapsed.toggle=‹view-name› ≫ 0 // FIXME:
  ['directory.watch.added'](rootFolderPath: unknown, handlerCommandName: unknown): Promise<0>;
  ['directory.watch.added'](): Promise<unknown>;
  ['trackers.alias.set_key'](): Promise<unknown>;
  ['method.use_deprecated'](): Promise<0 | 1>;
  ['method.use_deprecated.set'](bool: unknown): Promise<0 | 1>;
  ['method.use_intermediate'](): Promise<number>;
  ['method.use_intermediate.set'](): Promise<number>;
}
