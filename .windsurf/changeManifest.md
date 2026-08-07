# Change Manifest

### 2026-08-07 -- SESSION-003b: Second-pass fixes from fresh live-site re-audit

| Action | File | Reason |
|--------|------|--------|
| MODIFIED | `src/pages/2026-compliance-checklist.astro` | Fixed GDPR 39.1(b) framing: "meet requirements" → "support obligations"; "requirement" → "supports obligations"; expanded DPO context |
| MODIFIED | `src/pages/what-is-smb-cybersecurity-compliance.astro` | Fixed GDPR 39.1(b) "mandates" → "includes obligations"; replaced 3 recycled statistics with defensible language; fixed FAQ schema |
| MODIFIED | `src/pages/cybersecurity-compliance-accountants.astro` | Softened 5 GDPR Article 39 claims; "require" → "include obligations"; expanded DPO context |
| MODIFIED | `src/pages/cybersecurity-compliance-law-firms.astro` | "privilege-preservation requirement" → "supports ethical obligations"; "satisfy" → "support documentation expectations" |
| MODIFIED | `src/pages/cybersecurity-compliance-healthcare.astro` | "zero patient data exposure" → "no patient data uploaded to external servers" |
| MODIFIED | `src/pages/kits.astro` | "Aligned with GDPR Article 39.1(b)" → "Supports GDPR staff-training obligations" (2 instances) |
| MODIFIED | `src/pages/free-cyber-security-training.astro` | "GDPR Article 39.1(b) and ISO 27001 training requirements" → "GDPR staff-training obligations and ISO 27001:2022 awareness requirements" |
| MODIFIED | `src/pages/cyber-insurance-renewal-checklist.astro` | "everything your insurer expects" → "key documentation insurers typically request" |
| MODIFIED | `src/pages/index.astro` | "every document your insurer expects" → "documentation insurers commonly request" |
| MODIFIED | `src/content/posts/the-true-cost-of-a-breach-for-smbs-and-how-to-avoid-one.md` | Removed "60% close" (2x) and "95% human error" (2x) recycled stats |
| MODIFIED | `src/content/posts/how-to-provide-proof-of-cybersecurity-training-for-insurance-renewals.md` | Removed "95% of cyber attacks" recycled stat |
| MODIFIED | `src/content/posts/mfa-myths-busted-what-multi-factor-authentication-really-does.md` | Removed "43% target" and "60% close" recycled stats (3 edits) |
| MODIFIED | `src/content/posts/cyber-insurance-requirements-small-business-complete-guide.md` | Removed "95% of breaches involve human error" recycled stat |
| MODIFIED | `src/content/posts/top-5-password-mistakes-small-businesses-still-make-in-2025.md` | Removed "60% of SMBs still don't use MFA" recycled stat |
| MODIFIED | `src/content/posts/audit-ready-in-under-an-hour-a-cyber-hygiene-checklist.md` | Fixed meta description "audit-ready in under 60 minutes"; fixed GDPR link text |
| MODIFIED | `public/llms-full.txt` | Fixed GDPR FAQ: "compliant" → "aligned"; "training requirements" → "staff-training obligations" |
| MODIFIED | `AGENTS.md` | Added 2 new rules: GDPR 39.1(b) framing, recycled statistics |
| MODIFIED | `.windsurf/sessionLog.md` | Added SESSION-003b addendum |
| MODIFIED | `.windsurf/decisionLog.md` | Added DECISION + 2 AHA + 3 FIX entries for SESSION-003b |
| MODIFIED | `.windsurf/changeManifest.md` | This file |
| MODIFIED | `.windsurf/activeContext.md` | Updated to DEPLOYED state with SESSION-003b summary |
| MODIFIED | `memory-bank/progress.md` | Added SESSION-003b section |

### 2026-08-07 -- SESSION-003: Site-wide accuracy and compliance audit remediation

| Action | File | Reason |
|--------|------|--------|
| MODIFIED | `src/pages/kits.astro` | Removed "Customizable" badges → "Print-Ready"; removed competitor pricing table; updated ISO refs; updated FAQ question |
| MODIFIED | `src/pages/index.astro` | Removed competitor pricing table → structural comparison; updated ISO schema refs |
| MODIFIED | `src/pages/cybersecurity-training-no-subscription.astro` | Removed competitor pricing; fixed NIST "five" → "six" functions; updated ISO ref |
| MODIFIED | `src/pages/free-cyber-security-training.astro` | Removed competitor names from comparison; fixed "Insurer-compliant" → aligned language; updated ISO refs |
| MODIFIED | `src/pages/about.astro` | Updated ISO refs to 2022; fixed CISSP plural → singular |
| MODIFIED | `src/pages/privacy.astro` | Removed Buttondown reference; standardized analytics language; removed "behavioral analytics" claim |
| MODIFIED | `src/pages/terms.astro` | Changed "no trackers" → "cookie-free analytics only"; "edited" → "referenced" |
| MODIFIED | `src/pages/blog.astro` | Removed "Updated monthly" claim |
| MODIFIED | `src/pages/licensing.astro` | Changed "edit and customize" → "print, reference, and adapt" |
| MODIFIED | `src/pages/faq.astro` | Updated ISO refs to 2022 |
| MODIFIED | `src/pages/philosophy.astro` | Fixed CISSP plural; changed GDPR "compliance" → "alignment" |
| MODIFIED | `src/pages/2026-compliance-checklist.astro` | Updated ISO refs; fixed GDPR bare "compliance" |
| MODIFIED | `src/pages/cyber-insurance-renewal-checklist.astro` | Softened "Everything your insurer requires"; fixed GDPR bare "compliance"; updated ISO ref |
| MODIFIED | `src/pages/pro-cybersecurity-kit.astro` | Updated ISO ref |
| MODIFIED | `src/pages/tags/[tag].astro` | Fixed GDPR "compliance resources" → "alignment resources" |
| MODIFIED | `src/pages/posts/[slug].astro` | Softened insurer CTA language |
| MODIFIED | `src/pages/contact.astro` | No change needed (analytics wording already correct) |
| MODIFIED | `src/layouts/Layout.astro` | Fixed CISSP plural → singular; changed "No tracking" → "Cookie-free analytics" in footer |
| MODIFIED | `public/llms.txt` | Updated ISO ref to 2022 |
| MODIFIED | `public/llms-full.txt` | Updated ISO ref; removed competitor pricing sections |
| MODIFIED | `memory-bank/productContext.md` | Changed "Customizable templates" → "Print-ready reference templates" |
| MODIFIED | `src/content/posts/acceptable-use-policy-template-small-business.md` | Removed "Customizable Word template" claim; updated ISO ref |
| MODIFIED | `src/content/posts/remote-work-policy-template-small-business.md` | Removed "Customizable Word template" claim; updated ISO ref |
| MODIFIED | `src/content/posts/incident-response-plan-template-small-business.md` | Changed "customisable" → "ready-to-use"; updated ISO ref |
| MODIFIED | `src/content/posts/what-documents-do-i-need-for-cyber-insurance-renewal.md` | Changed "customizable" → "print-ready" |
| MODIFIED | `src/content/posts/cybersecurity-documentation-for-insurance-renewals.md` | Fixed "fill in" → "reference"; fixed GDPR "compliance" → "alignment" |
| MODIFIED | `src/content/posts/ftc-safeguards-rule-small-business-compliance.md` | Fixed "fill in" → "reference" |
| MODIFIED | `src/content/posts/what-insurers-expect-cybersecurity-training-records.md` | Softened insurer claims; added fictional disclaimers to case studies |
| MODIFIED | `src/content/posts/the-true-cost-of-a-breach-for-smbs-and-how-to-avoid-one.md` | Added fictional disclaimer to case study; updated ISO ref |
| MODIFIED | `src/content/posts/why-your-5-person-company-doesnt-need-a-200-month-cybersecurity-subscription.md` | Renamed "Case Study" → "Illustrative Example"; added fictional disclaimer |
| MODIFIED | 10 blog posts | Bulk ISO 27001 Clause 7.2.2 → ISO/IEC 27001:2022 (7.2, 7.3, A.6.3) |
| MODIFIED | `.windsurf/sessionLog.md` | Added SESSION-003 entry |
| MODIFIED | `.windsurf/decisionLog.md` | Added DECISION + 4 FIX entries |
| MODIFIED | `.windsurf/changeManifest.md` | This file |
| MODIFIED | `.windsurf/activeContext.md` | Updated current state |

### 2026-06-26 -- SESSION-001: LLM Visibility & Engagement Improvements

| Action | File | Reason |
|--------|------|--------|
| MODIFIED | `public/llms.txt` | Added 12 top blog post URLs and industry guides section for LLM discoverability |
| MODIFIED | `public/llms-full.txt` | Added complete blog index (42 posts organized by category with descriptions) |

### 2026-07-20 -- SESSION-002: GDPR breach notification post refresh for indexing

| Action | File | Reason |
|--------|------|--------|
| MODIFIED | `src/content/posts/gdpr-breach-notification-procedures-small-business.md` | Content refresh: added FAQPage schema, 2025-2026 enforcement examples, practical SMB scenario, strengthened internal links, updated dateModified to 2026-07-20 |
| MODIFIED | `public/_redirects` | Removed 270 obsolete tag consolidation redirects (345→75 rules). Addresses GSC "Page with redirect" not-indexed reason. |
| REWRITTEN | Git history (279 commits) | Replaced 8 commits with personal email/machine hostname to `SMBCyberHub <info@smbcyberhub.com>` via `git filter-repo --mailmap`. Force-pushed. |
| MODIFIED | `src/content/posts/incident-response-plan-template-small-business.md` | Added HowTo JSON-LD schema (4 steps) + updated dateModified to 2026-06-26 |
| MODIFIED | `src/content/posts/acceptable-use-policy-template-small-business.md` | Added HowTo JSON-LD schema (5 steps) + updated dateModified to 2026-06-26 |
| MODIFIED | `src/pages/index.astro` | Added above-the-fold value summary grid (4 cards) in hero section |
| MODIFIED | `src/pages/free-cyber-security-training.astro` | Added kit contents checklist before download CTA in hero section |