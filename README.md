# SMBCyberHub

**Website:** https://smbcyberhub.com  
**Purpose:** Downloadable cybersecurity compliance kits for small businesses (1–20 staff). Privacy-first, no-SaaS, one-time purchase.

---

## Tech Stack

- **Framework:** [Astro](https://astro.build/) v5
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v3 + `@tailwindcss/typography`
- **Sitemap:** `@astrojs/sitemap` (auto-generated, excludes `/terms/`, `/privacy/`, `/licensing/`)
- **Analytics:** [Umami](https://umami.is/) (privacy-friendly, no cookies)
- **Hosting:** [Netlify](https://www.netlify.com/) (auto-deploys on push to `master`)
- **Payments:** [Gumroad](https://gumroad.com/) (external checkout)

## Project Structure

```
src/
├── content/
│   └── posts/          # 30 Markdown blog posts (frontmatter + body)
├── content.config.ts   # Content collection schema
├── layouts/
│   └── Layout.astro    # Base layout (head, nav, footer, org schema)
├── pages/
│   ├── index.astro     # Homepage
│   ├── blog.astro      # Blog listing with category tabs
│   ├── posts/
│   │   └── [slug].astro # Blog post template
│   ├── kits.astro      # Kit comparison page
│   ├── basic-cybersecurity-kit.astro
│   ├── pro-cybersecurity-kit.astro
│   ├── free-cyber-security-training.astro
│   ├── 2026-compliance-checklist.astro
│   ├── cyber-insurance-renewal-checklist.astro
│   ├── about.astro
│   ├── faq.astro
│   ├── contact.astro
│   ├── philosophy.astro
│   ├── saas-vs-downloadable.astro
│   ├── what-is-smb-cybersecurity-compliance.astro
│   ├── terms.astro       # noindex
│   ├── privacy.astro     # noindex
│   ├── licensing.astro   # noindex
│   └── 404.astro
public/
├── images/             # Logo, GDPR badge, OG images
├── robots.txt          # Allows AI bots, blocks scrapers
├── favicon.ico + PNGs
```

## Development

```sh
npm install
npm run dev       # Local dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build locally
```

## Deployment

Push to `master` — Netlify auto-builds and deploys.

```sh
git add -A
git commit -m "description of changes"
git push origin master
```

Build command: `npm run build` | Publish directory: `dist`

## Key Configuration

- **Trailing slashes:** Enforced site-wide (`trailingSlash: 'always'` in `astro.config.mjs`)
- **Canonical URLs:** Auto-generated with trailing slash in `Layout.astro`
- **Sitemap:** Auto-generated at `/sitemap-index.xml`, entries get `lastmod` at build time
- **Robots.txt:** Explicitly allows GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended

## Schema Markup

Every page has structured data (JSON-LD):

- **Site-wide:** Organization (in `Layout.astro`)
- **Homepage:** Product (x2), WebSite, BreadcrumbList
- **Product pages:** Product with AggregateRating and Offers
- **Blog posts:** BlogPosting with Person author
- **Checklist pages:** FAQPage + custom checklist schemas
- **About/FAQ/Terms/etc.:** FAQPage and/or BreadcrumbList as appropriate
