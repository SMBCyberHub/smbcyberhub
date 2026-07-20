# Requirement Traceability

## Requirements Table

| ID | Requirement | Source | Date Added | Status |
|----|-------------|--------|------------|--------|
| REQ-001 | LLM files must include blog content URLs for AI engine discoverability | Google Core Update assessment (P3) | 2026-06-26 | DONE |
| REQ-002 | Template/checklist blog posts should have HowTo structured data | Google Core Update assessment (P3) | 2026-06-26 | DONE |
| REQ-003 | Homepage must communicate product value above the fold | Google Core Update assessment (P4) | 2026-06-26 | DONE |
| REQ-004 | Free training page must show kit contents before download CTA | Google Core Update assessment (P4) | 2026-06-26 | DONE |
| REQ-005 | Fix "Crawled - not indexed" status for GDPR breach notification post | GSC Page Indexing report (validation failed 11 Jul 2026) | 2026-07-20 | DONE |

## Traceability Matrix

| Requirement | Session | Change | Evidence |
|-------------|---------|--------|----------|
| REQ-001 | SESSION-001 | Updated llms.txt and llms-full.txt with blog URLs | Build verified, 73 pages |
| REQ-002 | SESSION-001 | Added HowTo schema to incident-response and acceptable-use posts | Build verified, schema renders in HTML |
| REQ-003 | SESSION-001 | Added 4-card value grid to homepage hero section | Build verified, index.html updated |
| REQ-004 | SESSION-001 | Added kit contents checklist before download CTA | Build verified, free-cyber-security-training/index.html updated |
| REQ-005 | SESSION-002 | Content refresh: FAQPage schema, enforcement examples, practical scenario, dateModified bump | Build verified (73 pages, 0 errors), FAQPage in HTML, sitemap lastmod 2026-07-20 |