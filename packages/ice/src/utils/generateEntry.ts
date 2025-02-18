import * as path from 'path';
import fse from 'fs-extra';
import type { ServerContext, RenderMode, AppConfig } from '@ice/runtime';
import dynamicImport from './dynamicImport.js';
import { logger } from './logger.js';
import type RouteManifest from './routeManifest.js';

interface Options {
  rootDir: string;
  entry: string;
  outputDir: string;
  documentOnly: boolean;
  routeType: AppConfig['router']['type'];
  renderMode?: RenderMode;
  routeManifest: RouteManifest;
  publicPath?: string;
}

interface EntryResult {
  outputPaths: Array<string>;
}

export default async function generateEntry(options: Options): Promise<EntryResult> {
  const { rootDir, entry, outputDir, documentOnly, renderMode, routeType, routeManifest, publicPath } = options;

  let serverEntry: string;
  try {
    serverEntry = await dynamicImport(entry);
  } catch (error) {
    logger.error(`Error occurred while importing ${entry}`);
    throw error;
  }

  // When enable hash-router, only generate one html(index.html).
  const paths = routeType === 'hash' ? ['/'] : routeManifest.getFlattenRoute();
  const outputPaths = [];
  for (let i = 0, n = paths.length; i < n; i++) {
    const routePath = paths[i];
    const { htmlOutput } = await renderEntry({ routePath, serverEntry, documentOnly, renderMode, publicPath });
    const generateOptions = { rootDir, routePath, outputDir };
    if (htmlOutput) {
      const path = await generateFilePath({ ...generateOptions, type: 'html' });
      await writeFile(path, htmlOutput);
      outputPaths.push(path);
    }
  }

  return {
    outputPaths,
  };
}

const writeFile = async (file: string, content: string) => {
  await fse.ensureFile(file);
  await fse.writeFile(file, content);
};

export function escapeRoutePath(str: string) {
  // Win32 do not support file name start with ':' and '*'.
  return str.replace(/\/(:|\*)/g, '/$');
}

function formatFilePath(routePath: string, type: 'js' | 'html' | 'js.map'): string {
  return routePath === '/' ? `index.${type}` : `${escapeRoutePath(routePath)}.${type}`;
}

async function generateFilePath({
  rootDir,
  routePath,
  outputDir,
  type,
}: {
  rootDir: string;
  routePath: string;
  outputDir: string;
  type: 'js' | 'html' | 'js.map';
}) {
  const fileName = formatFilePath(routePath, type);
  if (fse.existsSync(path.join(rootDir, 'public', fileName))) {
    logger.warn(`${fileName} is overwrite by framework, rename file name if it is necessary.`);
  }

  return path.join(outputDir, fileName);
}

async function renderEntry({
  routePath,
  serverEntry,
  documentOnly,
  renderMode,
  publicPath,
}: {
  routePath: string;
  serverEntry: any;
  documentOnly: boolean;
  renderMode?: RenderMode;
  publicPath?: string;
}) {
  const serverContext: ServerContext = {
    req: {
      url: routePath,
    } as any,
  };
  const { value } = await serverEntry.renderToHTML(serverContext, {
    renderMode,
    documentOnly,
    routePath,
    serverOnlyBasename: '/',
    publicPath,
  });

  return {
    htmlOutput: value,
  };
}
