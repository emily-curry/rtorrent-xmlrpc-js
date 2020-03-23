const ts = require('typescript');
const { join } = require('path');
const fs = require('fs').promises;

const methodsFolderPath = './src/types/methods/';
const clientFolderPath = './src/client/';

const clientMeta = [
  {
    clientName: 'DHTClient',
    clientPrefix: 'dht.',
    interfaceName: 'DHTRPCMethods',
  },
  {
    clientName: 'DownloadClient',
    clientPrefix: 'd.',
    interfaceName: 'DownloadRPCMethods',
  },
  {
    clientName: 'ExecuteClient',
    clientPrefix: 'execute.',
    interfaceName: 'ExecuteRPCMethods',
  },
  {
    clientName: 'FileClient',
    clientPrefix: 'f.',
    interfaceName: 'FileRPCMethods',
  },
  {
    clientName: 'LoadClient',
    clientPrefix: 'load.',
    interfaceName: 'LoadRPCMethods',
  },
  {
    clientName: 'LogClient',
    clientPrefix: 'log.',
    interfaceName: 'LogRPCMethods',
  },
  {
    clientName: 'NetworkClient',
    clientPrefix: 'network.',
    interfaceName: 'NetworkRPCMethods',
  },
  {
    clientName: 'PeerClient',
    clientPrefix: 'p.',
    interfaceName: 'PeerRPCMethods',
  },
  {
    clientName: 'PiecesClient',
    clientPrefix: 'pieces.',
    interfaceName: 'PiecesRPCMethods',
  },
  {
    clientName: 'ProtocolClient',
    clientPrefix: 'protocol.',
    interfaceName: 'ProtocolRPCMethods',
  },
  {
    clientName: 'SessionClient',
    clientPrefix: 'session.',
    interfaceName: 'SessionRPCMethods',
  },
  {
    clientName: 'SystemClient',
    clientPrefix: 'system.',
    interfaceName: 'SystemRPCMethods',
  },
  {
    clientName: 'ThrottleClient',
    clientPrefix: 'throttle.',
    interfaceName: 'ThrottleRPCMethods',
  },
  {
    clientName: 'TrackerClient',
    clientPrefix: 't.',
    interfaceName: 'TrackerRPCMethods',
  },
].sort((a, b) => a.clientName > b.clientName);

const methodNameRegex = /[\._](\w)/g;

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

/** A client that exposes all ${prefix}* RPC methods as directly callable functions. */
export class ${clientName} {
  constructor(protected readonly rpc: RPCClient) {}
  ${tsNode.members
    .map((m) => {
      const rpcMethodName = m.name.expression.text;
      const methodName = rpcMethodName
        .replace(prefix, '')
        .replace(methodNameRegex, (m, p1) => p1.toUpperCase());
      const methodSignature = `<P extends RPCMethodParams['${rpcMethodName}']>(...params: P) => {\n    return this.rpc.callRPCMethod('${rpcMethodName}', ...params);\n  }`;
      const classMethod = `public ${methodName}: RPCMethods['${rpcMethodName}'] = ${methodSignature}`;
      const comments = m
        .getFullText(source)
        .slice(0, m.getLeadingTriviaWidth(source))
        .replace(/^\n\s+/, '');
      const fullText = `${comments}${classMethod}`;
      return fullText;
    })
    .join('\n  ')}
}
`;
  const filePath = join(clientFolderPath, `${clientName}.ts`);
  await fs.writeFile(filePath, contents);
};

const writeIndex = async () => {
  const contents = `// AUTO-GENERATED - DO NOT MODIFY //
${clientMeta.map((i) => `export { ${i.clientName} } from './${i.clientName}';`).join('\n')}
`;
  const filePath = join(clientFolderPath, `index.ts`);
  await fs.writeFile(filePath, contents);
};

const clientGen = async () => {
  const interfaceFiles = clientMeta.map((i) => join(methodsFolderPath, `${i.interfaceName}.ts`));
  const program = ts.createProgram(interfaceFiles, {});
  const promises = [];

  for (const file of interfaceFiles) {
    const sourceFile = program.getSourceFile(file);

    ts.forEachChild(sourceFile, (node) => {
      if (ts.isInterfaceDeclaration(node)) {
        const client = clientMeta.find((m) => m.interfaceName === node.name.text);
        if (client === undefined) return;
        promises.push(writeClient(client.clientName, client.clientPrefix, node, sourceFile));
      }
    });
  }

  promises.push(writeIndex());
  await Promise.all(promises);
};

clientGen();
