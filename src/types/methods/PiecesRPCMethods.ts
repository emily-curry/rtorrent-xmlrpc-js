export interface PiecesRPCMethods {
  /**
   *
   */
  ['pieces.hash.on_completion'](): Promise<0 | 1>;
  /**
   *
   * @param value
   */
  ['pieces.hash.on_completion.set'](value: 0 | 1): Promise<0>;
  /**
   *
   */
  ['pieces.memory.block_count'](): Promise<number>;
  /**
   *
   */
  ['pieces.memory.current'](): Promise<number>;
  /**
   *
   */
  ['pieces.memory.max'](): Promise<number>;
  /**
   *
   * @param bytes
   */
  ['pieces.memory.max.set'](bytes: number): Promise<0>;
  /**
   *
   */
  ['pieces.memory.sync_queue'](): Promise<number>;
  /**
   *
   */
  ['pieces.preload.min_rate'](): Promise<number>;
  /**
   *
   * @param bytes
   */
  ['pieces.preload.min_rate.set'](bytes: number): Promise<0>;
  /**
   *
   */
  ['pieces.preload.min_size'](): Promise<number>;
  /**
   *
   * @param chunks
   */
  ['pieces.preload.min_size.set'](chunks: number): Promise<0>;
  /**
   *
   */
  ['pieces.preload.type'](): Promise<0 | 1 | 2>;
  /**
   *
   * @param enumValue
   */
  ['pieces.preload.type.set'](enumValue: 0 | 1 | 2): Promise<0>;
  /**
   *
   */
  ['pieces.stats_not_preloaded'](): Promise<number>;
  /**
   *
   */
  ['pieces.stats_preloaded'](): Promise<number>;
  /**
   *
   */
  ['pieces.stats.total_size'](): Promise<number>;
  /**
   *
   */
  ['pieces.sync.always_safe'](): Promise<0 | 1>;
  /**
   *
   */
  ['pieces.sync.always_safe.set'](): Promise<0>;
  /**
   *
   */
  ['pieces.sync.queue_size'](): Promise<number>;
  /**
   *
   */
  ['pieces.sync.safe_free_diskspace'](): Promise<number>;
  /**
   *
   */
  ['pieces.sync.timeout'](): Promise<number>;
  /**
   *
   * @param seconds
   */
  ['pieces.sync.timeout.set'](seconds: number): Promise<0>;
  /**
   *
   */
  ['pieces.sync.timeout_safe'](): Promise<number>;
  /**
   *
   * @param seconds
   */
  ['pieces.sync.timeout_safe.set'](seconds: number): Promise<0>;
}
