export interface SessionRPCMethods {
  /**
   *
   */
  ['session.name'](): Promise<string>;
  /**
   *
   * @param name
   */
  ['session.name.set'](name: string): Promise<0>;
  /**
   *
   */
  ['session.on_completion'](): Promise<0 | 1>;
  /**
   *
   * @param value
   */
  ['session.on_completion.set'](value: boolean): Promise<0>;
  /**
   *
   */
  ['session.path'](): Promise<string>;
  /**
   *
   * @param path
   */
  ['session.path.set'](path: string): Promise<0>;
  /**
   *
   */
  ['session.save'](): Promise<0>;
  /**
   *
   */
  ['session.use_lock'](): Promise<0 | 1>;
  /**
   *
   * @param value
   */
  ['session.use_lock.set'](value: boolean): Promise<0>;
}
