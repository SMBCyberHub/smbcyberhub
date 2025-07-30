import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://smbcyberhub.com', // Used for sitemap and canonical URLs
  integrations: [
    tailwind(),
    sitemap({
      i18n: false, // No multi-language support needed
    }),
  ],
});
