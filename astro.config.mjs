import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

// --- Build blog-post dateModified map from frontmatter at config time ---
const postsDir = path.resolve('src/content/posts');
const postDates = {};
if (fs.existsSync(postsDir)) {
  for (const file of fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))) {
    const slug = file.replace(/\.md$/, '');
    const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');
    const match = content.match(/^dateModified:\s*(.+)$/m);
    if (match) postDates[slug] = match[1].trim();
  }
}

// Static page last-modified dates (updated when pages are meaningfully edited)
const staticDates = {
  '/':                                    '2026-03-17',
  '/kits/':                               '2026-03-26',
  '/basic-cybersecurity-kit/':            '2026-03-17',
  '/pro-cybersecurity-kit/':              '2026-03-17',
  '/free-cyber-security-training/':       '2026-03-26',
  '/2026-compliance-checklist/':          '2026-03-26',
  '/cyber-insurance-renewal-checklist/':  '2026-03-26',
  '/what-is-smb-cybersecurity-compliance/': '2026-03-26',
  '/faq/':                                '2026-03-17',
  '/about/':                              '2026-02-28',
  '/blog/':                               '2026-03-17',
  '/contact/':                            '2026-02-28',
  '/philosophy/':                         '2026-02-27',
  '/saas-vs-downloadable/':              '2026-03-17',
  '/cybersecurity-training-no-subscription/': '2026-03-18',
  '/cybersecurity-compliance-accountants/': '2026-03-18',
  '/cybersecurity-compliance-law-firms/':  '2026-03-18',
  '/cybersecurity-compliance-healthcare/': '2026-03-18',
  '/404':                                 '2026-02-28',
};

export default defineConfig({
  site: 'https://smbcyberhub.com', // Used for sitemap and canonical URLs
  trailingSlash: 'always', 
  integrations: [
    tailwind(),
    sitemap({
        filter: (page) => !['/terms/', '/privacy/', '/licensing/'].some(p => page.includes(p)),
        serialize: (item) => {
          const urlPath = new URL(item.url).pathname;

          // --- Determine lastmod ---
          let lastmod;
          // Blog posts: extract slug from /posts/{slug}/
          const postMatch = urlPath.match(/^\/posts\/([^/]+)\/$/);
          if (postMatch && postDates[postMatch[1]]) {
            lastmod = new Date(postDates[postMatch[1]]);
          } else if (staticDates[urlPath]) {
            lastmod = new Date(staticDates[urlPath]);
          }
          // Tag pages: use most-recent post date across all posts (2026-03-17)
          else if (urlPath.startsWith('/tags/')) {
            lastmod = new Date('2026-03-17');
          }

          // --- Determine changefreq & priority by page type ---
          let changefreq;
          let priority;

          if (urlPath === '/') {
            changefreq = 'weekly';   priority = 1.0;
          } else if (['/kits/', '/basic-cybersecurity-kit/', '/pro-cybersecurity-kit/', '/free-cyber-security-training/'].includes(urlPath)) {
            changefreq = 'monthly';  priority = 0.9;
          } else if (['/what-is-smb-cybersecurity-compliance/', '/2026-compliance-checklist/', '/cyber-insurance-renewal-checklist/'].includes(urlPath)) {
            changefreq = 'monthly';  priority = 0.9;
          } else if (['/cybersecurity-training-no-subscription/', '/cybersecurity-compliance-accountants/', '/cybersecurity-compliance-law-firms/', '/cybersecurity-compliance-healthcare/'].includes(urlPath)) {
            changefreq = 'monthly';  priority = 0.8;
          } else if (urlPath.startsWith('/posts/')) {
            changefreq = 'monthly';  priority = 0.7;
          } else if (urlPath.startsWith('/tags/')) {
            changefreq = 'monthly';  priority = 0.5;
          } else {
            changefreq = 'monthly';  priority = 0.6;
          }

          return { ...item, lastmod, changefreq, priority };
        },
    })
  ],
});
