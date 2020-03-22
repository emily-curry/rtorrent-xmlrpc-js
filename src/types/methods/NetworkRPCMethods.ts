export interface NetworkRPCMethods {
  /**
   *
   * @param seconds
   */
  ['network.http.dns_cache_timeout.set'](seconds: number): Promise<0>;
  /**
   *
   */
  ['network.http.dns_cache_timeout'](): Promise<number>;
  /**
   *
   */
  ['network.http.current_open'](): Promise<number>;
  /**
   *
   */
  ['network.http.max_open'](): Promise<number>;
  /**
   *
   * @param max
   */
  ['network.http.max_open.set'](max: number): Promise<0>;
  /**
   *
   */
  ['network.receive_buffer.size'](): Promise<number>;
  /**
   *
   * @param size
   */
  ['network.receive_buffer.size.set'](size: number): Promise<0>;
  /**
   *
   */
  ['network.send_buffer.size'](): Promise<number>;
  /**
   *
   * @param size
   */
  ['network.send_buffer.size.set'](size: number): Promise<0>;
  /**
   *
   */
  ['network.scgi.dont_route'](): Promise<0 | 1>;
  /**
   *
   * @param bool
   */
  ['network.scgi.dont_route.set'](bool: 0 | 1): Promise<0>;
  /**
   *
   * @param path
   */
  ['network.scgi.open_local'](path: string): Promise<0>;
  /**
   *
   * @param host
   */
  ['network.scgi.open_port'](host: string): Promise<0>;
  /**
   *
   * @param flag
   */
  ['network.tos.set'](flag: string): Promise<0>;
  /**
   *
   * @param value
   */
  ['network.xmlrpc.dialect.set'](value: 0 | 1 | 2): Promise<0>;
  /**
   *
   */
  ['network.xmlrpc.size_limit'](): Promise<number>;
  /**
   *
   * @param maxSize
   */
  ['network.xmlrpc.size_limit.set'](maxSize: number): Promise<0>;
}
