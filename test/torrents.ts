import { promises as fs } from 'fs';
import { join } from 'path';

interface TestTorrentDescriptorInfo {
  filename: string;
  hash: string;
}

export interface TestTorrentDescriptor extends TestTorrentDescriptorInfo {
  file: Buffer;
}

type TestTorrents = {
  [K in keyof typeof torrentDescriptors]: TestTorrentDescriptor;
};

export const torrents = {} as TestTorrents;

const makeTestTorrent = async (
  descriptor: TestTorrentDescriptorInfo
): Promise<TestTorrentDescriptor> => {
  const file = await fs.readFile(join('./test/files/', descriptor.filename));
  return { ...descriptor, file };
};

const torrentDescriptors = {
  debian: {
    filename: 'debian-10.3.0-amd64-netinst.iso.torrent',
    hash: '5A8062C076FA85E8056451C0D9AA04349AE27909'
  }
};

beforeAll(async () => {
  const keys = Object.keys(torrentDescriptors) as Array<
    keyof typeof torrentDescriptors
  >;
  await Promise.all(
    keys.map(async key => {
      torrents[key] = await makeTestTorrent(torrentDescriptors[key]);
    })
  );
});
