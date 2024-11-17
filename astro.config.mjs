import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hygl.github.io',
  integrations: [sitemap()],
  redirects: {
    '/': '/1'
  }
});