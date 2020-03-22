import { RPCMethodName, RPCMethodParams, RPCMethodCallDescriptorLoad, RPCMethods } from '../types';
import { RPCError } from '../conn/RPCError';

type ResultTransform<K extends RPCMethodName = RPCMethodName> = (methodName: K, result: any) => any;

export class ResultTransformer {
  private static transforms = new Map<string, ResultTransform>();

  public static register<K extends RPCMethodName[]>(
    methodNames: K,
    transformer: ResultTransform<K[number]>
  ): void;
  public static register<K extends RPCMethodName>(
    methodName: K,
    transformer: ResultTransform<K>
  ): void;
  public static register(
    methodName: RPCMethodName | RPCMethodName[],
    transformer: ResultTransform
  ) {
    const methods = Array.isArray(methodName) ? methodName : [methodName];
    for (const method of methods) {
      ResultTransformer.transforms.set(method, transformer);
    }
  }

  public transform = <K extends RPCMethodName, P extends RPCMethodParams[K]>(
    methodName: K,
    result: any
  ): unknown => {
    const transform = ResultTransformer.transforms.get(methodName);
    return transform?.(methodName, result) ?? result;
  };
}

// TODO: Until decorators are implemented, explicitly register all transforms here

ResultTransformer.register(['system.multicall'], (methodName, result: Array<any>) => {
  return result.map((i) => {
    if (Array.isArray(i)) return i[0];
    else throw new Error(`Unknown data type returned from system.multicall: ${i}`);
  });
});
