import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://smbcyberhub.com', // Used for sitemap and canonical URLs
  trailingSlash: 'always', 
  integrations: [
    tailwind(),
    sitemap({
        filter: (page) => !['/terms/', '/privacy/', '/licensing/', '/tags/offboarding/', '/tags/password/', '/tags/mfa/', '/tags/backups/'].some(p => page.includes(p)),
        serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }),
    })
  ],
});
