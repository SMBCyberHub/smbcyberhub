#!/usr/bin/env node
/**
 * IndexNow submission script for SMBCyberHub.
 *
 * Reads the built sitemap to discover all URLs and submits them to
 * the IndexNow API (supported by Bing, Yandex, Naver, Seznam).
 *
 * Usage:
 *   node scripts/indexnow-submit.mjs            # submit all URLs
 *   node scripts/indexnow-submit.mjs --dry-run   # list URLs without submitting
 */

const SITE = 'https://smbcyberhub.com';
const KEY = '4295c818699044c48fdaefd7f3c51f72';
const API = 'https://api.indexnow.org/IndexNow';

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dryRun = process.argv.includes('--dry-run');

// Parse sitemap files from dist/ to extract all <loc> URLs
function extractUrls() {
  const distDir = join(process.cwd(), 'dist');
  const sitemapFiles = readdirSync(distDir).filter(f => f.startsWith('sitemap') && f.endsWith('.xml'));

  const urls = new Set();
  for (const file of sitemapFiles) {
    const content = readFileSync(join(distDir, file), 'utf-8');
    const matches = content.matchAll(/<loc>([^<]+)<\/loc>/g);
    for (const match of matches) {
      const url = match[1];
      // Skip sitemap index entries (they point to other sitemaps, not pages)
      if (!url.endsWith('.xml')) {
        urls.add(url);
      }
    }
  }
  return [...urls];
}

async function submit(urls) {
  const body = {
    host: 'smbcyberhub.com',
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  };

  console.log(`Submitting ${urls.length} URLs to IndexNow...`);

  if (dryRun) {
    console.log('DRY RUN — URLs that would be submitted:');
    urls.forEach(u => console.log(`  ${u}`));
    return;
  }

  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  if (res.ok || res.status === 202) {
    console.log(`Success (${res.status}). ${urls.length} URLs submitted.`);
  } else {
    const text = await res.text();
    console.error(`IndexNow returned ${res.status}: ${text}`);
    process.exit(1);
  }
}

const urls = extractUrls();
if (urls.length === 0) {
  console.error('No URLs found. Run `npx astro build` first.');
  process.exit(1);
}

await submit(urls);
