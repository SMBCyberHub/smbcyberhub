---
title: "When Someone Leaves: A Simple Offboarding Security Checklist for Small Teams"
description: "A plain-English offboarding checklist to remove access, protect data, and stay audit-ready when someone leaves your small team."
date: 2025-07-30
tags: ["offboarding", "access control", "small business"]
ogImage: "/assets/og/offboarding-security-checklist-small-teams.png"
excerpt: "A step-by-step, non-technical offboarding checklist that keeps your data safe and your team compliant."
featured: false
canonical: "https://smbcyberhub.com/posts/when-someone-leaves-offboarding-security-checklist"
---

When someone leaves—whether it’s a resignation, contract end, or dismissal—there’s a short window to cleanly remove access and protect your files. This simple checklist keeps it calm, fast, and audit-ready for small teams.

## ✅ The Offboarding Security Checklist

### 1) Suspend the primary account (don’t delete yet)
Suspending immediately stops access while preserving files, settings, and audit trails. Deleting too early can permanently remove documents or break shared links you still need for handover or legal hold. For general background on insider risk and departures, see CISA’s guidance on insider-threat mitigation (helpful even for small teams).  
External reference: https://www.cisa.gov/insider-threat-mitigation

### 2) Revoke SSO sessions and MFA methods
Kill active sessions in your identity provider (e.g., Google Workspace, Microsoft 365) and remove the user’s MFA devices/recovery codes. This prevents continued access from already-signed-in browsers or apps.

### 3) Transfer ownership of shared assets
Reassign ownership of shared Drives, folders, calendars, docs, and any forms or dashboards. Set a new owner before you remove the account so links and automations don’t break.

### 4) Collect and secure devices
Retrieve laptops, phones, security keys, and access cards. If a device can’t be collected right away, disable it in your endpoint/security tool, then wipe when appropriate. Record serial numbers and the device state for your audit log.

### 5) Rotate shared passwords and API keys
Any credentials that multiple people know (shared mailbox, Wi-Fi, API tokens, admin logins) should be changed. If you’re still using shared passwords at all, add a plan to migrate to a manager and role-based access—our **Audit-Ready checklist** explains quick wins for passwords and MFA.  
<p>
  👉 See also:
  <a href="/posts/audit-ready-in-under-an-hour-a-cyber-hygiene-checklist" class="underline decoration-blue-600 hover:no-underline font-medium">
    Audit-Ready in Under an Hour: A Cyber Hygiene Checklist
  </a>
</p>


### 6) Remove access from vendors and apps
Check your “long tail” of tools: CRM, accounting, email delivery, support desk, code hosting, time-tracking—plus any integrations or API apps granted via OAuth.

### 7) Tidy the mailbox (auto-reply + forward)
Add a short auto-reply (e.g., “This inbox is no longer monitored—please contact finance@smb…”) and set a temporary forward to the team mailbox while you reassign duties. Archive what you need for records.

### 8) BYOD and personal accounts
Remove work accounts from personal phones/tablets (MDM or step-by-step guidance). Revoke app-specific tokens on those devices. If you don’t use MDM, provide the ex-staffer a clear list of “what to remove.”

### 9) Archive chats and docs that matter
Export or label key Slack/Teams threads, decisions, and project docs. Store them in your team’s shared location so new owners have context.

### 10) Close the loop and log it
Confirm with a manager (and HR if relevant) that responsibilities have moved. Record the date/time of each step above; screenshots or admin logs help with insurers and client audits.

---

## Common Questions (Quick Answers)

**How fast should this happen?**  
Ideally within the last working day—suspension first, then the tidy-up steps.

**How long do we keep the email account?**  
Many teams keep an auto-reply and forward for 30–60 days, then remove the mailbox. Follow your retention policy and any legal/contractual requirements.

**What if the person had admin access?**  
Prioritise session/MFA revocation, rotate all shared/admin credentials, and review audit logs for unusual activity in the last 30–60 days.

---

## 🎁 Download Your Free CyberSecurity Training Kit
Need a ready-to-use checklist and other easy training resources?  
👉 [Download the Free Cyber Security Training Kit](https://smbcyberhub.com/free-cyber-security-training/?utm_source=blog&utm_medium=cta&utm_campaign=offboarding_post)

---

**Related post:**  
If you’re preparing for a client review or insurer paperwork, read **[Audit-Ready in Under an Hour: A Cyber Hygiene Checklist](/posts/audit-ready-in-under-an-hour-a-cyber-hygiene-checklist)** next.
