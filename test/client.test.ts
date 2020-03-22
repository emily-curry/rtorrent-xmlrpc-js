import { RPCError } from '../src/conn/RPCError';
import { client } from './clientSetup';

describe('client functionality', () => {
  it('connects successfully, but fails with unknown method', async () => {
    const promise = client.call('not_a_real_method' as any);
    await expect(promise).rejects.toBeInstanceOf(Error);
    await expect(promise).rejects.toBeInstanceOf(RPCError);
    await expect(promise).rejects.toHaveProperty('faultCode', -506);
  });

  it('connects successfully, but fails with no arguments', async () => {
    const promise = (client.call as any)('d.name');
    await expect(promise).rejects.toBeInstanceOf(RPCError);
    await expect(promise).rejects.toHaveProperty('faultCode', -503);
  });

  it('connects successfully, but fails with invalid arguments', async () => {
    const promise = (client.call as any)('d.name', 'oops', 'not real');
    await expect(promise).rejects.toBeInstanceOf(RPCError);
    await expect(promise).rejects.toHaveProperty('faultCode', -501);
  });
});
