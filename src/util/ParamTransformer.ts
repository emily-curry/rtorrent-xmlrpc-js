import { RPCMethodName, RPCMethodParams, RPCMethodCallDescriptorLoad } from '../types';

type ParamTransform<K extends RPCMethodName = RPCMethodName> = <P extends RPCMethodParams[K]>(
  methodName: K,
  params: P
) => P;

export class ParamTransformer {
  private static transforms = new Map<string, ParamTransform[]>();

  public static register<K extends RPCMethodName[]>(
    methodNames: K,
    transformer: ParamTransform<K[number]>
  ): void;
  public static register<K extends RPCMethodName>(
    methodName: K,
    transformer: ParamTransform<K>
  ): void;
  public static register(methodName: RPCMethodName | RPCMethodName[], transformer: ParamTransform) {
    const methods = Array.isArray(methodName) ? methodName : [methodName];
    for (const method of methods) {
      const existing = ParamTransformer.transforms.get(method);
      const next = existing ? [...existing, transformer] : [transformer];
      ParamTransformer.transforms.set(method, next);
    }
  }

  public transform = <K extends RPCMethodName, P extends RPCMethodParams[K]>(
    methodName: K,
    params: P
  ): unknown[] => {
    const transforms = ParamTransformer.transforms.get(methodName) ?? [];
    return transforms.reduce<P>((acc, tran) => tran(methodName, acc), [...params] as P);
  };
}

// TODO: Until decorators are implemented, explicitly register all transforms here
// TODO: Transformers don't actually return P, so more than one shouldn't be able to be registered

ParamTransformer.register(['d.multicall2'], (methodName, params) => {
  return params.map((i, idx) => {
    if (idx <= 1) return i;
    return `${i}=`;
  }) as any;
});

ParamTransformer.register(['load.raw'], (methodName, params) => {
  const [target, file, ...post] = params;
  const paramCoerce = (val: string | number | boolean) => {
    if (typeof val === 'boolean') return val ? 1 : 0;
    if (typeof val === 'number') return val;
    return `"${val}"`;
  };
  return [
    target,
    file,
    ...(post as Array<RPCMethodCallDescriptorLoad>).map(i => {
      return `${i.methodName}=${(i.params as any).map(paramCoerce).join(',')}`;
    })
  ] as any;
});
