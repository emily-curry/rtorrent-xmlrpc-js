export interface ExecuteRPCMethods {
  /**
   *
   * @param command
   * @param args
   */
  ['execute.throw'](command: string, ...args: string[]): Promise<0>;
  /**
   *
   * @param command
   * @param args
   */
  ['execute.throw.bg'](command: string, ...args: string[]): Promise<0>;
  /**
   *
   * @param command
   * @param args
   */
  ['execute.nothrow'](command: string, ...args: string[]): Promise<number>;
  /**
   *
   * @param command
   * @param args
   */
  ['execute.nothrow.bg'](command: string, ...args: string[]): Promise<number>;
  /**
   *
   * @param command
   * @param args
   */
  ['execute.capture'](command: string, ...args: string[]): Promise<string>;
  /**
   *
   * @param command
   * @param args
   */
  ['execute.capture_nothrow'](command: string, ...args: string[]): Promise<string>;
}
