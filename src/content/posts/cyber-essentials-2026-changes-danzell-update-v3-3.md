---
title: "Cyber Essentials v3.3: 2026 Changes Explained"
description: "Cyber Essentials v3.3 (Danzell) is effective April 2026. Cloud services in scope, FIDO2 passwordless, 14-day patching, and updated password guidance explained."
date: 2026-03-24
tags: ["compliance"]
ogImage: "/images/smbcyberhub-logo.webp"
excerpt: "The NCSC's Cyber Essentials v3.3 (Danzell) update takes effect April 2026. Here's what changed, what it means for small businesses, and what you need to do."
featured: true
canonical: "https://smbcyberhub.com/posts/cyber-essentials-2026-changes-danzell-update-v3-3/"
dateModified: 2026-03-24
---

<div class="bg-gradient-to-r from-blue-50 to-emerald-50 border-l-4 border-blue-500 p-6 mb-8 rounded-lg">

### TL;DR Summary

**Cyber Essentials v3.3 (known in the industry as the Danzell update) is effective 26 April 2026.** The six changes listed in "What's new": a formal cloud services definition, FIDO2 added to passwordless authentication, cloud services can no longer be excluded from scope, the Software Security Code of Practice is introduced, "untrusted connections" is removed from scope criteria, and backup guidance is strengthened. All five technical controls remain: Firewalls, Secure Configuration, Security Update Management, User Access Control, and Malware Protection.

**Important:** Cyber Essentials tests technical controls on your IT infrastructure. Training kits and documentation alone won't pass the assessment — but they address the broader compliance picture that CE sits within.

</div>

## What Is Cyber Essentials?

Cyber Essentials is a UK Government-backed certification scheme, managed by the NCSC (National Cyber Security Centre). It helps organisations protect themselves against the most common cyber attacks by implementing five technical controls.

There are two levels:

- **Cyber Essentials** — self-assessment questionnaire verified by a Certification Body
- **Cyber Essentials Plus** — includes hands-on technical verification by an external assessor

The scheme is widely recognised by UK insurers, government contracts (mandatory for many), and supply chain partners as a baseline of cyber hygiene.

---

## What's New in v3.3?

Version 3.3 (known in the industry as the Danzell update) is the latest revision of the Cyber Essentials Requirements for IT Infrastructure. The document's "What's new" section lists six changes:

### 1. Cloud Services Formally Defined

**What changed:** v3.3 provides a formal definition of "cloud service" for the first time.

**The definition:** An on-demand, scalable service, hosted on shared infrastructure, accessible via the internet, accessed via an account, and storing or processing data for your organisation.

**What this means for SMBs:** If you use Microsoft 365, Google Workspace, Dropbox, Xero, or any other cloud tool for business, it now has a clear definition in the CE scheme. There's no ambiguity about what counts.

### 2. Cloud Services Cannot Be Excluded from Scope

**What changed:** v3.3 makes it explicit that cloud services **cannot be excluded from scope**. This was implied before but is now a definitive statement.

**What this means for SMBs:** You can't carve out cloud services from your CE assessment. You're responsible for ensuring the User Access Control requirements (including MFA) are met on every cloud service you use for business.

### 3. Passwordless Authentication Now Includes FIDO2

**What changed:** The definition of passwordless authentication has been updated to explicitly include FIDO2 authenticators (passkeys). FIDO2 authenticators are now formally recognised as satisfying MFA because user authentication is performed during the process.

**What this means for SMBs:** If you're using passkeys (e.g., Windows Hello, Apple passkeys, YubiKeys with FIDO2), these now clearly count toward your MFA requirement. This is good news — passkeys are more secure and easier to use than traditional passwords plus SMS codes.

### 4. Software Security Code of Practice Introduced

**What changed:** The software development section now references the Software Security Code of Practice for organisations building or customising web applications.

**What this means for SMBs:** Most small businesses don't develop their own software, so this won't directly affect you. But if you commission bespoke web applications, you should ask your developer whether they follow the Code of Practice.

### 5. "Untrusted Connections" Removed from Scope Criteria

**What changed:** The scope criteria no longer refers to "untrusted connections." Instead, the scope is defined by whether devices can accept incoming connections from internet-connected devices, establish outbound connections via the internet, or control the flow of data between such devices and the internet.

**What this means for SMBs:** This simplifies scope decisions. The old "untrusted connections" language caused confusion about which networks counted. The new wording is clearer.

### 6. Backup Guidance Strengthened

**What changed:** While backups are still not a formal technical requirement of Cyber Essentials, v3.3 strengthens the recommendation. The document now dedicates a full section to backing up data, recommending automatic backups to cloud storage and safe handling of USB/external drive backups.

**What this means for SMBs:** Even though backups won't be tested in your CE assessment, they're critical. A ransomware attack without backups can end a small business. Treat the NCSC's backup guidance as mandatory in practice, even if it's optional for certification.

### The Five Technical Controls (Unchanged)

The five controls themselves haven't changed:

1. **Firewalls** — protect every in-scope device with a correctly configured firewall
2. **Secure Configuration** — remove defaults, disable unnecessary software, manage device unlocking
3. **Security Update Management** — patch critical/high-risk vulnerabilities (CVSS 7+) within 14 days
4. **User Access Control** — unique accounts, least privilege, MFA on cloud services, separate admin accounts
5. **Malware Protection** — anti-malware software or application allow-listing on all in-scope devices

---

## The Password Rules: What CE v3.3 Actually Says

This is worth calling out because so much password advice online still gets it wrong. Here's what CE v3.3 requires:

### Password Length
- **Minimum 12 characters** with no maximum length restriction, OR
- **Minimum 8 characters** with no maximum length restriction **plus** automatic blocking of common passwords using a deny list

### What's Explicitly Discouraged
- **No enforced regular password expiry** — change passwords only when compromise is known or suspected
- **No enforced complexity requirements** — no mandatory uppercase/lowercase/number/symbol rules

### What's Recommended
- **Three random words** (the NCSC's long-standing guidance) — e.g., "coffeetrainfish"
- **Password managers** — provide staff with a secure way to store unique passwords
- **Education** over enforcement — teach staff to avoid common patterns rather than imposing technical complexity rules

### MFA Requirements
- **MFA must be used for all cloud service accounts** — this is mandatory, not optional
- **MFA should be used for admin accounts** and accounts accessible from the internet
- The password element of MFA must be at least 8 characters
- SMS-based MFA is accepted but alternatives (authenticator apps, hardware keys) are recommended

For a practical guide to fixing password mistakes in your team, see our [password security guide for small businesses](/posts/top-5-password-mistakes-small-businesses-still-make-in-2025/).

---

## What Cyber Essentials Doesn't Cover

It's important to be honest about what CE is and isn't:

**CE tests technical controls.** It checks that your firewalls, configurations, patching, access controls, and malware protection meet the standard. A Certification Body verifies this through a questionnaire (CE) or hands-on testing (CE Plus).

**CE does not test:**
- Staff security awareness training
- Written security policies (acceptable use, data protection, etc.)
- Incident response plans
- Risk assessments
- GDPR compliance documentation
- Cyber insurance readiness documentation

These are all important — and often required by insurers, clients, and GDPR — but they're separate from Cyber Essentials certification.

---

## Where Cyber Essentials Fits in the Bigger Picture

For UK and Irish small businesses, a solid security posture typically involves:

| Layer | What It Covers | Examples |
|-------|---------------|----------|
| **Cyber Essentials** | Technical controls on IT infrastructure | Firewalls, patching, MFA, secure config, malware protection |
| **GDPR Compliance** | Data protection policies and processes | Training records, privacy notices, breach notification procedures |
| **Cyber Insurance** | Financial protection from incidents | Documented policies, MFA evidence, training records, risk assessments |
| **Staff Training** | Human layer of defence | Phishing awareness, password hygiene, incident reporting |
| **Policies & Documentation** | Written procedures and audit trails | ISP, AUP, incident response plan, backup procedures |

Cyber Essentials handles the first layer. The rest requires policies, training, and documentation — which is where frameworks like GDPR and insurer requirements come in.

---

## Do You Need Cyber Essentials?

### You Probably Need It If:
- You bid on **UK government contracts** (mandatory for many central government tenders)
- Your **clients or supply chain partners** require it
- Your **cyber insurer** offers premium discounts for CE certification
- You want a **recognised baseline** to demonstrate cyber hygiene

### You Might Not Need It Yet If:
- You're outside the UK and your clients don't require it
- Your immediate priority is GDPR compliance or cyber insurance readiness
- You have fewer than 5 employees and no cloud services (rare in 2026)

Even if certification isn't your immediate goal, the five technical controls are sensible baseline security for any business.

---

## How to Prepare for Cyber Essentials Certification

### Step 1: Define Your Scope
Identify all devices, software, and cloud services used for business. Remember: cloud services cannot be excluded.

### Step 2: Review the Five Controls
Work through each control — firewalls, secure configuration, patching, user access, malware protection — and identify gaps.

### Step 3: Fix the Gaps
Common fixes for small businesses:
- Enable MFA on all cloud services (Microsoft 365, Google Workspace, accounting software)
- Remove unused accounts and default passwords
- Enable automatic updates on all devices
- Deploy endpoint protection (Windows Defender is acceptable)
- Configure software firewalls on laptops used outside the office

### Step 4: Choose a Certification Body
Select an NCSC-approved Certification Body to assess your organisation. They'll guide you through the self-assessment questionnaire.

### Step 5: Maintain Certification
CE certification is valid for 12 months. Build patching, account reviews, and MFA checks into your regular routine.

---

## What SMBCyberHub Kits Cover (and Don't Cover)

**To be transparent:** Our cybersecurity compliance kits help with the layers around Cyber Essentials — GDPR documentation, staff training, policies, and insurance readiness. They do **not** replace the technical controls needed for CE certification itself.

**Our kits help with:**
- Staff security awareness training (phishing, passwords, MFA, data protection)
- Written security policies (ISP, AUP, remote work, BYOD, incident response)
- Compliance checklists and audit-ready documentation
- Password policy templates aligned with NCSC guidance
- Cyber insurance renewal preparation

**For Cyber Essentials certification**, you'll need to implement the five technical controls on your actual IT infrastructure and work with an approved Certification Body. Our kits complement that process by covering the documentation, training, and policy layers that CE doesn't test but that insurers, clients, and GDPR require.

---

## Key Takeaways

1. **CE v3.3 (Danzell) is effective 26 April 2026** — if you're renewing or applying, use the new requirements
2. **Cloud services are definitively in scope** — no exclusions allowed
3. **FIDO2/passkeys now formally count as MFA** — this simplifies compliance for businesses using modern authentication
4. **Password rules are modernised** — no forced expiry, no complexity rules, 12+ characters or 8+ with deny list, three random words
5. **Backups aren't tested but are strongly recommended** — treat them as essential
6. **CE is one layer of your security posture** — combine with GDPR compliance, staff training, and insurance-ready documentation for complete protection

---

### Your Action Plan
- [ ] **Review CE v3.3** requirements against your current setup
- [ ] **Audit cloud services** — ensure MFA is enabled on every business cloud account
- [ ] **Check patching** — confirm critical/high-risk updates are applied within 14 days
- [ ] **Update password policies** — align with NCSC guidance (no forced expiry, no complexity rules)
- [ ] **Assess broader compliance** — ensure GDPR documentation, training, and policies are current
- [ ] **Consider certification** — [find an approved Certification Body](https://www.ncsc.gov.uk/cyberessentials/overview) if your clients or contracts require it

### Internal Links:
- **[SMB Cybersecurity Compliance Guide 2026](/what-is-smb-cybersecurity-compliance/)** — Full compliance framework comparison including Cyber Essentials
- **[Top 5 Password Mistakes Small Businesses Still Make](/posts/top-5-password-mistakes-small-businesses-still-make-in-2025/)** — NCSC-aligned password guidance
- **[2026 Cyber Insurance Requirements](/posts/cyber-insurance-requirements-small-business-complete-guide/)** — What insurers expect, and how CE fits in
- **[Compare All Cybersecurity Kits](/kits/)** — Training, policies, and documentation for the layers around Cyber Essentials

---

**Estimated Reading Time**: 10 minutes  
**Aligned With**: NCSC Cyber Essentials v3.3 (Danzell), GDPR Article 32, ISO27001  
**Target Audience**: Small business owners, IT managers, compliance leads (UK/Ireland focus)  
**Learning Objectives**: Understand CE v3.3 changes, assess readiness, plan next steps
