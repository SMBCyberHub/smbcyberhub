# SMBCyberHub — Audit Findings & Implementation Progress

**Site:** https://smbcyberhub.com  
**Last updated:** 27 Feb 2026

---

## Completed Fixes

### Critical (all done)

| Fix | Details | Date |
|---|---|---|
| Mobile hamburger nav | Desktop nav hidden below `lg`; mobile drawer with commercial pages prioritized; accessible `aria-expanded` toggle | 26 Feb 2026 |
| Trust number consistency | Standardised to "100+" and "4.9/5" across homepage, blog, kits, about, free training | 26 Feb 2026 |
| Removed broken SearchAction schema | `WebSite` schema kept; fake search URL removed | 26 Feb 2026 |
| Removed misleading Service schema | "Cybersecurity Compliance Consulting" `Service` block deleted (no consulting offered) | 26 Feb 2026 |
| Blog listing trailing slashes | Both featured and categorised post links now use `/posts/${slug}/` | 26 Feb 2026 |
| Canonical URL trailing slashes | Fixed across 26 blog posts, 2 HowTo schemas, and 5 static pages | 15 Feb 2026 |
| Title tags shortened | 6 pages shortened to ≤60 chars (2026 checklist, insurance checklist, free training, kits, philosophy, SaaS vs downloadable) | 15 Feb 2026 |

### High (all done)

| Fix | Details | Date |
|---|---|---|
| Meta descriptions shortened | Homepage, Pro Kit, Kits, Free Training — all ≤160 chars | 26 Feb 2026 |
| Contextual `/kits/` links in 11 blog posts | Natural product link added before each post's "Action Plan" section | 26 Feb 2026 |
| Philosophy author schema → Person | Changed from Organization to Person with E-E-A-T details (name, jobTitle, sameAs) | 26 Feb 2026 |
| Blog post author schema → Person | `[slug].astro` updated with Jim SMBCyberHub, jobTitle, social links | 15 Feb 2026 |
| GDPR badge image optimised | Added `width`, `height`, `loading="lazy"` to prevent CLS | 26 Feb 2026 |
| Deduplicated Emma P testimonial | Removed duplicate from testimonial section; kept hero blockquote only | 26 Feb 2026 |
| LCP image preload + fetchpriority | Logo gets `fetchpriority="high"` and `<link rel="preload">` | 15 Feb 2026 |
| Sitemap lastmod | All entries get build-date `lastmod` via `serialize` in `astro.config.mjs` | 15 Feb 2026 |
| TL;DR answer boxes | Added to homepage, 2026 checklist, insurance checklist for AI answer extraction | 15 Feb 2026 |
| Branded framework naming | "SMBCyberHub 30-Minute Audit-Ready Framework" used on homepage, kits, blog CTA, checklists | 15 Feb 2026 |
| Internal linking to /2026-compliance-checklist/ | Added from homepage, about, insurance checklist, and 5 blog posts | 15 Feb 2026 |
| Homepage testimonial in hero | Social proof blockquote added near CTAs | 15 Feb 2026 |

### Earlier fixes (Feb 15 deployment)

- Enhanced Organization schema (social links, contactPoint, founder, knowsAbout)
- BreadcrumbList schema on homepage and all blog posts
- Blog page categorisation by topic (phishing, compliance, security, management, general)
- Featured posts section on blog page
- Comprehensive cyber insurance guide blog post added
- Image alt text optimised (GDPR badge, logo)
- Social share link trailing slashes fixed on free training page

---

## Remaining Items (Medium / Low Priority)

### Medium Priority

- [ ] **Contact page schema** — Add ContactPage or LocalBusiness schema
- [ ] **Add BreadcrumbList to product pages** — basic-cybersecurity-kit, pro-cybersecurity-kit, free-cyber-security-training currently lack breadcrumbs
- [ ] **Reduce homepage Product schema duplication** — Same products appear in homepage schema and on dedicated product pages
- [ ] **Add `dateModified` to blog posts** — Currently uses `datePublished` for both; use git commit date or frontmatter field
- [ ] **Create a "Related Posts" component** — Currently hardcoded in markdown; a dynamic component would be more maintainable
- [ ] **Add downloadable PDF resources** — Checklists as PDFs for lead capture / link bait

### Low Priority

- [ ] **Video content** — Add video embeds to key posts (phishing, MFA, compliance guide)
- [ ] **Interactive checklists** — Client-side checkbox state for audit checklists
- [ ] **Newsletter / email capture** — Currently no email list; consider for nurture sequences
- [ ] **A/B test CTA copy** — Hero buttons, free sample vs pro kit emphasis
- [ ] **Backlink outreach** — Guest posts, resource page submissions, HARO

---

## Content Inventory

**30 blog posts** in `src/content/posts/` covering:

- **Compliance & Insurance** (6): 2026 compliance guide, cyber insurance requirements, insurance docs, training proof, document checklist, audit hygiene checklist
- **Phishing & Social Engineering** (4): How phishing works, post-click response, social engineering spotting, email spoofing protection
- **Security Practices** (8): Passwords, MFA, backups, device security, shared devices, USB threats, email forwarding, payment fraud
- **Team Management** (5): Onboarding, offboarding, access reviews, inbox routine, file sharing
- **Policies & Templates** (3): Acceptable use, remote work, data retention
- **General** (4): Cybersecurity myths, remote work habits, breach costs, why downloadable beats SaaS

**18 Astro pages** in `src/pages/` (homepage, blog, 3 product pages, 2 checklists, about, FAQ, contact, philosophy, SaaS comparison, compliance explainer, terms, privacy, licensing, 404)

---

## Key Metrics to Monitor

- **Google Search Console:** Impressions, CTR, indexed pages, rich results
- **Umami Analytics:** Page views, referrers, top pages, device split
- **Gumroad:** Kit sales, free downloads, conversion rate
- **Schema validation:** Test quarterly with Google Rich Results Test
