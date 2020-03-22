import { RTorrentClient } from '../src';

export let client: RTorrentClient;

beforeAll(() => {
  const port = process.env['XMLRPC_PORT'];
  if (port === undefined) {
    throw new Error('Environment variable [ XMLRPC_PORT ] was not set, but is required.');
  }
  client = new RTorrentClient({
    host: '127.0.0.1',
    port: parseInt(process.env['XMLRPC_PORT']!)
  });
});
