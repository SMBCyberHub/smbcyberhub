---
title: "Stop Fake Emails: Spoofing vs Lookalikes"
description: "How email spoofing and lookalike domain attacks work, and a practical playbook to block both. SPF, DKIM, DMARC explained for small business teams."
date: 2025-10-28
tags: ["phishing"]
ogImage: "/images/smbcyberhub-logo.webp"
excerpt: "Fake invoices and CEO wire requests start with a forged sender. Learn the difference between spoofed and lookalike emails, and follow a practical playbook to block both."
featured: false
canonical: "https://smbcyberhub.com/posts/stop-fake-emails-spoofing-lookalikes/"
dateModified: 2026-03-30
---

Fake invoices. "CEO" wire requests. Supplier bank-detail changes. Almost all of these start with a forged sender address — and they work because most small teams have no way to tell a real email from a convincing fake. There are two distinct tricks attackers use, and each requires a different defence.

## Spoofing vs lookalike domains: what is the difference?

These two techniques look similar in your inbox but work completely differently, which is why you need to understand both.

**Email spoofing** means an attacker sends an email that claims to be from your exact domain — `you@yourcompany.com` — without ever having access to your email account. This is possible because the original email protocol (SMTP) was designed in the 1980s with no built-in sender verification. Anyone can put any address in the "From" field, the same way anyone can write any return address on a paper envelope. The email arrives looking exactly like it came from inside your organisation.

**Lookalike domains** (also called cousin domains) are different. The attacker registers a domain that looks almost identical to yours — `yourcornpany.com` (with an "rn" instead of "m"), `yourcompany.co` (different TLD), or `your-company.com` (added hyphen). They then send email from this real, registered domain. Because it is a legitimate domain, your email authentication cannot block it — the attacker's own SPF and DKIM records will pass just fine.

The critical distinction: spoofing can be almost entirely prevented with email authentication (SPF, DKIM, DMARC). Lookalike domains cannot — they require human vigilance and process controls.

## How do I stop someone spoofing my domain?

Set up SPF, DKIM, and DMARC on your domain. Together, these three standards tell receiving email servers how to verify that a message genuinely came from an authorised sender — and what to do if it did not. Once properly configured with a DMARC reject policy, spoofed emails using your domain will be blocked before they reach anyone's inbox.

### SPF: which servers can send as you

SPF (Sender Policy Framework) is a DNS record that lists every server authorised to send email on behalf of your domain. When a receiving server gets an email claiming to be from `yourcompany.com`, it checks your SPF record. If the sending server is not on the list, the email fails SPF.

A typical SPF record for a small business using Google Workspace looks like this:

`v=spf1 include:_spf.google.com ~all`

The `include` directive authorises Google's servers. The `~all` means "soft fail anything else" — in practice, you want to move to `-all` (hard fail) once you are confident you have listed every legitimate sender. Common senders to include: your email provider, your website's contact form, any marketing email service, and any invoicing software that sends email on your behalf.

### DKIM: a digital signature on every email

DKIM (DomainKeys Identified Mail) adds a cryptographic signature to every outgoing email. The receiving server checks this signature against a public key published in your DNS. If the signature matches, the email has not been tampered with and genuinely came from an authorised sender.

Your email provider handles the signing automatically — you just need to publish the public key as a DNS record. Google Workspace, Microsoft 365, and most business email providers have step-by-step guides for this in their admin console.

### DMARC: the enforcement policy

DMARC (Domain-based Message Authentication, Reporting, and Conformance) ties SPF and DKIM together and tells receiving servers what to do when an email fails both checks. Without DMARC, a server might still deliver a spoofed email even though it failed SPF — DMARC makes the policy explicit.

DMARC has three enforcement levels:
- `p=none` — monitor only; no emails blocked (use this to start, so you can see what is happening)
- `p=quarantine` — failed emails go to spam
- `p=reject` — failed emails are blocked entirely

Start with `p=none` and enable DMARC reporting. The reports will show you every server that is sending email using your domain — including legitimate services you may have forgotten to add to SPF. Once the reports are clean, move to `p=quarantine`, then `p=reject`. This gradual approach avoids accidentally blocking your own legitimate emails.

### Implementation in practice

For a small business, the whole process takes an afternoon:

1. **List every service that sends email as your domain** — your email provider, website contact form, invoicing software, marketing tools, CRM.
2. **Create your SPF record** in DNS with all authorised senders.
3. **Enable DKIM signing** in your email provider's admin console and publish the public key in DNS.
4. **Publish a DMARC record** starting with `p=none` and an email address for reports.
5. **Monitor DMARC reports** for 2–4 weeks to catch any legitimate senders you missed.
6. **Tighten the policy** to `p=quarantine` then `p=reject` once reports are clean.

Once you reach `p=reject`, spoofing of your domain is effectively blocked. This protects your clients and suppliers from receiving fake emails that appear to come from you.

## Defending against lookalike domains

SPF, DKIM, and DMARC cannot help you here. A lookalike domain is a real, separately registered domain — the attacker controls it and can set up their own perfectly valid email authentication. The defence has to be human and procedural.

### Register obvious variants of your domain

Buy the common typos and alternative TLDs for your primary domain — `.co`, `.net`, the hyphenated version, common misspellings. Redirect them all to your main site. This is cheap (a few euros per year per domain) and removes the easiest targets. You will not catch every possible variation, but you can cover the most obvious ones.

### Train your team to check the actual sender address

Most email clients display only the sender's name by default, not the full email address. An email from "Sarah Johnson - Accounts" could be from `sarah@yourcompany.com` or `sarah@yourcornpany.com` — and the display name looks identical. Train your team to hover over or click on the sender name to reveal the full address, especially for any email that involves money, credentials, or sensitive data.

Configure your email system to display external sender warnings — both Google Workspace and Microsoft 365 can add a banner to emails from outside your organisation. This simple visual cue catches a surprising number of lookalike attempts.

### Verify financial requests through a separate channel

The most important process control is a [callback verification procedure](/posts/stop-payment-fraud-callback-playbook/) for any email that requests a payment, changes bank details, or asks for sensitive information. Call the person on a known phone number (not one from the suspicious email) and confirm the request verbally. This single control prevents the vast majority of invoice fraud and CEO impersonation attacks, regardless of how convincing the fake email looks.

### Lock down your own domain and DNS

Protect your domain registrar account with MFA and enable registrar lock to prevent unauthorised transfers. Limit who can make DNS changes. If an attacker gains control of your domain, they bypass all your email authentication — this is rare but catastrophic when it happens.

## What to do if you receive a spoofed or lookalike email

1. **Do not reply, click links, or open attachments.** Forward the email to whoever manages your IT or security.
2. **Check the full sender address** — is it your exact domain (spoofing) or a lookalike?
3. **If it is a spoofed email from your domain**, check whether your DMARC policy is set to reject. If not, this is your sign to implement it.
4. **If it is a lookalike domain**, report it to the domain registrar as abuse. Most registrars have an abuse reporting process.
5. **Warn your team and clients** if the fake email was sent to multiple people or to your customers pretending to be you.
6. **If anyone acted on the email** (clicked a link, sent money, entered credentials), follow your [incident response plan](/posts/incident-response-plan-template-small-business/) immediately. For phishing clicks specifically, see [what to do after a phishing click](/posts/what-happens-after-a-phishing-click-and-what-you-should-do/).

## GDPR and compliance obligations

Email forgery is not just a security issue — it is a data protection issue. Under GDPR Article 32, organisations must implement "appropriate technical and organisational measures" to protect personal data. If a spoofed email leads to a data breach because you had no email authentication in place, demonstrating that your measures were "appropriate" becomes very difficult.

SPF, DKIM, and DMARC are free to implement and considered standard practice. Not having them is increasingly seen as negligent by regulators, insurers, and auditors. For UK businesses pursuing Cyber Essentials certification, email security falls under the "secure configuration" control — our [Cyber Essentials v3.3 guide](/posts/cyber-essentials-2026-changes-danzell-update-v3-3/) covers the requirements.

## Key takeaways

- **Spoofing** (forged sender using your domain) is blocked by SPF + DKIM + DMARC. Implement all three and enforce with `p=reject`.
- **Lookalike domains** (similar but different domain) cannot be blocked technically — defend with sender address checks, external email banners, and callback verification for financial requests.
- SPF, DKIM, and DMARC are free, take an afternoon to set up, and protect your clients and suppliers from fake emails bearing your name.
- A [callback verification procedure](/posts/stop-payment-fraud-callback-playbook/) for payment requests is the single most effective control against both attack types.
- Train staff to check the full sender address, not just the display name — especially for emails involving money or sensitive data.

Our [cybersecurity compliance kits](/kits/) include email security policies, phishing awareness training modules, and verification procedure templates to protect your team from spoofing and impersonation attacks.
