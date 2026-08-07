# Decision Log

### DECISION -- Site-wide accuracy remediation following external audit
- **Date:** 2026-08-07
- **Context:** An external LLM-based audit identified material misrepresentations, outdated standards references, and internal contradictions across the site. Key issues: PDF-only kits described as "customizable Word templates", competitor pricing ($18/user KnowBe4) that appeared inflated vs current rates, ISO 27001 Clause 7.2.2 referencing outdated standard structure, Privacy/Terms contradicting each other on analytics, and NIST CSF 2.0 described as having 5 functions instead of 6.
- **Options considered:** (1) Fix only P0 items, (2) Full remediation across all priority tiers, (3) Ignore and continue publishing
- **Chosen:** Full remediation — 42 files changed across P0/P1/P2 categories
- **Rationale:** For a cybersecurity compliance site, accuracy IS credibility. Fixing incrementally would leave contradictions visible to compliance-conscious buyers. Better to do a single comprehensive pass.
- **Trade-offs:** Large changeset increases deployment risk; competitor pricing removal reduces a persuasive marketing element. However, inaccurate claims on a compliance site are far more damaging than the marketing value of those claims.

### DECISION -- Second-pass remediation after fresh live-site re-audit
- **Date:** 2026-08-07
- **Context:** Fresh crawl of deployed site on 2026-08-07 revealed issues missed in SESSION-003 first pass: (1) GDPR Article 39.1(b) framed as a universal training requirement when it's actually about DPO monitoring tasks, (2) recycled cybersecurity statistics with no verifiable primary source ("60% close", "43% target", "95% human error"), (3) categorical claims on industry pages (law firms, healthcare, accountants), (4) remaining insurer absolutes.
- **Options considered:** (1) Defer to a future session, (2) Fix immediately in same session
- **Chosen:** Fix immediately as SESSION-003b addendum — 16 additional files changed
- **Rationale:** The auditor correctly identified that Article 39 is about DPO tasks, not a standalone training mandate. This is a legally meaningful distinction on a compliance site. Folklore statistics undermine source credibility. Both require immediate correction.
- **Trade-offs:** Removing dramatic statistics reduces emotional impact of marketing copy. But for a compliance-credentials site, accuracy matters more than dramatic effect.

### AHA -- GDPR Article 39.1(b) is NOT a universal training requirement
- **Date:** 2026-08-07
- **Insight:** Article 39 defines the tasks of the Data Protection Officer. 39.1(b) references "monitoring compliance with this Regulation... including... awareness-raising and training of staff." It does NOT establish a standalone requirement that every SMB must conduct annual training. The site had been framing it as "GDPR Article 39.1(b) requires documented security awareness training for all staff" which overstates what the article actually mandates.
- **Context:** Identified by external auditor during live-site re-crawl. The site had ~15 instances of this overstatement across pages, schemas, and LLM files.
- **Impact:** All GDPR training references should use "GDPR staff-training obligations" or "GDPR security-awareness obligations" as general framing. Article 39.1(b) can be cited as a reference point but not as a direct mandate. Added AGENTS.md rule.

### AHA -- Recycled cybersecurity statistics have no primary sources
- **Date:** 2026-08-07
- **Insight:** The commonly cited "60% of small businesses close within 6 months of a cyber attack" has no confirmed primary study — it's cybersecurity marketing folklore that has been repeatedly fact-checked and found lacking. Similarly, "43% of cyber attacks target small businesses" and "95% are caused by human error" are commonly recycled without current source citations.
- **Context:** External auditor flagged these during the re-audit. For a site selling trustworthy compliance material, using unverifiable statistics undermines the credibility proposition.
- **Impact:** All replaced with qualitative language. Added AGENTS.md rule requiring verifiable primary sources for statistics.

### FIX -- GDPR Article 39.1(b) overstatement across site
- **Date:** 2026-08-07
- **Symptom:** Multiple pages stated "GDPR Article 39.1(b) requires/mandates documented security awareness training for all staff" — framing it as a direct universal training requirement.
- **Root cause:** Misinterpretation of Article 39 scope. Article 39 defines DPO tasks; 39.1(b) references awareness and training as part of DPO monitoring, not as a standalone mandate for all organisations.
- **Resolution:** Changed all "requires/mandates" → "includes obligations around staff awareness" / "references awareness-raising and training as part of the DPO's monitoring role". Updated 7 pages + llms-full.txt.
- **Files affected:** 2026-compliance-checklist.astro (3 edits), what-is-smb-cybersecurity-compliance.astro (3 edits), cybersecurity-compliance-accountants.astro (5 edits), kits.astro (2 edits), free-cyber-security-training.astro (1 edit), audit-ready-checklist blog post (1 edit), llms-full.txt (1 edit)
- **Prevention:** AGENTS.md rule added: "Never frame GDPR Article 39.1(b) as a universal training requirement."

### FIX -- Recycled statistics removed from 6 files
- **Date:** 2026-08-07
- **Symptom:** Site cited "60% of small businesses close within 6 months", "43% of cyber attacks target small businesses", "95% of cyber attacks are caused by human error" with attributions (NCSA, Verizon DBIR, IBM) but no verifiable primary study links.
- **Root cause:** Common cybersecurity marketing statistics copied during initial content creation without verifying primary sources.
- **Resolution:** All three statistics removed and replaced with qualitative, defensible language (e.g., "Verizon DBIR consistently finds that the majority of breaches involve a human element"). Subagent also found and fixed bonus instances in cyber-insurance-requirements and password-mistakes posts.
- **Files affected:** what-is-smb-cybersecurity-compliance.astro, the-true-cost-of-a-breach-for-smbs-and-how-to-avoid-one.md, how-to-provide-proof-of-cybersecurity-training-for-insurance-renewals.md, mfa-myths-busted-what-multi-factor-authentication-really-does.md, cyber-insurance-requirements-small-business-complete-guide.md, top-5-password-mistakes-small-businesses-still-make-in-2025.md
- **Prevention:** AGENTS.md rule added: "Never use recycled cybersecurity statistics without a verifiable primary source."

### FIX -- Industry page categorical claims softened
- **Date:** 2026-08-07
- **Symptom:** Accountants page: "Article 39.1(b) specifically requires documented security awareness training for all staff." Law firms: "privilege-preservation requirement" (framed as legal obligation), "satisfy SRA, Law Society, and cyber insurance requirements" (categorical). Healthcare: "zero patient data exposure" (absolutist).
- **Root cause:** Marketing copy overstated the product's compliance guarantees on industry-specific pages.
- **Resolution:** Accountants: all GDPR claims softened to "obligations around staff security awareness". Law firms: "privilege-preservation requirement" → "supports ethical obligations around client confidentiality"; "satisfy" → "support documentation expectations". Healthcare: "zero patient data exposure" → "no patient data uploaded to external servers" (factually demonstrable).
- **Files affected:** cybersecurity-compliance-accountants.astro, cybersecurity-compliance-law-firms.astro, cybersecurity-compliance-healthcare.astro
- **Prevention:** Existing AGENTS.md rules cover this pattern (no bare compliance assertions, no audit guarantees).

### FIX -- PDF/editable template contradiction (P0)
- **Date:** 2026-08-07
- **Symptom:** kits.astro displayed "Customizable" badges and "just fill in your company details" language; two blog posts claimed "Customizable Word template with fill-in-the-blank sections"; licensing/terms said "edit and customize". But kits are PDF-only.
- **Root cause:** Marketing copy written aspirationally before product format was finalized. FAQ on kits.astro honestly said "delivered as PDF documents" — but badges and other pages contradicted this.
- **Resolution:** Changed all "Customizable" → "Print-Ready", "fill in" → "reference the templates", "edit and customize" → "print, reference, and adapt", "Customizable Word template" → "Professional PDF template ready to reference and implement". Updated productContext.md, licensing.astro, terms.astro, kits.astro, and 6 blog posts.
- **Files affected:** kits.astro, licensing.astro, terms.astro, faq.astro, productContext.md, acceptable-use-policy-template-small-business.md, remote-work-policy-template-small-business.md, incident-response-plan-template-small-business.md, what-documents-do-i-need-for-cyber-insurance-renewal.md, cybersecurity-documentation-for-insurance-renewals.md, ftc-safeguards-rule-small-business-compliance.md
- **Prevention:** Add AGENTS.md rule: never describe kits as "editable" or "customizable" unless .docx files are actually included.

### FIX -- Competitor pricing removed (P0)
- **Date:** 2026-08-07
- **Symptom:** Homepage, kits page, no-subscription page, and llms-full.txt cited KnowBe4 at $18/user/month and Wizer at $3/user/month. These figures appeared inflated vs current published rates.
- **Root cause:** Pricing was sourced at initial site build and never re-verified.
- **Resolution:** Replaced all named-competitor pricing tables with structural comparisons (one-time vs recurring SaaS) without specific dollar amounts. Removed KnowBe4, Wizer, and Proofpoint SAT names entirely.
- **Files affected:** index.astro, kits.astro, cybersecurity-training-no-subscription.astro, free-cyber-security-training.astro, llms-full.txt
- **Prevention:** Never cite specific competitor dollar amounts. Use structural differentiators instead.

### FIX -- ISO 27001 references updated to 2022 standard (P1)
- **Date:** 2026-08-07
- **Symptom:** 74 occurrences across 26 files referenced "ISO27001 Clause 7.2.2" — a clause number from the older ISO 27001 structure.
- **Root cause:** References written against pre-2022 standard and never updated.
- **Resolution:** Mapped all clause references to ISO/IEC 27001:2022: Clause 7.2.2 → (7.2, 7.3, A.6.3), Clause 9.4.3 → (A.5.17), Clause A.16 → (A.5.24–5.28). Updated blog posts, static pages, schemas, llms.txt, and llms-full.txt.
- **Files affected:** 10 blog posts, about.astro, faq.astro, kits.astro, index.astro, free-cyber-security-training.astro, cybersecurity-training-no-subscription.astro, 2026-compliance-checklist.astro, cyber-insurance-renewal-checklist.astro, pro-cybersecurity-kit.astro, llms.txt, llms-full.txt
- **Prevention:** Review standards references annually or when a new edition is published.

### FIX -- NIST CSF 2.0 function count corrected (P1)
- **Date:** 2026-08-07
- **Symptom:** cybersecurity-training-no-subscription.astro said "five core functions" but NIST CSF 2.0 has six (Govern was added in 2.0).
- **Root cause:** Copy written against CSF 1.1 (5 functions) not updated for CSF 2.0.
- **Resolution:** Changed "five" → "six" and added "Govern" to the function list.
- **Files affected:** cybersecurity-training-no-subscription.astro
- **Prevention:** Verify framework version details against primary sources when referencing.

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

### DECISION -- Remove obsolete tag consolidation redirects
- **Date:** 2026-07-20
- **Context:** GSC flagged "Page with redirect" as a new not-indexed reason (Jul 3, 2026). Investigation found 270 old tag→core tag 301 redirects from the Feb 2026 tag consolidation were the primary source. After 5 months, Google had fully processed the 301 signal, but was still discovering and crawling the old tag URLs, inflating the not-indexed count.
- **Options considered:** (A) Remove tag redirects, (B) Block via robots.txt Disallow, (C) Both, (D) Leave as-is
- **Chosen:** (A) Remove tag redirects
- **Rationale:** After 5 months of 301 signaling, the consolidation is fully processed. Old tag URLs aren't linked from the site or sitemap. Removing them immediately stops Google from crawling them. robots.txt Disallow would be slower to take effect and doesn't remove the redirect processing overhead on Netlify.
- **Trade-offs:** If someone bookmarked an old tag URL like /tags/ransomware/ they'll get a 404 instead of a redirect. Acceptable risk — tag pages have no external link value and were noindex to begin with.

### DONE -- Remove 270 tag redirects from _redirects (SESSION-002)
- **Date:** 2026-07-20
- **Summary:** Removed all 270 tag consolidation 301 redirects. Redirect count reduced from 345 to 75.
- **Files created/modified:** `public/_redirects`
- **Testing:** `npx astro build` — 73 pages, 0 errors. Verified remaining redirects (trailing-slash, deleted-page, sitemap alias) intact.
- **Notes:** Remaining 75 redirects serve active structural purposes and should be kept.

### DONE -- Purge personal email and machine hostname from git history (SESSION-002)
- **Date:** 2026-07-20
- **Summary:** Rewrote entire git history (279 commits) to replace 8 commits authored by `owen.crowley@dell.com` (6) and `root@lcvt1029.hop.lab.emc.com` (2) with `SMBCyberHub <info@smbcyberhub.com>`. Used `git filter-repo --mailmap` for a clean rewrite. No files contained the personal email — issue was purely in commit metadata.
- **Files created/modified:** Git history rewritten (all 279 commits now authored by `SMBCyberHub <info@smbcyberhub.com>`)
- **Testing:** Verified: `git log --all --format='%ae' | sort -u` returns only `info@smbcyberhub.com`. Zero matches for `owen`, `dell.com`, or `lcvt1029` in any commit field.
- **Notes:** Force-pushed to origin. Netlify auto-deploy triggered. This was a mandatory identity cleanup per AGENTS.md Author & Identity Rules.
