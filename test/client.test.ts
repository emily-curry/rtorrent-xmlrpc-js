import { RPCError } from '../src/conn/RPCError';
import { client } from './clientSetup';

describe('client functionality', () => {
  it('connects successfully, but fails with unknown method', async () => {
    const promise = client.call('not_a_real_method');
    await expect(promise).rejects.toBeInstanceOf(Error);
    await expect(promise).rejects.toBeInstanceOf(RPCError);
    await expect(promise).rejects.toHaveProperty('faultCode', -506);
  });

  it('connects successfully, but fails with no arguments', async () => {
    const promise = client.call('d.name');
    await expect(promise).rejects.toBeInstanceOf(RPCError);
    await expect(promise).rejects.toHaveProperty('faultCode', -503);
  });

  it('connects successfully, but fails with invalid arguments', async () => {
    const promise = client.call('d.name', 'oops', 'not real');
    await expect(promise).rejects.toBeInstanceOf(RPCError);
    await expect(promise).rejects.toHaveProperty('faultCode', -501);
  });

  it('can make multiple simultaneous RPC calls', async () => {
    const calls: Array<Promise<string[]>> = [];
    for (let i = 0; i < 300; i++) {
      calls.push(client.system.listMethods());
    }
    const promise = Promise.all(calls);
    await expect(promise).resolves.toHaveLength(calls.length);
    const results = await promise;
    expect(results).toBeDefined();
    const methodsLen = results[0].length;
    for (const result of results) {
      expect(result).toHaveLength(methodsLen);
    }
  });
});
