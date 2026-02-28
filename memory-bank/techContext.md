# Technical Context - SMBCyberHub

## Technology Stack

### Core Framework
- **Astro 5.11.2** - Static site generator for optimal performance
- **TypeScript** - Type-safe development
- **Node.js** - Development environment

### Styling
- **Tailwind CSS 3.4.3** - Utility-first CSS framework
- **@tailwindcss/typography** - Styled typography plugin
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

### Integrations
- **@astrojs/markdown-remark** - Markdown content processing
- **@astrojs/sitemap** - Automatic sitemap generation
- **@astrojs/tailwind** - Tailwind CSS integration
- **sharp** - Image optimization

### Analytics & Tracking
- **Umami Analytics** - Privacy-focused analytics (self-hosted)
- No Google Analytics or third-party tracking

## Development Setup

### Prerequisites
- Node.js (managed by Netlify in production)
- Git for version control

### Local Development
```bash
npm install
npm run dev
```
Site runs on localhost with hot reloading.

### Build Process
```bash
npm run build
```
Outputs to `/dist` directory for deployment.

## Deployment Architecture

### Hosting Platform
- **Netlify** - Static site hosting
- CI/CD via `git push origin master`
- Automatic builds on git push

### Build Configuration
- Build command: `npm run build`
- Publish directory: `dist`
- Node.js not available in production shell (Netlify handles build)

### Performance Optimizations
- Static site generation (SSG)
- Image optimization with Sharp
- Minimal JavaScript
- CSS purging in production

## File Structure

```
src/
├── components/          # Reusable Astro components
├── content/
│   ├── config.ts       # Content collection schema
│   └── posts/          # Blog post markdown files
├── layouts/
│   └── Layout.astro    # Main layout component
├── pages/              # Static pages and routes
│   ├── posts/[slug].astro  # Dynamic blog post routes
│   └── index.astro     # Homepage
└── styles/             # Global CSS files
```

## Key Technical Patterns

### Content Management
- Markdown-based blog posts with frontmatter
- Content collections with TypeScript validation
- Static path generation for posts

### SEO Implementation
- JSON-LD structured data schemas
- Meta tags optimization (150-160 char descriptions)
- Canonical URL handling
- Automatic sitemap generation

### Schema Types Used
- Organization
- Product
- BlogPosting
- BreadcrumbList
- FAQPage
- WebSite
- Person (for author profiles)

## Configuration Files

### astro.config.mjs
- Site URL: https://smbcyberhub.com
- Trailing slash enforcement
- Integration setup
- Sitemap configuration (excludes terms/privacy pages)

### package.json
- Dependencies: Astro, Tailwind, integrations
- Dev dependencies: PostCSS, Autoprefixer, Sharp
- Scripts: dev, build, preview

### netlify.toml
- Build settings
- Deployment configuration
- Publish directory specification

## Development Guidelines

### Code Standards
- TypeScript strict mode enabled
- Component-based architecture
- Utility-first CSS approach
- Semantic HTML5 structure

### SEO Best Practices
- Title tags ≤ 60 characters
- Meta descriptions 150-160 characters
- Alt text for all images
- Internal linking strategy

### Performance Considerations
- Minimal third-party dependencies
- Optimized images (Sharp)
- CSS purging
- Static generation over SSR

## External Services

### Payment Processing
- **Gumroad** - External checkout for kit purchases
- URLs:
  - Basic Kit: https://smbcyberhub.gumroad.com/l/basickit
  - Pro Kit: https://smbcyberhub.gumroad.com/l/prokit

### Analytics
- **Umami** - Self-hosted, privacy-focused
- No third-party cookies or tracking

## Security Considerations

- No server-side processing
- Static site security benefits
- No user data collection
- HTTPS enforcement via Netlify
- No external script dependencies (except analytics)
