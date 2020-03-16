import { RPCError } from '../src/conn/RPCError';
import { client } from './clientSetup';

describe('client functionality', () => {
  it('connects successfully, but fails with unknown method', async () => {
    try {
      const res = await client.call('not_a_real_method' as any);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err).toBeInstanceOf(RPCError);
      expect(err.faultCode).toBe(-506);
    }
  });

  it('connects successfully, but fails with no arguments', async () => {
    try {
      const res = await (client.call as any)('d.name');
    } catch (err) {
      expect(err).toBeInstanceOf(RPCError);
      expect(err.faultCode).toBe(-503);
    }
  });

  it('connects successfully, but fails with invalid arguments', async () => {
    try {
      const res = await (client.call as any)('d.name', 'oops', 'not real');
    } catch (err) {
      expect(err).toBeInstanceOf(RPCError);
      expect(err.faultCode).toBe(-501);
    }
  });
});
