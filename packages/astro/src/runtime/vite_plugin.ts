import type { Plugin } from 'vite';
import type { CompileOptions } from '../@types/compiler';

import { fileURLToPath } from 'url';
import { compileComponent } from '../compiler/index.js';

/** Allow Vite to load .astro files */
export default function astro(compileOptions: CompileOptions): Plugin {
  return {
    name: 'astro',
    async transform(src, id) {
      if (!id.endsWith('.astro') && !id.endsWith('.md')) return;

      const result = await compileComponent(src, {
        compileOptions,
        filename: id,
        projectRoot: fileURLToPath(compileOptions.astroConfig.projectRoot),
      });

      return {
        code: result.contents,
        map: undefined, // TODO: add sourcemap
      };
    },
  };
}
