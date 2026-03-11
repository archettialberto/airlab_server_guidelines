import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // Uncomment and set `base` when deploying to a sub-path:
  // base: '/server-guide',
});
