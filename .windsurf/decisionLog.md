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