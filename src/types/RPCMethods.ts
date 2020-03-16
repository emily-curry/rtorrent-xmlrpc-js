import { RPCMethodCallDescriptorLoad, RPCMethodMulticallReturn } from './RPC';

export interface DRPCMethods {
  /**
   * TODO:
   * @param target Unused.
   * @param view
   * @param calls
   */
  ['d.multicall2']<C extends Exclude<keyof DRPCMethods, 'd.multicall2'>[]>(
    target: '',
    view: string,
    ...calls: C
  ): Promise<RPCMethodMulticallReturn<C>>;
  ['download_list'](target: '', view: string): Promise<Array<string>>;
  ['d.name'](target: string): Promise<string>;
  ['d.base_filename'](target: string): Promise<string>;
  ['d.base_path'](target: string): Promise<string>;
  ['d.directory'](target: string): Promise<string>;
  ['d.directory_base'](target: string): Promise<string>;
  ['d.directory.set'](target: string, value: string): Promise<0>;
  ['d.directory_base.set'](target: string, value: string): Promise<0>;
  ['d.erase'](target: string): Promise<0>;
  ['d.hash'](target: string): Promise<string>;
  ['d.custom'](target: string, key: string): Promise<string>;
  ['d.custom.set'](target: string, key: string, value: string): Promise<0>;
  ['d.state'](target: string): Promise<0 | 1>;
}

export interface LoadRPCMethods {
  /**
   * Loads a torrent from raw data without starting the torrent.
   * @param target Unused.
   * @param data
   * @param postLoadCommands
   */
  ['load.raw']<C extends RPCMethodCallDescriptorLoad[]>(
    target: '',
    data: Buffer,
    ...postLoadCommands: C
  ): Promise<0>;
  /**
   * Loads a torrent from raw data and starts the torrent.
   * @param target Unused.
   * @param data
   * @param postLoadCommands
   */
  ['load.raw_start']<C extends RPCMethodCallDescriptorLoad[]>(
    target: '',
    data: Buffer,
    ...postLoadCommands: C
  ): Promise<0>;
}

/**
 * A record type where each key is a valid XMLRPC method name, and the value is
 * the method's callable signature.
 */
export type RPCMethods = DRPCMethods & LoadRPCMethods;
