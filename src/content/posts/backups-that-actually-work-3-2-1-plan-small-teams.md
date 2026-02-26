---
title: "Backups That Actually Work: The 3-2-1 Plan for Small Teams (No Jargon)"
description: "A plain-English guide to 3-2-1 backups for small teams: what to back up, how often, and how to test restores so you can recover fast from accidents or ransomware."
date: 2025-09-09
tags: ["backups", "ransomware", "business continuity"]
ogImage: "/images/smbcyberhub-logo.webp"
excerpt: "A simple, reliable backup plan you can set up this week—without extra software or jargon."
featured: false
canonical: "https://smbcyberhub.com/posts/backups-that-actually-work-3-2-1-plan-small-teams/"
---

If a laptop dies, a file is deleted by mistake, or ransomware hits, a good backup is the difference between a small hiccup and a very bad week. This plain-English guide shows small teams how to set up **3-2-1 backups** that actually restore when you need them.

> Goal: quick recovery, minimal fuss, no vendor lock-in.

## ✅ The 3-2-1 Rule (in 60 seconds)

- **3 copies** of your important data (1 primary + 2 backups)  
- **2 different types of storage** (e.g., cloud + external drive/NAS)  
- **1 copy off-site and/or offline/immutable** (can’t be changed by ransomware)

This isn’t theory—it's a widely used pattern for resilience. For neutral guidance, see the UK NCSC Small Business Guide on backups (search “NCSC Small Business Guide”). 

## What to Back Up (Priorities First)

1) **Shared work documents**  
   Cloud drives (e.g., Google Drive/Microsoft 365), project folders, contracts, HR, finance. If it’s needed to do business or meet legal obligations, back it up.

2) **Email, calendars, and chats you rely on**  
   Export or use built-in retention/backup features. Aim to preserve decisions, approvals, and client history.

3) **Accounting and customer records**  
   Keep secure exports from your finance/CRM tools on a schedule (e.g., monthly, plus year-end).

4) **Web and marketing assets**  
   Website content, brand files, product images—store a clean copy outside your CMS.

5) **Device files that aren’t in the cloud**  
   Laptops/desktops that store working files locally still need a backup policy.

## How Often? Use RPO/RTO to Decide

- **RPO (Recovery Point Objective)** = how much work you can afford to lose.  
  - Most small teams choose **daily** for docs/email; **weekly** for big archives.
- **RTO (Recovery Time Objective)** = how fast you need to be back.  
  - Keep at least one **fast local** copy for quick restores (minutes), plus a **cloud/off-site** copy for disasters.

**Simple schedule that works:**  
- Daily: incremental cloud backup/sync of active folders  
- Weekly: local image or snapshot (external drive/NAS)  
- Monthly: off-site/offline copy with retention (e.g., object storage with versioning/immutability)

## Make It Ransomware-Resilient

- **Immutable/offline copy:** use storage features that prevent changes for a set time, or keep a physically disconnected drive after the backup finishes.  
- **Separate credentials:** backup target should **not** reuse everyday admin accounts.  
- **Versioning/retention:** keep multiple versions so you can roll back to a clean point.

## The Most Skipped Step: Test Restores

Backups aren’t “real” until you’ve restored from them.

- **Monthly 5-minute test:** pick one file, restore it from each location.  
- **Quarterly drill (15–20 min):** restore a whole folder (or a small site/db export) and confirm it opens/works.  
- **Log it:** date, source, time taken, result. This helps with insurance and client audits.

## A Copy-Paste Starter Blueprint

**This week**
- Choose folders to protect and turn on versioning.  
- Set up a daily cloud backup/sync for those folders.  
- Create a weekly local image/snapshot to an encrypted external drive or NAS.

**This month**
- Add an **off-site/offline** copy with retention/immutability.  
- Document RPO/RTO targets and where to find restores.

**Quarterly**
- Run a restore drill; rotate any long-retention media; review who has access.

## Quick Answers

**Do we need a special backup app?**  
Not always. Many teams start with built-in exports/versioning + a reliable cloud storage bucket and an encrypted external drive/NAS. Add tooling later if you need scheduling/central reporting.

**Are cloud copies enough?**  
Not by themselves. Keep a second, different-type copy (e.g., local image) and one off-site/offline/immutable copy to cover ransomware and account lockouts.

**How long should we keep backups?**  
Common: 30–90 days for everyday work; 7 years for finance/tax (follow your local rules and contracts).

---

## 📎 Internal Reference (for fast audit wins)
Backing up is one pillar of basic cyber hygiene. If you're formalising your checklist, see **[Audit-Ready in Under an Hour: A Cyber Hygiene Checklist](/posts/audit-ready-in-under-an-hour-a-cyber-hygiene-checklist/)** for simple password/MFA and device steps that pair well with this plan. Our [cybersecurity compliance kits](/kits/) include backup policy templates and audit-ready checklists you can use straight away.

---

## 🎁 Download Your Free Cyber Security Training Kit
Need a ready-to-use checklist and short staff training that non-technical teams actually read?  
👉 **[Download the Free Cyber Security Training Kit](https://smbcyberhub.com/free-cyber-security-training/?utm_source=blog&utm_medium=cta&utm_campaign=backups_321_post)**

---

**Related post:**  
If you ever face ransomware or an account takeover, you’ll be glad you set this up. Read **[What Happens After a Phishing Click? (And What You Should Do)](/posts/what-happens-after-a-phishing-click-and-what-you-should-do/)** next.

