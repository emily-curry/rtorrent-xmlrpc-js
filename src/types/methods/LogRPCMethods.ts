export interface LogRPCMethods {
  /**
   *
   * @param scope
   * @param name
   */
  ['log.add_output'](scope: string, name: string): Promise<0>;
  /**
   *
   * @param path
   */
  ['log.execute'](path: string): Promise<0>;
  /**
   *
   * @param path
   */
  ['log.xmlrpc'](path: string): Promise<0>;
  /**
   *
   * @param name
   * @param logfilePath
   * @param scope
   */
  ['log.open_file'](name: string, logfilePath: string, scope?: string): Promise<0>;
  /**
   *
   * @param name
   * @param logfilePath
   * @param scope
   */
  ['log.open_file_pid'](name: string, logfilePath: string, scope?: string): Promise<0>;
  /**
   *
   * @param name
   * @param logfilePath
   * @param scope
   */
  ['log.open_gz_file'](name: string, logfilePath: string, scope?: string): Promise<0>;
  /**
   *
   * @param name
   * @param logfilePath
   * @param scope
   */
  ['log.open_gz_file_pid'](name: string, logfilePath: string, scope?: string): Promise<0>;
  /**
   *
   * @param dumpfilePath
   */
  ['log.vmmap.dump'](dumpfilePath: string): Promise<0>;
  /**
   *
   * @param dumpfilePath
   */
  ['log.messages'](logFilePath: string): Promise<0>;
}
