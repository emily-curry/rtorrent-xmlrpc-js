export interface DHTRPCMethods {
  /**
   *
   * @param host
   */
  ['dht.add_node'](host: string): Promise<0>;
  /**
   *
   * @param mode
   */
  ['dht.mode.set'](mode: 'on' | 'off' | 'auto' | 'disable'): Promise<0>;
  /**
   *
   * @param mode
   */
  ['dht'](mode: 'on' | 'off' | 'auto' | 'disable'): Promise<0>;
  /**
   *
   */
  ['dht.port'](): Promise<number>;
  /**
   *
   * @param port
   */
  ['dht.port.set'](port: number): Promise<0>;
  /**
   *
   * @param port
   */
  ['dht_port'](port: number): Promise<0>;
}
