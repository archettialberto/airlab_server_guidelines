import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://archettialberto.github.io',
  base: '/airlab_server_guidelines',
});
