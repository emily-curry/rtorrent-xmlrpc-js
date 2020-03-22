import { RPCMethodName, RPCMethodParams, RPCMethodCallDescriptorLoad } from '../types';

type ParamTransform<K extends RPCMethodName = RPCMethodName> = <P extends RPCMethodParams[K]>(
  methodName: K,
  params: P,
  context: ParamTransformer
) => any;

export class ParamTransformer {
  private static transforms = new Map<string, ParamTransform>();

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
      ParamTransformer.transforms.set(method, transformer);
    }
  }

  public transform = <K extends RPCMethodName, P extends RPCMethodParams[K]>(
    methodName: K,
    params: P,
    context: this
  ): unknown[] => {
    const transform = ParamTransformer.transforms.get(methodName);
    return transform?.(methodName, params, context) ?? params;
  };
}

// TODO: Until decorators are implemented, explicitly register all transforms here

ParamTransformer.register(['d.multicall2', 'f.multicall'], (methodName, params) => {
  return params.map((i, idx) => {
    if (idx <= 1) return i;
    return `${i}=`;
  });
});

ParamTransformer.register(['p.multicall', 't.multicall'], (methodName, params) => {
  return params.map((i, idx) => {
    if (idx <= 0) return i;
    return `${i}=`;
  });
});

ParamTransformer.register(['system.multicall'], (methodName, params, context) => {
  return [
    params.map(p => ({
      methodName: p.methodName,
      params: context.transform(p.methodName, p.params, context)
    }))
  ];
});

ParamTransformer.register(
  ['load.raw', 'load.raw_start', 'load.normal', 'load.start'],
  (methodName, params) => {
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
    ];
  }
);
