import { DownloadRPCMethods } from './methods/DownloadRPCMethods';
import { RPCMethods } from './RPCMethods';
import { ExtractTuple, Tail } from './util';

/** A union describing all valid XMLRPC method names. */
export type RPCMethodName = keyof RPCMethods;

/**
 * A record type where each key is a valid XMLRPC method name, and the value is
 * a tuple describing the parameters of that method.
 */
export type RPCMethodParams = { [K in RPCMethodName]: Parameters<RPCMethods[K]> };

/**
 * A utility type for extracting return types from multicall invocations.
 */
export type RPCMethodMulticallReturn<P extends RPCMethodName[]> = Array<
  {
    [I in keyof P]: P[I] extends RPCMethodName
      ? ReturnType<RPCMethods[P[I]]> extends Promise<infer U>
        ? U
        : never
      : never;
  }
>;

/**
 * A utility type for extracting return types from system.multicall invocations.
 */
export type RPCMethodSystemMulticallReturn<D extends RPCMethodCallDescriptorSystem[]> = {
  [I in keyof D]: D[I] extends RPCMethodCallDescriptorSystem
    ? D[I]['methodName'] extends RPCMulticallMethodNames
      ? RPCMethodMulticallReturn<ExtractTuple<D[I]['params'], RPCMethodName>>
      : ReturnType<RPCMethods[D[I]['methodName']]> extends Promise<infer U>
      ? U
      : never
    : never;
};

type RPCMulticallMethodNames =
  | 'd.multicall2'
  | 'f.multicall'
  | 'p.multicall'
  | 't.multicall'
  | 'system.multicall';

/** The return type of an XMLRPC method, not wrapped in a promise. */
export type RPCMethodReturnType<K extends RPCMethodName> = K extends RPCMulticallMethodNames
  ? Array<unknown>
  : ReturnType<RPCMethods[K]> extends Promise<infer R>
  ? R
  : unknown;

/**
 * Decribes an XMLRPC call that can be invoked as part of `system.multicall`.
 */
export type RPCMethodCallDescriptorSystem = {
  [K in RPCMethodName]: {
    methodName: K;
    params: RPCMethodParams[K];
  };
}[Exclude<RPCMethodName, 'system.multicall'>];

/**
 * Decribes an XMLRPC call that can be invoked as part of a call to `load.*`.
 */
export type RPCMethodCallDescriptorLoad = {
  [K in keyof DownloadRPCMethods]: {
    methodName: K;
    params: Tail<Parameters<DownloadRPCMethods[K]>>;
  };
}[Exclude<keyof DownloadRPCMethods, 'd.multicall2' | 'download_list'>];
