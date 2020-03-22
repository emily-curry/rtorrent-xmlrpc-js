import { DHTRPCMethods } from './methods/DHTRPCMethods';
import { DownloadRPCMethods } from './methods/DownloadRPCMethods';
import { ExecuteRPCMethods } from './methods/ExecuteRPCMethods';
import { FileRPCMethods } from './methods/FileRPCMethods';
import { LoadRPCMethods } from './methods/LoadRPCMethods';
import { LogRPCMethods } from './methods/LogRPCMethods';
import { NetworkRPCMethods } from './methods/NetworkRPCMethods';
import { PeerRPCMethods } from './methods/PeerRPCMethods';
import { PiecesRPCMethods } from './methods/PiecesRPCMethods';
import { ProtocolRPCMethods } from './methods/ProtocolRPCMethods';
import { SessionRPCMethods } from './methods/SessionRPCMethods';
import { SystemRPCMethods } from './methods/SystemRPCMethods';
import { ThrottleRPCMethods } from './methods/ThrottleRPCMethods';
import { TrackerRPCMethods } from './methods/TrackerRPCMethods';

/** An interface that describes the signatures of all RPC methods, indexed by thier RPC method name. */
export type RPCMethods = DHTRPCMethods &
  DownloadRPCMethods &
  ExecuteRPCMethods &
  FileRPCMethods &
  LoadRPCMethods &
  LogRPCMethods &
  NetworkRPCMethods &
  PeerRPCMethods &
  PiecesRPCMethods &
  ProtocolRPCMethods &
  SessionRPCMethods &
  SystemRPCMethods &
  ThrottleRPCMethods &
  TrackerRPCMethods;
