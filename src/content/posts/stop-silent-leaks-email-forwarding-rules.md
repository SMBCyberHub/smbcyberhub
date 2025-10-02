---
title: "Stop Silent Leaks: Check Email Forwarding Rules in 10 Minutes"
description: "A quick, non-technical walkthrough to find and remove risky auto-forwarding and inbox rules that leak emails outside your business."
date: 2025-10-02
tags: ["email security", "small business", "BEC", "Gmail", "Microsoft 365"]
ogImage: "/assets/og/stop-silent-leaks-email-forwarding-rules.png"
excerpt: "Attackers love silent auto-forwarding. This 10-minute check finds and fixes risky inbox rules in Gmail and Microsoft 365."
featured: false
canonical: "https://smbcyberhub.com/posts/stop-silent-leaks-email-forwarding-rules-in-10-minutes"
---

Email auto-forwarding is a favourite trick in invoice fraud and account takeovers. One sneaky rule can copy quotes, invoices, and client emails to an attacker for weeks—without anyone noticing. Good news: a **10-minute** check closes most gaps.

> **Bottom line:** Never rely on email alone for money moves—and don’t let forwarding rules run in the dark.

## ✅ The 10-Minute Forwarding Safety Check

### 1) Block external auto-forwarding (org-wide)
- **Google Workspace:** Admin console → Apps → Google Workspace → Gmail → *Routing/Forwarding* → **Disable automatic forwarding to external** (allow exceptions only for a shared archive, if needed).
- **Microsoft 365/Exchange:** Exchange Admin Center → Mail flow → Remote domains → **Disable automatic forwarding** to external; or use a transport rule to block external auto-forwarding with a documented allow-list.

> Tip: If your accountant or shared archive truly needs it, allow **one** approved destination and review it quarterly.

### 2) Hunt for suspicious inbox rules
Ask your IT admin (or follow your platform’s guide) to list rules that:
- **Forward/redirect** to addresses **outside your domain**
- **Delete + forward** or **mark as read + move** (classic “hide the reply” trick)
- Target **finance**, **HR**, **owner/CEO**, or **shared** mailboxes first

Remove anything unexpected and document what changed.

### 3) Turn on alerts for new rules
- **Workspace:** Enable alerting for *Email forwarding enabled* and *Rule created/changed* (Gmail logs).
- **Microsoft 365:** Enable *Creation of forwarding/redirect rules* alerts in Defender/Unified Audit Log. Send alerts to a shared security mailbox.

### 4) Disable legacy access you don’t use
Turn off **POP/IMAP** and **app passwords** for regular users. If someone genuinely needs them (e.g., a scanner), tie them to a dedicated, least-privilege account and review quarterly.

### 5) Add a simple team rule
“If a supplier changes bank details or asks you to pay a new account, **call back on a known number**—never rely on email only.” (This rule stops most invoice-forwarding scams from paying off.)

---

## 🚩 Red Flags (Treat as Stop Signs)
- New forwarding to **free mail** (e.g., outlook.com, gmail.com)  
- Rules that include **delete**, **move to archive**, or **mark as read**  
- “You have new secure messages—click to read” followed by new rules appearing  
- Vendor requests for **urgent** payment changes (pair this with a callback)

**Why this matters:** In Business Email Compromise (BEC), attackers often add forwarding or hide-and-move rules to quietly watch and nudge payment threads. Simple rule hygiene removes that advantage.  
External reference: https://learn.microsoft.com/en-us/defender-office-365/anti-phishing-protection-about (overview of BEC tactics & protections)

---

## If You Suspect a Leak (Do These Now)
1) **Remove rules** you didn’t create; screenshot first.  
2) **Sign out everywhere**, **reset password**, and **require MFA re-registration**.  
4) **Review sent mail & audit logs** for the last 30–60 days.  
5) For finance threads, **switch to phone verification** before releasing any payment.

---

## Quick FAQs

**Is internal forwarding safe?**  
Safer, but still review it. Forward only to shared/team mailboxes with clear owners.

**We’re a tiny team—who does the checks?**  
Make it part of a **monthly 15-minute** routine: owner + bookkeeper review rules on finance, HR, and shared addresses.

---

## 🎁 Download Your Free Cyber Security Training Kit
Need ready-to-use checklists and short staff training slides?  
👉 [Download the Free Cyber Security Training Kit](https://smbcyberhub.com/free-cyber-security-training/?utm_source=blog&utm_medium=cta&utm_campaign=forwarding_rules)

---

**Related post:**  
Read **[How to Spot Social Engineering in Messages and Meetings](/posts/how-to-spot-social-engineering-in-messages-and-meetings)** next.

