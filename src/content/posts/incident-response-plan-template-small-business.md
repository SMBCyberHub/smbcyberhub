---
title: "Incident Response Plan Template 2026"
description: "Free incident response plan template for small businesses. Step-by-step procedures for data breaches, ransomware, and phishing — audit and insurance ready."
date: 2026-03-27
tags: ["compliance"]
ogImage: "/images/smbcyberhub-logo.webp"
excerpt: "A practical incident response plan template designed for small teams. Covers roles, timelines, containment steps, and GDPR notification — ready for audits and insurers."
featured: false
canonical: "https://smbcyberhub.com/posts/incident-response-plan-template-small-business/"
dateModified: 2026-03-27
---

<div class="bg-gradient-to-r from-blue-50 to-emerald-50 border-l-4 border-blue-500 p-6 mb-8 rounded-lg">

### 📋 TL;DR Summary

**Every small business needs a written incident response plan — insurers require it, GDPR expects it, and clients increasingly ask for it.** Your plan should cover four phases: preparation, containment, investigation, and recovery. Assign specific people to specific roles before an incident happens. Keep the plan to 2–4 pages so people actually read it. This template gives you everything you need — customise it in under an hour.

</div>

A data breach, ransomware attack, or compromised account will happen faster than you expect. The difference between a manageable disruption and a business-ending crisis is whether your team knows what to do in the first 60 minutes.

This guide gives you a practical, ready-to-customise incident response plan built for small teams of 1–20 people. No enterprise jargon, no 50-page documents nobody reads.

---

## Why does a small business need an incident response plan?

Three reasons, all of them practical. First, insurers require one — most cyber insurance applications now ask "Do you have a documented incident response plan?" and missing it can mean denied coverage or higher premiums. Second, GDPR requires you to report certain breaches to your supervisory authority within 72 hours, which is impossible to do calmly without a plan. Third, a written plan cuts your average breach cost by up to 50% because your team acts faster and makes fewer mistakes under pressure.

If you want to see the full financial picture of what happens without a plan, read [the true cost of a breach for SMBs and how to avoid one](/posts/the-true-cost-of-a-breach-for-smbs-and-how-to-avoid-one/).

---

## What should an incident response plan actually include?

At minimum, your plan should answer five questions: (1) Who is responsible for what? (2) How do we contain the damage? (3) Who do we notify and when? (4) How do we investigate? (5) How do we recover and prevent recurrence? Everything else is optional detail. Keep the core plan to 2–4 pages.

Below is a template covering each phase.

---

## Phase 1: Preparation (Before Anything Happens)

Preparation is the only phase you can control. Get this right and the rest becomes manageable.

### Assign roles now, not during a crisis

You need three roles filled. In a small team, one person can cover multiple roles — just make sure everyone knows who does what.

**Incident Lead** — the person who makes decisions during the incident. Usually the business owner or operations manager.
- Decides whether to escalate, notify clients, or engage external help
- Has authority to shut down systems if needed

**Technical Contact** — the person who handles devices, accounts, and systems. Could be your IT provider, a technically confident team member, or an external MSP.
- Isolates affected devices
- Resets passwords and revokes access
- Preserves evidence (screenshots, logs)

**Communications Contact** — the person who handles notifications. Often the same person as the Incident Lead in small teams.
- Notifies the supervisory authority if required (GDPR: within 72 hours)
- Notifies affected individuals if required
- Coordinates with your insurer, legal adviser, and any PR support

### Build your contact list

Create a single document with these contacts — keep it printed and stored somewhere accessible (not only on the computer that might be compromised):

- Incident Lead: name, phone, email
- Technical Contact: name, phone, email
- IT provider / MSP emergency line
- Cyber insurance provider: policy number, claims phone number
- Legal adviser: name, phone
- Supervisory authority contact (for GDPR notifications — in Ireland: Data Protection Commission; in UK: ICO)
- Key clients who would need notification

### Keep documentation audit-ready

Insurers and auditors want to see that your plan exists *and* that your team knows about it. Store the plan where everyone can find it, review it annually, and keep a record showing staff have read it. Our [cybersecurity documentation guide for insurance renewals](/posts/cybersecurity-documentation-for-insurance-renewals/) covers exactly what auditors expect.

---

## Phase 2: Containment (First 60 Minutes)

When an incident is detected or reported, the goal is simple: stop the damage from spreading.

### How do you contain a cyber incident quickly?

Follow this sequence — it works for phishing compromises, ransomware, data leaks, and account takeovers:

**Minute 0–5: Confirm and isolate**
- Confirm the report is real (not a false alarm)
- Disconnect the affected device from the network (Wi-Fi off, ethernet unplugged)
- Do NOT power off the device — you may need evidence from memory

**Minute 5–15: Secure accounts**
- Change passwords for any potentially compromised accounts
- Revoke active sessions (most cloud platforms allow this from the admin console)
- Enable or re-verify MFA on affected accounts

**Minute 15–30: Assess scope**
- Determine what data or systems were affected
- Check if other devices or accounts show signs of compromise
- Review recent email forwarding rules — attackers often set these up silently. See our guide on [stopping silent leaks from email forwarding rules](/posts/stop-silent-leaks-email-forwarding-rules/)

**Minute 30–60: Document and escalate**
- Screenshot everything: error messages, suspicious emails, login logs
- Call your IT provider or MSP if the situation is beyond your capability
- Notify your Incident Lead if they are not already involved

For a detailed walkthrough of what happens after a phishing click specifically, see [what happens after a phishing click and what you should do](/posts/what-happens-after-a-phishing-click-and-what-you-should-do/).

---

## Phase 3: Investigation and Notification (Hours 1–72)

Once the immediate bleeding is stopped, you need to understand what happened and decide who to tell.

### What triggers a GDPR breach notification?

Under GDPR Article 33, you must notify your supervisory authority within 72 hours of becoming aware of a personal data breach — unless the breach is unlikely to result in a risk to individuals' rights and freedoms. In practice, if personal data (names, emails, financial details, health information) was exposed, accessed, or lost, you should notify.

You do NOT need to notify for every security incident. A blocked phishing attempt, a failed login, or a contained malware infection with no data exposure typically does not require notification. For full details on when and how to notify, see our [GDPR breach notification procedures guide](/posts/gdpr-breach-notification-procedures-small-business/).

### Investigation steps

1. **Identify the attack vector** — how did the attacker get in? Phishing email, compromised password, malicious software, insider action?
2. **Determine what data was affected** — personal data, financial records, client files, intellectual property?
3. **Assess the volume** — how many records or individuals are affected?
4. **Check for exfiltration** — was data actually taken, or just accessed? Check email logs, file access logs, and cloud audit trails.
5. **Preserve evidence** — do not delete suspicious emails, files, or logs. Your insurer and potentially law enforcement will need them.

### Notification decisions

| Scenario | Notify Supervisory Authority? | Notify Affected Individuals? |
|---|---|---|
| Personal data confirmed exposed | Yes (within 72 hours) | Yes, if high risk to individuals |
| Personal data accessed but not exported | Likely yes | Case-by-case |
| No personal data involved | No | No |
| Encrypted data exposed but key not compromised | Usually no | No |

### Insurance notification

Contact your cyber insurance provider as early as possible — ideally within the first 24 hours. Most policies require "prompt notification" and late reporting can jeopardise your claim. Have your policy number ready and be prepared to describe:
- What happened
- When you became aware
- What data was affected
- What containment steps you have taken

---

## Phase 4: Recovery and Lessons Learned

### Restoring operations

1. **Restore from clean backups** — verify the backup predates the compromise. If you are unsure about your backup strategy, our guide on [backups that actually work](/posts/backups-that-actually-work-3-2-1-plan-small-teams/) covers the 3-2-1 approach.
2. **Rebuild affected systems** if backups are not available or may be compromised
3. **Re-enable accounts** with fresh credentials and confirmed MFA
4. **Monitor closely** for 2–4 weeks after recovery — attackers sometimes return through a second entry point

### Post-incident review

Within one week of recovery, hold a short meeting (30 minutes is enough) to answer:
- What went well?
- What was confusing or slow?
- What would we change in the plan?
- Do we need new tools, training, or access controls?

Update your incident response plan based on the answers. This review is also valuable evidence for insurers and auditors — it shows continuous improvement.

---

## Incident Response Plan Template (Copy and Customise)

### Section 1: Purpose
This plan defines how [Company Name] responds to cybersecurity incidents including data breaches, ransomware, phishing compromises, and account takeovers.

### Section 2: Roles and Contacts

| Role | Name | Phone | Email |
|---|---|---|---|
| Incident Lead | [Name] | [Phone] | [Email] |
| Technical Contact | [Name] | [Phone] | [Email] |
| Communications Contact | [Name] | [Phone] | [Email] |
| IT Provider / MSP | [Company] | [Phone] | [Email] |
| Cyber Insurance | [Provider] | [Claims phone] | Policy #: [Number] |
| Legal Adviser | [Name] | [Phone] | [Email] |
| Supervisory Authority | [DPC / ICO / Other] | [Phone] | [Portal URL] |

### Section 3: Incident Classification

| Severity | Description | Example | Response Time |
|---|---|---|---|
| Low | No data exposure, no system damage | Blocked phishing attempt | Investigate within 24 hours |
| Medium | Potential data exposure, limited system impact | Suspicious login, single account compromise | Contain within 1 hour |
| High | Confirmed data breach, ransomware, multiple systems | Personal data exposed, systems encrypted | Contain immediately |

### Section 4: Response Procedures
1. **Report** — anyone who spots an incident reports it to the Incident Lead immediately
2. **Contain** — Technical Contact isolates affected systems within 15 minutes
3. **Assess** — Incident Lead determines severity and scope within 1 hour
4. **Notify** — Communications Contact notifies insurer (24 hours), supervisory authority (72 hours if required), and affected individuals (without undue delay if high risk)
5. **Recover** — Technical Contact restores systems from clean backups
6. **Review** — team holds a post-incident review within 1 week

### Section 5: Evidence Preservation
- Do not delete suspicious emails or files
- Screenshot all relevant screens and error messages
- Export audit logs from affected cloud services
- Record a timeline of events with timestamps

### Section 6: Annual Review
This plan is reviewed annually and after every incident. Last review date: [Date]. Staff acknowledgment records are stored in [Location].

---

## Common incident types and quick-reference actions

### Ransomware
1. Disconnect affected devices — do NOT pay the ransom before consulting your insurer
2. Check if backups are clean and accessible
3. Contact your IT provider and insurer immediately
4. Report to law enforcement (Gardaí Cyber Crime Bureau / Action Fraud UK / FBI IC3 US)

### Phishing compromise
1. Change the affected user's password immediately
2. Revoke all active sessions
3. Check for new email forwarding rules or inbox rules
4. Scan the device for malware
5. Notify anyone who may have received forwarded malicious content

### Lost or stolen device
1. Remote-wipe the device immediately (if encryption and remote wipe were enabled)
2. Change passwords for all accounts accessible from that device
3. Check cloud storage for any unusual access or downloads
4. Report to police if the device contained sensitive data

### Account takeover
1. Reset the password and revoke all sessions
2. Re-enable MFA with a new authentication method
3. Review account activity logs for data access or changes
4. Check for new forwarding rules, delegated access, or API keys

---

## 📋 Incident Response Readiness Checklist

- [ ] Incident response plan written and stored where the team can find it
- [ ] Roles assigned and contact list current
- [ ] All staff have read the plan and know how to report an incident
- [ ] Cyber insurance policy number and claims line accessible offline
- [ ] Backups tested and confirmed restorable within the last 90 days
- [ ] Plan reviewed within the last 12 months
- [ ] Post-incident review conducted after every incident

---

## 🎁 Get the Complete Incident Response Kit

This template gives you the structure. Our compliance kits give you the complete, print-ready documentation including:

✅ **Incident response plan** — fully formatted, customisable template
✅ **Contact list template** — pre-built for all required roles
✅ **Incident log template** — structured evidence recording
✅ **Staff training slides** — 30-minute session covering incident reporting
✅ **Policy templates** — AUP, BYOD, data protection, and more

👉 [Download the complete cybersecurity kit](/kits/) — everything in one download, no subscription

---

## 📚 Related Resources

### Internal Links
- **[GDPR Breach Notification Procedures for Small Business](/posts/gdpr-breach-notification-procedures-small-business/)** — When and how to notify under GDPR
- **[What Happens After a Phishing Click?](/posts/what-happens-after-a-phishing-click-and-what-you-should-do/)** — Step-by-step phishing incident response
- **[The True Cost of a Breach for SMBs](/posts/the-true-cost-of-a-breach-for-smbs-and-how-to-avoid-one/)** — Financial impact and prevention
- **[Cybersecurity Documentation for Insurance Renewals](/posts/cybersecurity-documentation-for-insurance-renewals/)** — Every document insurers ask for
- **[Backups That Actually Work: 3-2-1 Plan](/posts/backups-that-actually-work-3-2-1-plan-small-teams/)** — Backup strategy for recovery

### External Resources
- **NCSC Incident Management Guidance**: [ncsc.gov.uk](https://www.ncsc.gov.uk/collection/incident-management)
- **GDPR Article 33**: Notification of a personal data breach to the supervisory authority
- **GDPR Article 34**: Communication of a personal data breach to the data subject

---

**🕒 Estimated Reading Time**: 12 minutes
**🔐 Aligned With**: GDPR Articles 33–34, NIST CSF 2.0 (Respond + Recover), ISO27001 Clause A.16
**👥 Team Size**: Optimised for 1–20 employees
**🎯 Target Audience**: Small business owners, office managers, and anyone responsible for incident response planning
