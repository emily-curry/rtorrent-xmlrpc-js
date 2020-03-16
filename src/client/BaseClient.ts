import { Connection } from '../conn/Connection';
import { ParamTransformer } from '../util/ParamTransformer';
import { RPCMethodName, RPCMethodReturnType, RPCMethodParams, RPCMethods } from '../types';

export interface BaseClientOpts {
  host: string;
  port: number;
}

export abstract class BaseClient {
  private readonly transformer = new ParamTransformer();
  constructor(protected readonly conn: Connection) {}

  protected async rpcMethodCall<
    K extends RPCMethodName,
    P extends RPCMethodParams[K],
    R extends RPCMethodReturnType<K, P>
  >(methodName: K, ...params: P): Promise<R> {
    const transformedParams = this.transformer.transform(methodName, params);
    const result = await this.conn.rpcMethodCall(methodName, ...transformedParams);
    return result as R;
  }

  protected makeRPCMethod = <K extends RPCMethodName>(name: K): RPCMethods[K] => {
    const method = async <P extends RPCMethodParams[K], R extends RPCMethodReturnType<K, P>>(
      ...params: P
    ): Promise<R> => {
      return await this.rpcMethodCall(name, ...params);
    };
    return method as RPCMethods[K];
  };
}
