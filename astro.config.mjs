import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://smbcyberhub.com', // Used for sitemap and canonical URLs
  integrations: [
    tailwind(),
    sitemap({
        entryLimit: 99999
  })
  ],
});
