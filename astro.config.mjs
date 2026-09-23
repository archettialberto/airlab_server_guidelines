import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://archettialberto.github.io',
  base: '/airlab_server_guidelines/',
  // Old bookmarks to the retired Docker guide land on its archived copy
  redirects: {
    '/docs/docker': '/airlab_server_guidelines/docs/legacy/docker',
  },
});
