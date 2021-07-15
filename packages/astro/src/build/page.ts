import type { AstroConfig, BuildOutput, CreatePagesCollection, RuntimeMode } from '../@types/astro';
import type { AstroRuntime, LoadResult } from '../runtime';
import type { LogOptions } from '../logger';
import type { ServerRuntime as SnowpackServerRuntime } from 'snowpack';
import path from 'path';
import { generateRSS } from './rss.js';
import { fileURLToPath } from 'url';
import { compile, match } from 'path-to-regexp';

interface PageBuildOptions {
  astroConfig: AstroConfig;
  buildState: BuildOutput;
  logging: LogOptions;
  filepath: URL;
  mode: RuntimeMode;
  snowpackRuntime: SnowpackServerRuntime;
  astroRuntime: AstroRuntime;
  site?: string;
}

/** Collection utility */
export function getPageType(filepath: URL): 'collection' | 'static' {
  if (/\$[^.]+.astro$/.test(filepath.pathname)) return 'collection';
  return 'static';
}

/** Build collection */
export async function buildCollectionPage({ astroConfig, filepath, astroRuntime, snowpackRuntime, site, buildState }: PageBuildOptions): Promise<void> {
  const { pages: pagesRoot } = astroConfig;
  const srcURL = filepath.pathname.replace(pagesRoot.pathname, '');
  const pagesPath = astroConfig.pages.pathname.replace(astroConfig.projectRoot.pathname, '');
  const snowpackURL = `/_astro/${pagesPath}${srcURL}.js`;
  console.log({ snowpackURL });
  const mod = await snowpackRuntime.importModule(snowpackURL);
  console.log({ mod });
  if (mod.exports.createCollection) {
    throw new Error(`[deprecated] createCollection is now createPages(). The API has changed.`);
  }
  if (!mod.exports.createPages) {
    throw new Error("AHH");
  }

  const pageCollection: CreatePagesCollection = await mod.exports.createPages();
  let { route, params: getParams = () => ([{}]) } = pageCollection;
  const toPath = compile(route);
  const allParams = getParams();
  const allRoutes: string[] = allParams.map((p: any) => toPath(p));
  console.log({allRoutes});
  const builtURLs = new Set<string>(); // !important: internal cache that prevents building the same URLs

  /** Recursively build collection URLs */
  async function loadCollectionPage(url: string): Promise<LoadResult | undefined> {
    if (builtURLs.has(url)) return; // this stops us from recursively building the same pages over and over
    const result = await astroRuntime.load(url);
    builtURLs.add(url);
    if (result.statusCode === 200) {
      const outPath = path.posix.join(url, '/index.html');
      buildState[outPath] = {
        srcPath: filepath,
        contents: result.contents,
        contentType: 'text/html',
        encoding: 'utf8',
      };
    }
    return result;
  }

  const results = await Promise.all(allRoutes.map(async (url) => ([url, await loadCollectionPage(url)]))) as [string, LoadResult|undefined][];
  for (const [routeUrl, result] of results) {
    if (!result) {
      continue;
    }
    if (result.statusCode >= 500) {
      throw new Error((result as any).error);
    }
    if (result.statusCode === 200 && !result.collectionInfo) {
      throw new Error(`[${srcURL}]: Collection page must export createPages() function`);
    }

    // note: for pages that require params (/tag/:tag), we will get a 404 but will still get back collectionInfo that tell us what the URLs should be
    if (result.collectionInfo?.additionalURLs) {
      // build subsequent pages
      // for the top set of additional URLs, we render every new URL generated
      await Promise.all(
        [...result.collectionInfo.additionalURLs].map(loadCollectionPage)
      );
    }
    if (result.collectionInfo?.rss) {
      if (!site) throw new Error(`[${srcURL}] createCollection() tried to generate RSS but "buildOptions.site" missing in astro.config.mjs`);
      let feedURL = routeUrl === '/' ? '/index' : routeUrl;
      feedURL = '/feed' + feedURL + '.xml';
      const rss = generateRSS({ ...(result.collectionInfo.rss as any), site }, { srcFile: srcURL, feedURL });
      buildState[feedURL] = {
        srcPath: filepath,
        contents: rss,
        contentType: 'application/rss+xml',
        encoding: 'utf8',
      };
    }
  }
}

/** Build static page */
export async function buildStaticPage({ astroConfig, buildState, filepath, astroRuntime }: PageBuildOptions): Promise<void> {
  const { pages: pagesRoot } = astroConfig;
  const url = filepath.pathname.replace(pagesRoot.pathname, '/').replace(/(index)?\.(astro|md)$/, '');
  const result = await astroRuntime.load(url);
  if (result.statusCode !== 200) {
    let err = (result as any).error;
    if (!(err instanceof Error)) err = new Error(err);
    err.filename = fileURLToPath(filepath);
    throw err;
  }
  const outFile = path.posix.join(url, '/index.html');
  buildState[outFile] = {
    srcPath: filepath,
    contents: result.contents,
    contentType: 'text/html',
    encoding: 'utf8',
  };
}
