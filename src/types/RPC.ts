import { RPCMethods, DRPCMethods } from './RPCMethods';
import { ExtractTuple, Tail } from './util';

/** A union describing all valid XMLRPC method names. */
export type RPCMethodName = keyof RPCMethods;

/**
 * A record type where each key is a valid XMLRPC method name, and the value is
 * a tuple describing the parameters of that method.
 */
export type RPCMethodParams = { [K in RPCMethodName]: Parameters<RPCMethods[K]> };

/**
 * A record type where each key is a valid XMLRPC method name, and the value is
 * the return type of that method.
 */
export type RPCMethodReturn = { [K in RPCMethodName]: ReturnType<RPCMethods[K]> };

/**
 * A utility type for extracting return types from multicall invocations.
 */
export type RPCMethodMulticallReturn<P extends RPCMethodName[]> = Array<
  {
    [I in keyof P]: P[I] extends RPCMethodName
      ? RPCMethodReturn[P[I]] extends Promise<infer U>
        ? U
        : never
      : never;
  }
>;

type DRPCMulticallKeys = Exclude<keyof DRPCMethods, 'd.multicall2'>;

/** The return type of an XMLRPC method, not wrapped in a promise. */
export type RPCMethodReturnType<
  K extends RPCMethodName,
  P extends RPCMethodParams[K]
> = K extends 'd.multicall2'
  ? RPCMethodMulticallReturn<ExtractTuple<P, DRPCMulticallKeys>>
  : RPCMethodReturn[K] extends Promise<infer R>
  ? R
  : never;

/**
 * Decribes an XMLRPC call that can be invoked as part of `system.multicall`.
 */
export type RPCMethodCallDescriptorSystem = {
  [K in keyof RPCMethodParams]: {
    methodName: K;
    params: RPCMethodParams[K];
  };
}[keyof RPCMethodParams];

/**
 * Decribes an XMLRPC call that can be invoked as part of a call to `load.*`.
 */
export type RPCMethodCallDescriptorLoad = {
  [K in keyof DRPCMethods]: {
    methodName: K;
    params: Tail<Parameters<DRPCMethods[K]>>;
  };
}[Exclude<keyof DRPCMethods, 'd.multicall2' | 'download_list'>];
