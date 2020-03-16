import { RPCMethodCallDescriptorLoad } from '../src/types';
import { client } from './clientSetup';
import { torrents } from './torrents';

describe('load.* client methods', () => {
  beforeEach(async () => {
    await client.call('d.multicall2', '', '', 'd.erase');
    const hashes = await client.call('download_list', '', '');
    expect(hashes).toHaveLength(0);
  });

  afterEach(async () => {});

  it('loads a torrent with load.raw', async () => {
    const result = await client.call('load.raw', '', torrents.debian.file);
    expect(result).toBe(0);
    const downloadList = await client.call('download_list', '', '');
    expect(downloadList).toContain(torrents.debian.hash);
    const state = await client.call('d.state', torrents.debian.hash);
    expect(state).toBe(0);
  });

  it('loads a torrent and performs post-actions with load.raw', async () => {
    const testDir = '/testdir';

    await client.call('load.raw', '', torrents.debian.file);
    const controlDir = await client.call('d.directory', torrents.debian.hash);
    expect(controlDir).not.toBe(testDir);
    await client.call('d.erase', torrents.debian.hash);

    const postActions: RPCMethodCallDescriptorLoad[] = [
      { methodName: 'd.directory.set', params: [testDir] },
      { methodName: 'd.custom.set', params: ['key', 'value'] }
    ];
    const result = await client.call('load.raw', '', torrents.debian.file, ...postActions);
    expect(result).toBe(0);
    const downloadDir = await client.call('d.directory', torrents.debian.hash);
    expect(downloadDir).toBe(testDir);
    const customValue = await client.call('d.custom', torrents.debian.hash, 'key');
    expect(customValue).toBe('value');
  });

  it('loads and starts a torrent with load.raw_start', async () => {
    const result = await client.call('load.raw_start', '', torrents.debian.file);
    expect(result).toBe(0);
    const downloadList = await client.call('download_list', '', '');
    expect(downloadList).toContain(torrents.debian.hash);
    const state = await client.call('d.state', torrents.debian.hash);
    expect(state).toBe(1);
  });
});
