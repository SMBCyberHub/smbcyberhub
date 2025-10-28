---
title: "Stop Fake Emails: Spoofing vs Lookalike Domains (Simple Guide for Small Teams)"
description: "Understand the difference between email spoofing and lookalike domains, and use this 7-step playbook to stop fake emails before they reach your team."
date: 2025-10-28
tags: ["email security", "phishing", "small business"]
ogImage: "/assets/og/stop-fake-emails-spoofing-lookalikes.png"
excerpt: "Plain-English steps to block fake sender tricks: SPF, DKIM, DMARC, safer display names, and domain protections that work for small teams."
featured: false
canonical: "https://smbcyberhub.com/posts/stop-fake-emails-spoofing-vs-lookalike-domains"
---

Fake invoices. “CEO” wire requests. Supplier bank-detail changes. Most of these start with a fake sender. Here’s a simple guide to the two most common tricks—spoofing and lookalike domains—and a small-team playbook to block them fast.

What’s the difference?

Email spoofing (your domain is forged).
Attackers send mail that pretends to be from you@yourcompany.com. You stop this with SPF, DKIM, and DMARC—standards that tell receiving mail servers which senders are legit and how to handle fakes.

Lookalike domains (a cousin domain is used).
Attackers register yourcornpany.com or your-company.co and email from there. Your domain settings can’t block that, so you reduce risk with people/process controls (visual checks, allow-lists, banners) and basic domain hygiene (locks, monitoring, buying obvious variants).

A 7-Step Playbook for Small Teams
1) Turn on SPF, DKIM, and DMARC (with monitoring)

Publish SPF for the services that send on your behalf (e.g., Microsoft 365/Google Workspace, marketing platform, helpdesk).

Enable DKIM signing in each service.

Add DMARC with p=quarantine while you fix gaps, then move to p=reject once aligned.

Review DMARC aggregate reports to catch misconfigured senders.
External reference: https://dmarc.org/overview/

2) Lock down your domain & DNS

Enable registrar lock and MFA on your domain registrar account.

Limit who can change DNS. Document where SPF/DKIM/DMARC live so updates aren’t guesswork.

3) Make the real address visible

Configure mail clients to show the full sender address, not just the display name.

Add an “External sender” banner for messages from outside your domain to nudge caution.

4) Reduce lookalike confusion

If affordable, buy the obvious typo domains (.co, hyphen/no-hyphen, plural/singular) and redirect to your real site.

Ask your email security tool to flag domains that closely resemble yours.

5) Tighten who can send “as you”

In Microsoft 365/Google Workspace, restrict who can send as shared mailboxes (e.g., billing@, sales@).

Remove legacy SMTP senders you don’t use. Keep a list of approved senders per mailbox.

6) Add a “verify-before-pay” rule

For bank-detail changes, urgent payments, or gift-card requests, staff must call a saved number (not one in the email) to confirm.

No exceptions: email alone is never enough for money movement.

7) Teach a 10-second check

Was I expecting this?

Is the domain exact? (read it out loud)

Hover links before clicking; report anything odd to the shared security inbox.

Quick FAQs

Will DMARC stop all fake emails?
No—DMARC blocks direct spoofing of your domain. Attackers can still use lookalike domains, so keep the process and training steps above.

Do we need a fancy tool to start?
Not to begin. Most wins come from correctly setting SPF/DKIM/DMARC, turning on external banners, and enforcing a callback rule for money-related requests.

🎁 Download Your Free Cyber Security Training Kit

Need ready-to-use checklists and a quick staff refresher?
👉 Download the Free Cyber Security Training Kit

Related post:
Read How Phishing Actually Works: A Simple Breakdown for Small Teams
 next.
