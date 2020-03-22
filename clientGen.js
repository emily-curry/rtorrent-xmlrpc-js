const ts = require('typescript');
const { join } = require('path');
const fs = require('fs').promises;

const methodFile = './src/types/RPCMethods.ts';
const clientFolderPath = './src/client/';

const clientMeta = [
  {
    clientName: 'DownloadClient',
    clientPrefix: 'd.',
    interfaceName: 'DownloadRPCMethods'
  },
  {
    clientName: 'LoadClient',
    clientPrefix: 'load.',
    interfaceName: 'LoadRPCMethods'
  },
  {
    clientName: 'SystemClient',
    clientPrefix: 'system.',
    interfaceName: 'SystemRPCMethods'
  }
].sort((a, b) => a.clientName > b.clientName);

const methodNameRegex = /[\._](\w)/g;

const writeMethodPostTransforms = {
  'd.multicall2': text => `${text.slice(0, text.length - 1)} as any;`
};

const postTransform = (rpcMethodName, text) =>
  writeMethodPostTransforms[rpcMethodName] ? writeMethodPostTransforms[rpcMethodName](text) : text;

/**
 * @param {string} clientName
 * @param {string} prefix
 * @param {ts.InterfaceDeclaration} tsNode
 * @param {ts.SourceFile} source
 */
const writeClient = async (clientName, prefix, tsNode, source) => {
  const contents = `// AUTO-GENERATED - DO NOT MODIFY //
import { RPCMethods, RPCMethodParams } from '../types';
import { RPCClient } from '../util/RPCClient';

/** A client that exposes all ${prefix} RPC methods as directly callable functions. */
export class ${clientName} {
  constructor(protected readonly rpc: RPCClient) {}
  ${tsNode.members
    .map(m => {
      const rpcMethodName = m.name.expression.text;
      const methodName = rpcMethodName
        .replace(prefix, '')
        .replace(methodNameRegex, (m, p1) => p1.toUpperCase());
      const methodSignature = `<P extends RPCMethodParams['${rpcMethodName}']>(...params: P) => this.rpc.callRPCMethod('${rpcMethodName}', ...params);`;
      const classMethod = `public ${methodName}: RPCMethods['${rpcMethodName}'] = ${methodSignature}`;
      const comments = m.getFullText(source).slice(0, m.getLeadingTriviaWidth(source));
      const fullText = `${comments}${classMethod}`;
      return postTransform(rpcMethodName, fullText);
    })
    .join('\n  ')}
}
`;
  const filePath = join(clientFolderPath, `${clientName}.ts`);
  await fs.writeFile(filePath, contents);
};

const writeIndex = async () => {
  const contents = `// AUTO-GENERATED - DO NOT MODIFY //
${clientMeta.map(i => `export { ${i.clientName} } from './${i.clientName}';`).join('\n')}
`;
  const filePath = join(clientFolderPath, `index.ts`);
  await fs.writeFile(filePath, contents);
};

const clientGen = async () => {
  const program = ts.createProgram([methodFile], {});
  const sourceFile = program.getSourceFile(methodFile);
  const promises = [];

  ts.forEachChild(sourceFile, node => {
    if (ts.isInterfaceDeclaration(node)) {
      const client = clientMeta.find(m => m.interfaceName === node.name.text);
      if (client === undefined) return;
      promises.push(writeClient(client.clientName, client.clientPrefix, node, sourceFile));
    }
  });

  promises.push(writeIndex());
  await Promise.all(promises);
};

clientGen();
