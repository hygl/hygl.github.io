import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
  site: 'https://hygl.codeberg.page',
  integrations: [sitemap(), compressor()],
  redirects: {
    '/': '/1'
  }
});