import glob from 'tiny-glob';
import { fileURLToPath } from 'url';

/** Return contents of src/pages */
export async function allPages(root: URL): Promise<URL[]> {
    const cwd = fileURLToPath(root);
    const files = await glob('**/*.{astro,md}', { cwd, filesOnly: true });
    return files.map((f) => new URL(f, root));
  }