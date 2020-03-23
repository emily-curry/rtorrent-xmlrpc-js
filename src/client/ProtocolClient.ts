// AUTO-GENERATED - DO NOT MODIFY //
import { RPCMethods, RPCMethodParams } from '../types';
import { RPCClient } from '../util/RPCClient';

/** A client that exposes all protocol.* RPC methods as directly callable functions. */
export class ProtocolClient {
  constructor(protected readonly rpc: RPCClient) {}
  /**
   * Determines how to handle connections to other peers.
   * @param flags A comma seperated list of flags.
   * @see https://rtorrent-docs.readthedocs.io/en/latest/cmd-ref.html#term-protocol-encryption-set
   */
  public encryptionSet: RPCMethods['protocol.encryption.set'] = <P extends RPCMethodParams['protocol.encryption.set']>(...params: P) => {
    return this.rpc.callRPCMethod('protocol.encryption.set', ...params);
  }
  /**
   *
   */
  public pex: RPCMethods['protocol.pex'] = <P extends RPCMethodParams['protocol.pex']>(...params: P) => {
    return this.rpc.callRPCMethod('protocol.pex', ...params);
  }
  /**
   *
   * @param value
   */
  public pexSet: RPCMethods['protocol.pex.set'] = <P extends RPCMethodParams['protocol.pex.set']>(...params: P) => {
    return this.rpc.callRPCMethod('protocol.pex.set', ...params);
  }
}
