# System Patterns — SMBCyberHub

> Canonical reference for anyone editing this codebase. Describes the exact logic flow, libraries, conventions, metadata settings, schema patterns, error handling, and rules that must be preserved.

---

## 1. Technology Stack (exact versions)

| Layer | Package | Version | Purpose |
|---|---|---|---|
| Framework | `astro` | `^5.11.2` | Static site generator (SSG) |
| Styling | `tailwindcss` | `^3.4.3` | Utility-first CSS |
| Typography | `@tailwindcss/typography` | `^0.5.16` | Prose styling for blog post markdown |
| Sitemap | `@astrojs/sitemap` | `^3.4.2` | Auto-generates `/sitemap-index.xml` at build |
| Tailwind integration | `@astrojs/tailwind` | `^6.0.2` | Astro ↔ Tailwind bridge |
| Markdown | `@astrojs/markdown-remark` | `^6.3.3` | Markdown processing for content collections |
| Image processing | `sharp` | `^0.34.4` | Image optimisation (dev dependency) |
| CSS tooling | `postcss` `^8.5.6`, `autoprefixer` `^10.4.21` | PostCSS pipeline |
| Analytics | Umami Cloud | `fa515cb9-555e-45c1-92d5-7dee474ca120` | Privacy-friendly, no cookies, loaded via `<script defer>` |
| Hosting | Netlify | — | Auto-deploys on push to `master` |
| Payments | Gumroad | — | External checkout links (no on-site payment processing) |

### Build & Deploy

- **Build command:** `npm run build` → outputs to `./dist/`
- **Netlify config:** `netlify.toml` — `command = "npm run build"`, `publish = "dist"`
- **Deploy trigger:** `git push origin master`
- **No local Node.js build needed** — Netlify handles the build remotely
- **TypeScript config:** `tsconfig.json` extends `astro/tsconfigs/strict`

---

## 2. Astro Configuration (`astro.config.mjs`)

```js
site: 'https://smbcyberhub.com'
trailingSlash: 'always'
integrations: [tailwind(), sitemap({...})]
```

### Critical rules

- **Trailing slashes are enforced site-wide.** Every internal link MUST end with `/`. Non-slash URLs cause 301 redirects which hurt SEO and Core Web Vitals.
- **Sitemap** filters out `/terms/`, `/privacy/`, `/licensing/` (noindex pages). All other entries receive `lastmod` set to the build date via the `serialize` callback.
- **Site URL** is hardcoded as `https://smbcyberhub.com` — used for canonical URLs and sitemap generation.

---

## 3. Layout System (`src/layouts/Layout.astro`)

There is **one layout** used by every page. It accepts these props:

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `title` | `string` | `"SMBCyberHub"` | `<title>` tag and OG/Twitter title |
| `description` | `string` | Long default string | Meta description, OG/Twitter description |
| `ogImage` | `string` | Logo URL | OG and Twitter image |
| `ogType` | `string` | `"website"` | OG type — blog posts pass `"article"` |
| `robots` | `string` | `"index,follow"` | Per-page robots override (e.g. `"noindex"` for terms/privacy/licensing) |
| `canonical` | `string \| undefined` | Auto-generated | Explicit canonical URL; if omitted, auto-built from `Astro.url.pathname` + trailing slash |

### Canonical URL logic

```
const pathWithSlash = Astro.url.pathname.endsWith('/') ? Astro.url.pathname : `${Astro.url.pathname}/`;
const canonicalHref = canonical ?? `https://smbcyberhub.com${pathWithSlash}`;
```

Pages that define their own `canonical` prop (product pages, blog posts) pass it explicitly. All others get auto-generated with a trailing slash.

### Head rendering order

1. `<meta charset>` + `<meta viewport>`
2. `<title>` and `<meta name="description">`
3. `<meta name="robots">`
4. `<link rel="canonical">`
5. `<link rel="preload">` for LCP image (`/images/smbcyberhub-logo.webp`, type `image/webp`)
6. Favicon links (`.ico`, `32x32`, `16x16`, `apple-touch-icon`)
7. Open Graph meta tags (`og:site_name`, `og:title`, `og:description`, `og:type`, `og:image`, `og:url`, `og:locale` = `en_IE`)
8. Twitter Card meta tags (`summary_large_image`)
9. Site-wide Organization JSON-LD schema (via `set:html={JSON.stringify(orgSchema)}`)
10. `<slot name="schema" />` — page-level schema injection point
11. Umami analytics `<script defer>`

### Organization Schema (site-wide, every page)

```json
{
  "@type": "Organization",
  "name": "SMBCyberHub",
  "url": "https://smbcyberhub.com",
  "logo": "https://smbcyberhub.com/images/smbcyberhub-logo.webp",
  "knowsAbout": ["Cybersecurity Compliance", "NIST Cybersecurity Framework", "GDPR Compliance", ...],
  "contactPoint": { "email": "info@smbcyberhub.com" },
  "founder": { "@type": "Person", "name": "Jim SMBCyberHub", "jobTitle": "Cybersecurity Compliance Specialist" },
  "sameAs": ["https://www.linkedin.com/in/smb-cyberhub-67567b374/", "https://x.com/SMBCyberHub"]
}
```

### Navigation

**Desktop** (visible `lg:flex`, hidden below `lg`): 11 links in a single `<nav>` row.  
**Mobile** (visible below `lg`): Hamburger button toggles `#mobile-menu` div. Commercial pages (Compare Kits, Free Training) are listed first with `font-semibold text-base`. Secondary links are smaller (`text-xs text-blue-200`) behind a divider.

Mobile toggle JS (inline `<script>`):
```js
document.getElementById('mobile-menu-btn')?.addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', String(!expanded));
  menu?.classList.toggle('hidden');
});
```

### Footer

Static footer with links to Terms, Privacy, Licensing, Contact, X, LinkedIn. Includes inline GDPR compliance note and dynamic copyright year (`new Date().getFullYear()`).

### LCP Optimisation

The header logo is the LCP element:
- `fetchpriority="high"` on the `<img>` tag
- `<link rel="preload" as="image" href="/images/smbcyberhub-logo.webp" type="image/webp" />` in `<head>`
- Explicit `width="224" height="112"` to prevent CLS

---

## 4. Content Collection — Blog Posts

### Schema (`src/content.config.ts`)

```ts
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    pubDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});
```

### Frontmatter fields actually used in blog posts

| Field | Required | Example | Notes |
|---|---|---|---|
| `title` | Yes | `"Backups That Actually Work..."` | Used in `<h1>`, `<title>`, BlogPosting schema `headline` |
| `date` | Yes | `2025-09-09` | Used for display date, schema `datePublished`, sorting |
| `description` | Yes | String ≤160 chars ideal | Meta description, schema `description` |
| `tags` | No | `["backups", "ransomware"]` | Used for blog categorisation and display |
| `ogImage` | No | `"/images/smbcyberhub-logo.webp"` | Overrides default OG image. NOT in Zod schema but used in `[slug].astro` |
| `excerpt` | No | Short summary string | Used in schema `description` fallback. NOT in Zod schema |
| `featured` | No | `true` / `false` | Controls appearance in Featured Posts section on blog page. NOT in Zod schema |
| `canonical` | No | Full URL with trailing slash | Explicit canonical. NOT in Zod schema |
| `pubDate` | No | Same as `date` | Legacy field, rarely used |

**Important:** `ogImage`, `excerpt`, `featured`, and `canonical` are used in code but not validated by Zod. They are accessed via `data.ogImage`, `data.excerpt`, `data.featured`, `data.canonical` — Astro passes them through even though they're not in the schema.

### Frontmatter conventions

- **`canonical`** MUST include trailing slash: `"https://smbcyberhub.com/posts/slug-here/"`
- **`tags`** values determine blog page categorisation:
  - `phishing` → Phishing Protection
  - `compliance` or `gdpr` → Compliance & GDPR
  - `password` or `mfa` → Security Best Practices
  - `offboarding` or `access control` → Team Management
  - Anything else → General Cybersecurity
- **`featured: true`** posts appear in the Featured Posts section at the top of `/blog/`

### Inline JSON-LD in markdown

Some blog posts contain `<script type="application/ld+json">` blocks directly in the markdown body (e.g. HowTo schema in insurance-related posts). These render inside the `<article>` via `<Content />`. This is valid but means schema appears in `<body>` not `<head>`.

---

## 5. Blog Post Template (`src/pages/posts/[slug].astro`)

### Static path generation

```js
export async function getStaticPaths() {
  const posts = await getCollection('posts');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { slug: post.slug },
  }));
}
```

### Error handling

```js
const post = await getEntryBySlug('posts', slug);
if (!post) {
  throw new AstroError(`No post found for slug: ${slug}`);
}
```

This is the **only explicit error handling** in the codebase. It throws `AstroError` (imported from `astro/errors`) if a slug doesn't resolve. This triggers Astro's built-in error page during dev and a build failure in production.

### Schema generation

Two schemas are generated per blog post:

**BlogPosting:**
```js
{
  '@type': 'BlogPosting',
  headline: clean(data.title),        // whitespace-normalised
  description: clean(data.description || data.excerpt),
  image: [ogImageUrl],                // array format preferred by Google
  url: canonicalUrl,
  author: {
    '@type': 'Person',
    name: 'Jim SMBCyberHub',
    jobTitle: 'Cybersecurity Compliance Specialist',
    url: 'https://smbcyberhub.com/about/',
    sameAs: [LinkedIn, X]
  },
  publisher: {
    '@type': 'Organization',
    name: 'SMBCyberHub',
    url: SITE,
    logo: { '@type': 'ImageObject', url: logo }
  },
  datePublished: isoDate,
  dateModified: isoDate,               // NOTE: currently same as datePublished
  mainEntityOfPage: canonicalUrl
}
```

**BreadcrumbList:** Home → Blog → Post Title

### Helper functions

```js
const clean = (s) => String(s || '').replace(/\s+/g, ' ').trim();
```

Used to sanitise schema string values (removes multi-spaces, trims).

### OG image resolution

```js
const ogImageUrl =
  typeof data.ogImage === 'string' && data.ogImage.startsWith('http')
    ? data.ogImage
    : `${SITE}${data.ogImage || '/images/smbcyberhub-logo.webp'}`;
```

Relative paths are prepended with the site URL. Missing `ogImage` falls back to the logo.

### Post page structure

1. Visual breadcrumb nav (Home / Blog / Title)
2. `<h1>` with post title
3. Date formatted as `en-GB` locale (`DD Mon YYYY`)
4. `<div class="prose prose-lg">` wrapping `<Content />` (Tailwind Typography)
5. Hardcoded CTA section: "The 30-Minute Audit-Ready Framework" with links to `/free-cyber-security-training/` and `/kits/`

### Layout props passed by blog posts

```astro
<Layout
  title={`${data.title} | SMBCyberHub`}
  description={data.description}
  ogImage={ogImageUrl}
  ogType="article"
  canonical={canonicalUrl}
>
```

---

## 6. Page-Level Schema Patterns

Each page type uses specific JSON-LD schemas:

| Page | Schema Types | Injection Method |
|---|---|---|
| **Layout (all pages)** | Organization | `set:html` in `<head>` |
| **Homepage** | Product (×2), WebSite, BreadcrumbList | `@graph` array, `set:html` in body |
| **Blog posts** | BlogPosting, BreadcrumbList | `set:html` in body (some also have inline HowTo in markdown) |
| **Product pages** | Product (with AggregateRating, Offers) | `set:html` in body |
| **Kits comparison** | Product (×3), FAQPage | `set:html` in `<head>` via separate `<script>` tags |
| **Checklist pages** | FAQPage, custom checklist | Inline in body |
| **FAQ page** | FAQPage | Inline in `<head>` |
| **About page** | FAQPage | Inline in body |
| **Philosophy page** | Article (author: Person) | Inline in body |
| **Terms/Privacy/Licensing** | BreadcrumbList, WebPage, FAQPage | Inline in body |
| **404 page** | BreadcrumbList, WebPage | `set:html` in body |
| **Contact page** | None | — |

### Schema injection methods

- **`set:html={JSON.stringify(obj)}`** — Used when schema is built as a JS object in the frontmatter. Preferred method.
- **Inline `<script type="application/ld+json">`** — Used in `.astro` page bodies and inside markdown blog posts (for HowTo schemas). The JSON is written directly as a string.

---

## 7. Styling Conventions

### Tailwind config (`tailwind.config.js`)

- **Content paths:** `'./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md}'`
- **Dark mode:** `'class'` (toggle via `dark` class — not currently used on the site)
- **Typography plugin** customises: link colour (`blue.700`), strong colour, blockquote style, code background
- **Dark typography variant** defined but not currently active

### Colour palette (used throughout)

| Purpose | Colour | Tailwind class |
|---|---|---|
| Header background | `#234488` | `bg-[#234488]` |
| Primary text | Gray 900 | `text-gray-900` |
| Headings | Blue 800/900 | `text-blue-800`, `text-blue-900` |
| CTA primary | Emerald 600 | `bg-emerald-600` |
| CTA secondary | Blue 600 | `bg-blue-600` |
| CTA outline | Blue 600 border | `border-blue-600 text-blue-700` |
| Links in prose | Emerald 700 | `text-emerald-700 underline` |
| Nav hover | Emerald 300 | `hover:text-emerald-300` |
| Section backgrounds | Blue 50, Emerald 50, Gray 50 | Alternating |

### Responsive breakpoints

- **`lg`** (1024px): Desktop/mobile nav switch point
- **`md`** (768px): Grid column changes (1→2 or 1→3)
- **`sm`** (640px): Flex direction changes (col→row for CTA buttons)

---

## 8. Internal Linking Rules

### Trailing slashes

**Every internal link MUST end with `/`.** This includes:
- Nav links in `Layout.astro`
- Blog post links in `blog.astro` (use template literal: `` `/posts/${post.slug}/` ``)
- Links in markdown blog posts
- Canonical URLs in frontmatter
- URLs inside JSON-LD schemas
- Social share URLs

Failure to include trailing slashes causes 301 redirects → slower page loads → SEO penalty.

### Link patterns in blog posts

Blog posts use two types of internal links:
1. **Relative markdown links:** `[text](/posts/slug-name/)` or `[text](/kits/)`
2. **Full URL links** (for CTAs): `[text](https://smbcyberhub.com/free-cyber-security-training/?utm_source=blog&utm_medium=cta&utm_campaign=post_slug)`

External purchase links go to Gumroad:
- Basic Kit: `https://smbcyberhub.gumroad.com/l/basickit`
- Pro Kit: `https://smbcyberhub.gumroad.com/l/prokit`

---

## 9. Trust Signals — Consistent Values

These values MUST be identical across all pages where they appear:

| Signal | Value | Pages |
|---|---|---|
| Customer count | **100+** small teams/businesses | Homepage, blog, kits, free training, about |
| Star rating | **4.9/5** | Homepage, blog, about |
| Review count | **7 reviews** (display) / **3 reviews** (schema) | Blog (display), schema (Product) |
| Countries | **20+** | Homepage, free training |
| Framework name | **SMBCyberHub 30-Minute Audit-Ready Framework** | Homepage, kits, blog CTA, checklists |
| Author name | **Jim SMBCyberHub** | Blog schema, philosophy schema, org schema (founder) |
| Author title | **Cybersecurity Compliance Specialist** | Same locations |
| Email | **info@smbcyberhub.com** | Contact page, org schema |

---

## 10. SEO Metadata Rules

### Title tags

- **Max length:** 60 characters
- **Format:** `Page Title | SMBCyberHub` (blog posts) or standalone descriptive title (static pages)
- **Keyword placement:** Primary keyword front-loaded

### Meta descriptions

- **Max length:** 160 characters
- **Must include:** Primary keyword + value proposition + differentiator

### Pages with `noindex`

Only 3 pages use `robots: 'noindex'`:
- `/terms/`
- `/privacy/`
- `/licensing/`

These are also excluded from the sitemap via the `filter` callback in `astro.config.mjs`.

### Open Graph

- `og:locale` is set to `en_IE` (Ireland English)
- `og:type` defaults to `website`; blog posts override to `article`
- `og:image` defaults to the site logo; pages/posts can override

---

## 11. Error Handling

The site has minimal error handling by design (static site):

1. **Blog post 404:** `[slug].astro` throws `AstroError` if slug not found — causes build failure (caught at build time, never reaches production)
2. **404 page:** `src/pages/404.astro` — custom page with recovery links (Home, Kits, Blog, Free Sample, FAQ, Licensing). Includes BreadcrumbList and WebPage schema.
3. **No try/catch blocks** anywhere in the codebase — all data is known at build time
4. **No runtime API calls** — site is fully static, no server-side rendering
5. **No form handling** — contact is email-only (`mailto:` link)
6. **No client-side JS errors** — only JS is the mobile menu toggle (uses optional chaining `?.` for safety)

---

## 12. Analytics

**Umami Cloud** — loaded on every page via Layout:
```html
<script defer src="https://cloud.umami.is/script.js" data-website-id="fa515cb9-555e-45c1-92d5-7dee474ca120"></script>
```

- No cookies
- No tracking pixels
- No Google Analytics
- GDPR compliant by design

---

## 13. Robots & Crawlers (`public/robots.txt`)

**Allowed:** All crawlers, plus explicitly: GPTBot, ChatGPT-User, Google-Extended, PerplexityBot, ClaudeBot  
**Blocked:** AhrefsBot, MJ12bot, DotBot, BLEXBot  
**Sitemap:** `https://smbcyberhub.com/sitemap-index.xml`

---

## 14. File Naming & URL Conventions

- **Astro pages:** kebab-case (`basic-cybersecurity-kit.astro`)
- **Blog post slugs:** kebab-case, derived from filename (`backups-that-actually-work-3-2-1-plan-small-teams.md`)
- **Images:** kebab-case in `/public/images/` (`smbcyberhub-logo.webp`, `gdpr-badge.webp`)
- **URLs:** Always lowercase, always trailing slash

---

## 15. Common Edit Patterns

### Adding a new blog post

1. Create `src/content/posts/slug-name.md`
2. Include required frontmatter: `title`, `date`, `description`
3. Optional: `tags`, `ogImage`, `excerpt`, `featured`, `canonical`
4. Add `canonical: "https://smbcyberhub.com/posts/slug-name/"` (with trailing slash)
5. Include contextual link to `/kits/` somewhere in the body (before "Action Plan" or in a resources section)
6. End with a CTA linking to `/free-cyber-security-training/`
7. The `[slug].astro` template auto-generates BlogPosting schema, breadcrumbs, and the bottom CTA

### Adding a new static page

1. Create `src/pages/page-name.astro`
2. Import and use `Layout` with appropriate `title`, `description`, and optionally `robots`, `canonical`
3. Keep title ≤60 chars, description ≤160 chars
4. Add JSON-LD schema appropriate to the page type
5. All internal links must have trailing slashes
6. Add the page to both desktop and mobile nav in `Layout.astro` (if it should be in the nav)

### Modifying navigation

Desktop and mobile navs are **independent** in `Layout.astro`. Both must be updated when adding/removing pages. Mobile nav has a different link order (commercial pages first) and a secondary tier for less important pages.
