const ts = require('typescript');
const { join } = require('path');
const fs = require('fs').promises;
const rimraf = require('rimraf');

const methodFile = './src/types/RPCMethods.ts';
const clientFolderPath = './src/client/';

const clientMeta = [
  {
    clientName: 'DClient',
    clientPrefix: 'd.',
    interfaceName: 'DRPCMethods'
  },
  {
    clientName: 'LoadClient',
    clientPrefix: 'load.',
    interfaceName: 'LoadRPCMethods'
  }
];

const methodNameRegex = /[\._](\w)/g;

/**
 *
 * @param {string} clientName
 * @param {string} prefix
 * @param {ts.InterfaceDeclaration} tsNode
 */
const writeClient = async (clientName, prefix, tsNode) => {
  const contents = `// AUTO-GENERATED - DO NOT MODIFY
import { RPCMethods } from '../types';
import { BaseClient } from './BaseClient';
import { Connection } from '../conn/Connection';

export class ${clientName} extends BaseClient {
  constructor(conn: Connection) {
    super(conn);
  }

  ${tsNode.members
    .map(m => {
      const rpcMethodName = m.name.expression.text;
      const methodName = rpcMethodName
        .replace(prefix, '')
        .replace(methodNameRegex, (m, p1) => p1.toUpperCase());
      return `public ${methodName}: RPCMethods['${rpcMethodName}'] = this.makeRPCMethod('${rpcMethodName}');`;
    })
    .join('\n  ')}
}
`;
  const filePath = join(clientFolderPath, `${clientName}.ts`);
  await fs.writeFile(filePath, contents);
};

const clientGen = async () => {
  await new Promise((res, rej) => {
    const files = clientMeta.map(i => i.clientName).join(',');
    rimraf(`./src/client/{}`);
  });
  const program = ts.createProgram([methodFile], {});
  const sourceFile = program.getSourceFile(methodFile);
  const promises = [];

  ts.forEachChild(sourceFile, node => {
    if (ts.isInterfaceDeclaration(node)) {
      const client = clientMeta.find(m => m.interfaceName === node.name.text);
      if (client === undefined) return;
      promises.push(writeClient(client.clientName, client.clientPrefix, node));
    }
  });

  await Promise.all(promises);
};

clientGen();
