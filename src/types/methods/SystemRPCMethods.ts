import { RPCMethodCallDescriptorSystem, RPCMethodSystemMulticallReturn } from '../RPC';

export interface SystemRPCMethods {
  /**
   *
   * @param calls
   */
  ['system.multicall']<C extends RPCMethodCallDescriptorSystem[]>(
    ...calls: C
  ): Promise<RPCMethodSystemMulticallReturn<C>>;
  /**
   *
   */
  ['system.listMethods'](): Promise<string[]>;
  /**
   *
   * @param method
   */
  ['system.methodExist'](method: string): Promise<boolean>;
  /**
   *
   * @param method
   */
  ['system.methodHelp'](method: string): Promise<string>;
  /**
   *
   * @param method
   */
  ['system.methodSignature'](method: string): Promise<string>;
  /**
   *
   */
  ['system.getCapabilities'](): Promise<unknown>;
  /**
   *
   */
  ['system.capabilities'](): Promise<unknown>;
  /**
   *
   */
  ['system.api_version'](): Promise<string>;
  /**
   *
   */
  ['system.client_version'](): Promise<string>;
  /**
   *
   */
  ['system.library_version'](): Promise<string>;
  /**
   *
   */
  ['system.client_version.as_value'](): Promise<number>;
  /**
   *
   */
  ['system.colors.enabled'](): Promise<0 | 1>;
  /**
   *
   */
  ['system.colors.max'](): Promise<unknown>;
  /**
   *
   */
  ['system.colors.rgb'](): Promise<unknown>;
  /**
   *
   */
  ['system.cwd'](): Promise<string>;
  /**
   *
   * @param path
   */
  ['system.cwd.set'](path: string): Promise<0>;
  /**
   *
   * @param varname
   */
  ['system.env'](varname: string): Promise<string>;
  /**
   *
   */
  ['system.file.allocate'](): Promise<0 | 1>;
  /**
   *
   */
  ['system.file.allocate.set'](): Promise<0>;
  /**
   *
   */
  ['system.file_status_cache.size'](): Promise<number>;
  /**
   *
   */
  ['system.file_status_cache.prune'](): Promise<0>;
  /**
   *
   */
  ['system.files.closed_counter'](): Promise<number>;
  /**
   *
   */
  ['system.files.failed_counter'](): Promise<number>;
  /**
   *
   */
  ['system.files.opened_counter'](): Promise<number>;
  /**
   *
   * @param capability
   */
  ['system.has'](capability: unknown): Promise<0 | 1>;
  /**
   *
   */
  ['system.has.list'](): Promise<unknown>;
  /**
   *
   */
  ['system.has.private_methods'](): Promise<unknown>;
  /**
   *
   */
  ['system.has.public_methods'](): Promise<unknown>;
  /**
   *
   */
  ['system.hostname'](): Promise<string>;
  /**
   *
   */
  ['system.pid'](): Promise<number>;
  /**
   *
   * @param lower
   * @param upper
   */
  ['system.random'](lower: unknown, upper?: unknown): Promise<number>;
  /**
   *
   */
  ['system.time'](): Promise<number>;
  /**
   *
   */
  ['system.time_seconds'](): Promise<number>;
  /**
   *
   */
  ['system.time_usec'](): Promise<number>;
  /**
   *
   */
  ['system.umask.set'](): Promise<number>;
}
