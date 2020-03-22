export interface ProtocolRPCMethods {
  /**
   * Determines how to handle connections to other peers.
   * @param flags A comma seperated list of flags.
   * @see https://rtorrent-docs.readthedocs.io/en/latest/cmd-ref.html#term-protocol-encryption-set
   */
  ['protocol.encryption.set'](flags: string): Promise<0>;
  /**
   *
   */
  ['protocol.pex'](): Promise<0 | 1>;
  /**
   *
   * @param value
   */
  ['protocol.pex.set'](value: 0 | 1): Promise<0>;
}
