---
title: "Stop Fake Emails: Spoofing vs Lookalike Domains (Simple Guide for Small Teams)"
description: "Learn the difference between spoofed and lookalike emails—and follow a 7-step playbook to block invoice fraud and fake sender tricks."
date: 2025-10-28
tags: ["email security", "phishing", "dmarc", "small business"]
ogImage: "/assets/og/stop-fake-emails-spoofing-lookalikes.png"
excerpt: "A practical, non-technical guide to stop fake sender emails fast—with DMARC basics, domain hygiene, and a verify-before-pay rule."
featured: false
canonical: "https://smbcyberhub.com/posts/stop-fake-emails-spoofing-lookalikes"
---

Fake invoices. “CEO” wire requests. Supplier bank-detail changes. Most start with a fake sender. Here’s a simple guide to the two most common tricks—and a small-team playbook to block them fast.

## What’s the difference?

**Email spoofing (your domain is forged).** Attackers send mail that pretends to be `you@yourcompany.com`. You stop this with **SPF, DKIM, and DMARC**—standards that tell receiving mail servers which senders are legit and how to handle fakes.

**Lookalike domains (a cousin domain is used).** Attackers register `yourcornpany.com` or `your-company.co` and email from there. Your domain settings can’t block that, so you reduce risk with **people/process controls** (visual checks, allow-lists, banners) and **basic domain hygiene** (locks, monitoring, buying obvious variants).

## A 7-Step Playbook for Small Teams

### 1) Turn on SPF, DKIM, and DMARC (with monitoring)
- Publish **SPF** for the services that send on your behalf (Microsoft 365/Google Workspace, marketing platform, helpdesk).
- Enable **DKIM** signing in each service.
- Add **DMARC** with `p=quarantine` while you fix gaps, then move to `p=reject` once aligned.
- Review **DMARC aggregate reports** to catch misconfigured senders.  
External reference: [DMARC overview](https://dmarc.org/overview/)

### 2) Lock down your domain & DNS
- Turn on **registrar lock** and **MFA** on your domain registrar account.
- Limit who can change DNS. Document where SPF/DKIM/DMARC live so updates aren’t guesswork.

### 3) Make the real address visible
- Configure mail clients to show the **full sender address**, not just the display name.
- Add an **External sender** banner for messages from outside your domain.

### 4) Reduce lookalike confusion
- If affordable, buy the obvious **typo domains** (`.co`, hyphen/no-hyphen, plural/singular) and redirect to your real site.
- Ask your email security tool to **flag domains similar** to yours.

### 5) Tighten who can send “as you”
- In Microsoft 365/Google Workspace, restrict who can **send-as** shared mailboxes (e.g., `billing@`, `sales@`).
- Remove **legacy SMTP** senders you don’t use. Keep an **approved senders list** per mailbox.

### 6) Add a “verify-before-pay” rule
For bank-detail changes, urgent payments, or gift-card requests, **call a saved number** (not one in the email) to confirm.  
**No exceptions:** email alone is never enough for money movement.

### 7) Teach a 10-second check
- *Was I expecting this?*  
- *Is the domain exact?* (read it out loud)  
- Hover links before clicking; report anything odd to the shared security inbox.

## Quick FAQs

**Will DMARC stop all fake emails?**  
No—DMARC blocks direct spoofing of your domain. Attackers can still use lookalike domains, so keep the process and training steps above.

**Do we need a fancy tool to start?**  
Not to begin. Most wins come from correctly setting SPF/DKIM/DMARC, turning on external banners, and enforcing a callback rule for money-related requests.

## 🎁 Download Your Free Cyber Security Training Kit
Need ready-to-use checklists and a quick staff refresher?  
👉 [Download the Free Cyber Security Training Kit](https://smbcyberhub.com/free-cyber-security-training/?utm_source=blog&utm_medium=cta&utm_campaign=anti-spoofing_post)

---

**Related post:**  
Read **[How Phishing Actually Works: A Simple Breakdown for Small Teams](/posts/how-phishing-actually-works-a-simple-breakdown-for-small-teams)** next.

