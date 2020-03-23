import { client } from './clientSetup';
import { torrents } from './torrents';
import { loadTorrentFiles } from './clientUtil';

describe('d.* client methods', () => {
  beforeEach(async () => {
    await client.d.multicall2('', '', 'd.erase');
    const hashes = await client.d.downloadList('', '');
    expect(hashes).toHaveLength(0);
  });

  afterEach(async () => {});

  it('can perform multicalls with d.multicall2', async () => {
    const files = [torrents.debian];
    await loadTorrentFiles(files.map((i) => i.file));
    const params = ['d.name', 'd.hash', 'd.state'] as const;
    const multicallResult = await client.d.multicall2('', '', ...params);
    expect(multicallResult).toHaveLength(files.length);
    const hashResults = multicallResult.map((i) => i[1]);
    for (const file of files) {
      expect(hashResults).toContain(file.hash);
    }
    for (const result of multicallResult) {
      expect(result).toHaveLength(params.length);
      expect(typeof result[0]).toBe('string');
      expect(typeof result[1]).toBe('string');
      expect(typeof result[2]).toBe('number');
    }
  });

  it('can erase a torrent with d.erase', async () => {
    await client.load.raw('', torrents.debian.file);
    const hashes = await client.d.downloadList('', '');
    const hash = hashes[0];
    expect(hash).toBeDefined();
    expect(typeof hash).toBe('string');
    const eraseResult = await client.d.erase(hash);
    expect(eraseResult).toBe(0);
    const hashesAfterErase = await client.d.downloadList('', '');
    expect(hashesAfterErase).toHaveLength(0);
  });
});
