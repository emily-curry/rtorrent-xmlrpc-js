import { client } from './clientSetup';

export const loadTorrentFiles = async (files: Buffer[]) => {
  for (const file of files) {
    await client.call('load.raw', '', file);
  }
};
