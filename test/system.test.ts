import { client } from './clientSetup';
import { torrents } from './torrents';
import { RPCError } from '../src';

describe('system.* client methods', () => {
  beforeEach(async () => {
    await client.d.multicall2('', '', 'd.erase');
    const hashes = await client.d.downloadList('', '');
    expect(hashes).toHaveLength(0);
  });

  afterEach(async () => {});

  it('can call multiple methods at once with system.multicall', async () => {
    const result = await client.system.multicall(
      { methodName: 'load.raw', params: ['', torrents.debian.file] },
      { methodName: 'system.listMethods', params: [] },
      { methodName: 'system.methodExist', params: ['d.fake'] },
      { methodName: 'system.methodExist', params: ['d.name'] },
      { methodName: 'd,st' as any, params: [] }
    );
    expect(result).toBeDefined();
    const downloadList = await client.d.downloadList('', '');
    expect(downloadList).toContain(torrents.debian.hash);
    expect(result[0]).toBe(0);
    expect(result[1]).toContain('system.multicall');
    expect(result[2]).toBe(false);
    expect(result[3]).toBe(true);
    expect(result[4]).toBeInstanceOf(RPCError);
  });

  it('can call multiple multicall methods at once with system.multicall', async () => {
    await client.load.raw('', torrents.debian.file);
    const result = await client.system.multicall(
      { methodName: 'd.multicall2', params: ['', '', 'd.name', 'd.hash', 'd.state'] },
      { methodName: 'f.multicall', params: [torrents.debian.hash, '', 'f.path', 'f.priority'] }
    );
    expect(result).toBeDefined();
    const [dResults, fResults] = result;
    for (const d of dResults) {
      expect(d).toHaveLength(3);
      expect(typeof d[0]).toBe('string');
      expect(typeof d[1]).toBe('string');
      expect(typeof d[2]).toBe('number');
    }
    for (const f of fResults) {
      expect(f).toHaveLength(2);
      expect(typeof f[0]).toBe('string');
      expect(typeof f[1]).toBe('number');
    }
  });
});
