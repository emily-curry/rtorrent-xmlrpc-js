import { RPCMethodCallDescriptorLoad } from '../RPC';

export interface LoadRPCMethods {
  /**
   * Loads a torrent from a url without starting the torrent.
   * @param target Unused, always empty.
   * @param url
   * @param postLoadCommands
   */
  ['load.normal']<C extends RPCMethodCallDescriptorLoad[]>(
    target: '',
    url: string,
    ...postLoadCommands: C
  ): Promise<0>;
  /**
   * Loads a torrent from a url and starts the torrent.
   * @param target Unused, always empty.
   * @param url
   * @param postLoadCommands
   */
  ['load.start']<C extends RPCMethodCallDescriptorLoad[]>(
    target: '',
    url: string,
    ...postLoadCommands: C
  ): Promise<0>;
  /**
   * Loads a torrent from raw data without starting the torrent.
   * @param target Unused, always empty.
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
   * @param target Unused, always empty.
   * @param data
   * @param postLoadCommands
   */
  ['load.raw_start']<C extends RPCMethodCallDescriptorLoad[]>(
    target: '',
    data: Buffer,
    ...postLoadCommands: C
  ): Promise<0>;
}
