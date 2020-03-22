import { Connection } from '../conn/Connection';
import { ParamTransformer } from './ParamTransformer';
import { RPCMethodName, RPCMethodReturnType, RPCMethodParams } from '../types';
import { ResultTransformer } from './ResultTransformer';

export interface RPCClientOpts {
  host: string;
  port: number;
}

export class RPCClient {
  private readonly paramTrans = new ParamTransformer();
  private readonly resultTrans = new ResultTransformer();
  private readonly conn: Connection;
  constructor(opts: RPCClientOpts) {
    this.conn = new Connection(opts.host, opts.port);
  }

  public async callRPCMethod<
    K extends RPCMethodName,
    P extends RPCMethodParams[K],
    R extends RPCMethodReturnType<K>
  >(methodName: K, ...params: P): Promise<R> {
    const transformedParams = this.paramTrans.transform(methodName, params, this.paramTrans);
    const result = await this.conn.rpcMethodCall(methodName, ...transformedParams);
    const transformedResult = this.resultTrans.transform(methodName, result);
    return transformedResult as R;
  }
}
