import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://smbcyberhub.com', // Used for sitemap and canonical URLs
  trailingSlash: 'always', 
  integrations: [
    tailwind(),
    sitemap({
        entryLimit: 99999,
        filter: (page) => !['/terms/', '/privacy/', '/licensing/'].some(p => page.includes(p)),
        serialize: (item) => ({ ...item, lastmod: new Date().toISOString() })
  })
  ],
});
