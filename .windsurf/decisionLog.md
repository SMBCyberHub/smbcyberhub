# Decision Log

### DECISION -- Add blog content URLs to LLM files
- **Date:** 2026-06-26
- **Context:** llms.txt and llms-full.txt only listed products and key pages. LLM referrals (ChatGPT, Perplexity, Copilot) were already the most promising traffic source, but LLMs had no structured way to discover our blog content.
- **Options considered:** (A) Add only top-performing posts, (B) Add all posts organized by category, (C) Create a separate llms-blog.txt
- **Chosen:** (A) for llms.txt (12 top posts + industry guides), (B) for llms-full.txt (all 42 posts with descriptions)
- **Rationale:** llms.txt stays concise for quick model context; llms-full.txt provides complete coverage for thorough model ingestion
- **Trade-offs:** llms-full.txt is now larger (~240 lines), but LLMs handle this well and completeness is more valuable than brevity for the full version

### DECISION -- Add HowTo schema to template blog posts
- **Date:** 2026-06-26
- **Context:** Template posts (incident-response-plan, acceptable-use-policy) are among the top-performing pages but lacked HowTo rich result eligibility. Only static checklist pages had HowTo schema.
- **Options considered:** (A) Add HowTo schema inline in markdown body, (B) Add via [slug].astro template conditionally, (C) Skip HowTo for blog posts
- **Chosen:** (A) Inline in markdown body
- **Rationale:** Consistent with existing pattern (checklist pages use inline HowTo in markdown per systemPatterns.md). Keeps the blog template simple and allows per-post customization of step definitions.
- **Trade-offs:** Schema appears in `<body>` not `<head>`, but this is valid and already established as the codebase convention.

### DECISION -- Homepage hero: add value summary cards
- **Date:** 2026-06-26
- **Context:** Homepage had 93% bounce rate. The hero section showed the tagline and CTA but didn't immediately communicate what's inside the kits.
- **Options considered:** (A) Add icon cards between tagline and CTA, (B) Expand the tagline paragraph, (C) Add a video/animation
- **Chosen:** (A) 4-card grid (Training Slides, Policy Templates, Staff Quizzes, Audit Checklists)
- **Rationale:** Gives visitors immediate "what you get" clarity without disrupting the existing CTA flow. Uses existing Tailwind utility classes. No new dependencies or images needed.
- **Trade-offs:** Slightly more content above the fold on mobile (stacks to 2x2 grid).

### DECISION -- Free training page: show kit contents before download button
- **Date:** 2026-06-26
- **Context:** Page had 90% bounce with 1s avg visit. The download button is the first CTA, taking users immediately to Gumroad. Visitors didn't see what was included before leaving the page.
- **Options considered:** (A) Move kit contents list above download button, (B) Add a modal/popup preview, (C) Add inline content preview images
- **Chosen:** (A) Compact checklist with green checkmark SVGs placed between tagline and download button
- **Rationale:** Shows value before the CTA. Users who click through to Gumroad now arrive with clearer expectations. Users who don't download immediately have more reason to stay and explore (compare kits, read blog).
- **Trade-offs:** Download button moves slightly lower on mobile, but the value demonstration should improve conversion quality.
### DECISION -- Content refresh strategy for "Crawled - not indexed" GSC status
- **Date:** 2026-07-20
- **Context:** GDPR breach notification post was crawled but not indexed by Google. Validation failed 11 Jul 2026. Technical SEO was clean (robots, canonical, sitemap, schema, redirects, 12+ inbound links). Root cause: quality/authority signal gap in competitive GDPR SERP.
- **Options considered:** (A) Schema + freshness only (minimal), (B) Content refresh only (add enforcement data), (C) Full refresh: content + FAQPage schema + dateModified + link strengthening
- **Chosen:** (C) Full refresh
- **Rationale:** "Crawled - not indexed" requires a meaningful quality signal improvement. Schema alone wouldn't change Google's content quality assessment. Content refresh alone misses the FAQPage rich-result opportunity. The combined approach gives the strongest re-indexing signal: fresh enforcement data (unique to this post), FAQPage for rich results, practical SMB scenario differentiating from generic GDPR guides, and contextual internal links clarifying the relationship to adjacent GDPR/breach/insurance posts.
- **Trade-offs:** More extensive changes than minimal fixes, but the post was already 4 months stale and the content additions (real DPC/ICO fines, practical scenario) are genuinely valuable to readers.

### DONE -- GDPR breach notification post refresh (SESSION-002)
- **Date:** 2026-07-20
- **Summary:** Refreshed GDPR breach notification post to address GSC "Crawled - currently not indexed" status
- **Files created/modified:** `src/content/posts/gdpr-breach-notification-procedures-small-business.md`
- **Testing:** `npx astro build` — 73 pages, 0 errors. Verified FAQPage schema in built HTML. Verified sitemap lastmod updated to 2026-07-20. Word count confirmed ~3,950 (up from ~2,520).
- **Notes:** Key additions: FAQPage schema (7 Q&A), enforcement section (6 real DPC/ICO fines), practical 12-person firm scenario, strengthened Related Resources with contextual descriptions, DPC 2025 Annual Report link. Submit URL to GSC after deploy.
