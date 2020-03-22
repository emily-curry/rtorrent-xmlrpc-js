export interface ThrottleRPCMethods {
  /**
   * Define a named throttle.
   * @param name The name of the throttle.
   * @param rate The rate of the throttle, in KiB/s.
   */
  ['throttle.down'](name: string, rate: string): Promise<0>;
  /**
   * Define a named throttle.
   * @param name The name of the throttle.
   * @param rate The rate of the throttle, in KiB/s.
   */
  ['throttle.up'](name: string, rate: string): Promise<0>;
  /**
   *
   * @param name
   */
  ['throttle.down.max'](name: string): Promise<number>;
  /**
   *
   * @param name
   */
  ['throttle.up.max'](name: string): Promise<number>;
  /**
   *
   * @param name
   */
  ['throttle.down.rate'](name: string): Promise<number>;
  /**
   *
   * @param name
   */
  ['throttle.up.rate'](name: string): Promise<number>;
  /**
   *
   */
  ['throttle.global_down.rate'](): Promise<number>;
  /**
   *
   */
  ['throttle.global_up.rate'](): Promise<number>;
  /**
   *
   */
  ['throttle.global_down.total'](): Promise<number>;
  /**
   *
   */
  ['throttle.global_up.total'](): Promise<number>;
  /**
   *
   * @param throttleName
   * @param domainOrIP
   */
  ['throttle.ip'](throttleName: string, domainOrIP: string): Promise<0>;
}
