---
title: "SMB Cybersecurity Assessment: DIY Guide"
description: "Free cybersecurity assessment guide for small businesses. Step-by-step self-assessment checklist covering policies, training, technical controls and compliance."
date: 2026-03-28
tags: ["compliance"]
ogImage: "/images/smbcyberhub-logo.webp"
excerpt: "Complete SMB cybersecurity assessment guide. Self-assessment checklist, gap analysis template, and remediation priorities for small business teams."
featured: false
canonical: "https://smbcyberhub.com/posts/smb-cybersecurity-assessment-guide/"
dateModified: 2026-03-28
---

A cybersecurity assessment is a structured review of how your business protects its data, devices, and people. For small businesses with one to fifty employees, it is one of the most practical steps you can take to understand where you stand — and where the gaps are. Unlike a penetration test, which probes your technical defences from the outside, an assessment examines the full picture: policies, training, processes, and technical controls working together. If you have already worked through our [cyber hygiene audit checklist](/posts/audit-ready-in-under-an-hour-a-cyber-hygiene-checklist/), think of this as the deeper, more structured follow-up.

**Aligned With:** NIST CSF 2.0 | ISO 27001 Annex A | GDPR Article 32 | Cyber Essentials Self-Assessment

## What Is a Cybersecurity Assessment?

A cybersecurity assessment is a methodical evaluation of your organisation's security controls, policies, and practices. The goal is to identify gaps — areas where you are exposed to risk — and prioritise improvements before those gaps are exploited.

It is not the same as a penetration test. A pen test is a technical exercise where a specialist actively tries to break into your systems, probing for vulnerabilities in software, networks, or configurations. An assessment is broader and more accessible: it examines whether you have the right policies in place, whether staff know what to do during an incident, whether access controls are sensible, and whether your technical basics are covered. Both are valuable, but they serve different purposes.

For a small business, the assessment is often more valuable than a pen test because most breaches affecting SMBs stem from human error, weak processes, or missing policies — not sophisticated hacking. Understanding [the true cost of a breach for small businesses](/posts/the-true-cost-of-a-breach-for-smbs-and-how-to-avoid-one/) makes it clear why prevention through assessment is worth the effort.

There are several types of assessment:

- **Self-assessment:** You review your own controls against a checklist or framework. This is what this guide covers.
- **Third-party assessment:** An external consultant or auditor reviews your controls independently.
- **Framework-specific assessment:** A structured review measured against a recognised standard such as NIST CSF, ISO 27001, or Cyber Essentials.

This guide focuses on self-assessment — something any small business can do today with no budget and no specialist knowledge. It is designed for non-technical business owners and managers who want honest visibility into their security posture.

## How Often Should a Small Business Run a Cybersecurity Assessment?

At minimum, once a year. You should also run a focused review after any major change — switching cloud providers, onboarding a significant number of new staff, adopting remote working arrangements, or responding to a security incident.

Annual assessments create a baseline you can measure progress against. They also produce documentation that insurers, clients, and regulators increasingly expect to see. If your business handles personal data under [GDPR or similar regulations](/what-is-smb-cybersecurity-compliance/), Article 32 requires you to regularly test and evaluate the effectiveness of your technical and organisational security measures. An annual self-assessment is a straightforward way to demonstrate that obligation is being met.

For businesses in regulated industries or those pursuing formal certification, the cadence may need to be tighter. Quarterly check-ins on specific areas — such as access reviews or backup verification — can supplement the annual full assessment without creating an overwhelming workload.

A practical rule of thumb:

- **Full assessment:** Annually, or immediately after a major change.
- **Targeted checks:** Quarterly for high-risk areas such as access control and backup testing.
- **Ad-hoc reviews:** After any incident, near-miss, or significant staff change.

Consistency matters more than perfection. A simple annual assessment that actually happens is far more valuable than an elaborate process that never gets completed.

## SMB Cybersecurity Self-Assessment Checklist

Work through each section below. For every item, note whether you have it fully in place, partially in place, or not at all. We will cover a simple scoring method in the next section.

### Policy and Documentation Review

Policies are the foundation of your security programme. Without written policies, you cannot demonstrate due diligence to clients or regulators, train staff consistently, or respond to incidents in a predictable way.

Check whether you have the following documented and up to date:

- **Information Security Policy (ISP):** A top-level document stating your organisation's commitment to protecting data, the scope of your security programme, and the responsibilities of all staff. This does not need to be lengthy — even a two-page policy is better than nothing.
- **Acceptable Use Policy (AUP):** Rules for how employees may use work devices, email, internet access, and software installations. If you do not have one yet, our [acceptable use policy template for small businesses](/posts/acceptable-use-policy-template-small-business/) provides a practical starting point you can customise.
- **Remote Work Policy:** Guidelines for securing devices, home networks, and data when staff work outside the office. With hybrid working now the norm for many small teams, this is no longer optional. See our [remote work policy template](/posts/remote-work-policy-template-small-business/) for a ready-made version.
- **Data Retention Policy:** Defines what data you collect, how long you keep it, and how you dispose of it securely when it is no longer needed.
- **Incident Response Plan:** A documented procedure for detecting, containing, responding to, and recovering from security incidents. We cover this in more detail in the Incident Readiness section below.

For each policy, also check:

- Is it dated and version-controlled?
- Has it been reviewed within the last twelve months?
- Have all current staff acknowledged they have read and understood it?

Missing or outdated policies are among the most common gaps found in SMB assessments. The good news is they are also among the easiest to fix.

### Staff Training and Awareness

The majority of successful attacks against small businesses exploit people, not technology. Phishing emails, social engineering phone calls, and accidental data exposure are far more common than sophisticated technical intrusions.

Review the following:

- **Training programme:** Do you have a structured security awareness training programme, even a basic one?
- **Frequency:** Is training delivered at least annually? Best practice for small teams is brief quarterly reinforcement — a short refresher session or a simulated phishing exercise.
- **Coverage:** Has every employee completed training, including part-time staff, temporary workers, and contractors with access to your systems?
- **Records:** Do you have dated, verifiable records showing who completed training and when? These records are increasingly required for cyber insurance renewals and client due diligence questionnaires.
- **Content relevance:** Does your training cover the threats that actually affect small businesses — phishing recognition, password hygiene, device security, safe file sharing, and how to report a suspected incident?
- **Testing and measurement:** Do you run simulated phishing exercises or short quizzes to measure awareness levels? Training without measurement is difficult to improve.

If your training is informal, undocumented, or happens only at onboarding, that counts as a gap. Insurers and auditors want to see documented, repeatable training with dated completion records.

### Access Control and Authentication

Controlling who can access what — and verifying their identity reliably — is one of the single most effective defences a small business can implement.

Check the following:

- **Multi-factor authentication (MFA):** Is MFA enabled on all email accounts, cloud storage, finance applications, and administrative consoles? MFA alone blocks the vast majority of automated account compromise attacks. Prioritise it for any account that would cause serious damage if compromised.
- **Password practices:** Are passwords at least twelve characters long? The National Cyber Security Centre (NCSC) recommends combining three random words into a passphrase — for example, "cupboard-river-telescope" — which is both strong and memorable. Avoid enforcing frequent password changes, as this encourages staff to choose weaker, more predictable passwords.
- **Principle of least privilege:** Do staff members have access only to the systems and data they need for their current role? Over-provisioned access is a common finding in small teams where everyone was given admin rights "to keep things simple" during the early days.
- **Offboarding process:** When someone leaves the organisation, is their access to all systems revoked on the same day? Do you have a documented checklist for this?
- **Quarterly access reviews:** Do you review who has access to what at regular intervals? Our [quarterly access review playbook](/posts/quarterly-access-reviews-small-team-playbook/) walks through the entire process in under twenty minutes.
- **Shared and generic accounts:** Are shared login credentials eliminated wherever possible? Where shared accounts are unavoidable (such as a shared social media login), are they tightly controlled and logged?

### Data Protection and Backup

Data loss can result from ransomware, hardware failure, accidental deletion, or a disgruntled employee. Your backup and data protection practices determine whether a bad day becomes a recoverable setback or a business-ending event.

Review the following:

- **3-2-1 backup rule:** Do you maintain at least three copies of critical data, stored on two different types of media, with one copy held offsite or in the cloud? Our guide to [backups that actually work for small teams](/posts/backups-that-actually-work-3-2-1-plan-small-teams/) covers this approach in detail.
- **Backup testing:** Have you successfully tested a full restore from backup in the last ninety days? An untested backup is not a backup — it is a hope.
- **Encryption at rest:** Is sensitive data encrypted on laptops, mobile devices, and storage drives? Most modern operating systems offer built-in full disk encryption (BitLocker on Windows, FileVault on macOS).
- **Encryption in transit:** Is data protected during transmission using HTTPS, encrypted email, or secure file transfer where appropriate?
- **Data classification:** Do you know which of your data is most sensitive and where it is stored? Even a simple three-tier scheme — public, internal, confidential — helps you focus protection where it matters most.
- **Removable media controls:** Do you have rules or technical controls around USB drives and external storage devices to prevent data walking out the door?

### Incident Readiness

When a security incident occurs — and statistically, it eventually will — your preparation, response speed, and coordination determine the outcome. Advance planning is everything.

Check the following:

- **Incident response plan:** Do you have a written plan that any staff member could follow in an emergency? If not, start with our [incident response plan template for small businesses](/posts/incident-response-plan-template-small-business/). A basic plan is infinitely better than no plan.
- **Breach notification procedures:** Do you know your legal obligations for reporting data breaches? Under GDPR, qualifying personal data breaches must be reported to the supervisory authority within seventy-two hours. Our [GDPR breach notification guide](/posts/gdpr-breach-notification-procedures-small-business/) covers the specific requirements.
- **Emergency contact list:** Do you have an up-to-date list of who to contact during an incident? This should include your IT support provider, legal adviser, cyber insurance broker, and the relevant regulatory authority.
- **Roles and responsibilities:** Does every team member know what their role is during an incident? Even in a five-person company, someone needs to be designated as the incident lead.
- **Post-incident review process:** Do you have a procedure for reviewing what happened after an incident, identifying root causes, and updating your controls to prevent recurrence?

Incident readiness is the area where small businesses most often score Red. If you have no incident response plan at all, make this your first remediation priority after completing the assessment.

### Device and Network Security

Technical controls form the outer layer of your defence. While this self-assessment focuses primarily on the human and procedural side — the areas where SMBCyberHub kits are designed to help — basic technical hygiene is essential and should not be overlooked.

Review the following:

- **Endpoint protection:** Is antivirus or endpoint detection and response (EDR) software installed, active, and up to date on every device that connects to your business systems?
- **Patching and updates:** Are operating systems, web browsers, and key business applications set to update automatically? Unpatched software remains one of the most consistently exploited attack vectors worldwide.
- **Firewall:** Is a firewall enabled on all devices and, if applicable, at the network perimeter? Most operating systems ship with a built-in firewall — ensure it has not been disabled.
- **Screen lock:** Do all devices automatically lock after a short period of inactivity — ideally five minutes or less?
- **Full disk encryption:** Is encryption enabled on every laptop and mobile device used for work? This protects data if a device is lost or stolen.
- **Wi-Fi security:** Is your office wireless network using WPA3 (or at minimum WPA2) with a strong passphrase? Is the guest network separated from your business network?

For a deeper walkthrough of each of these controls, our [device security basics guide](/posts/device-security-basics/) covers them step by step in plain language.

## How to Score Your Assessment

Keep it simple. A traffic-light system — Green, Amber, Red — works well for small teams and provides an immediately understandable summary.

| Rating | Meaning | Criteria |
|--------|---------|----------|
| **Green** | In place | Control is fully implemented, documented, and regularly reviewed. |
| **Amber** | Partially in place | Control exists but is incomplete, outdated, or inconsistently applied. |
| **Red** | Missing or failing | Control does not exist, has never been tested, or is known to be ineffective. |

Score each item in the checklist above as Green, Amber, or Red. Then create a summary table with one row per section:

| Section | Green | Amber | Red |
|---------|-------|-------|-----|
| Policy and Documentation | | | |
| Staff Training and Awareness | | | |
| Access Control and Authentication | | | |
| Data Protection and Backup | | | |
| Incident Readiness | | | |
| Device and Network Security | | | |

Count the number of Green, Amber, and Red ratings in each row. This gives you an at-a-glance view of your organisation's security posture. Any section with multiple Red ratings deserves immediate attention. Amber items should be scheduled for improvement within the current quarter.

Do not aim for perfection on the first pass. The entire point of this exercise is visibility. Knowing exactly where you stand is the essential first step toward meaningful, prioritised improvement.

## What Should I Do After Completing a Cybersecurity Assessment?

Prioritise your gaps by risk. Start with the Red items that would cause the most damage if exploited — typically missing incident response plans, access control weaknesses, and untested backups.

Here is a practical approach to building a remediation plan:

1. **List all Red and Amber items.** Pull them from your scoring table into a single prioritised list.
2. **Rank by impact.** Which gaps could realistically lead to data loss, regulatory fines, or business interruption? Those go to the top of the list.
3. **Factor in effort.** Some fixes take minutes — enabling MFA, turning on automatic updates, activating full disk encryption. Others take days or weeks, such as writing a comprehensive incident response plan from scratch. Quick wins build momentum and reduce risk immediately, so start there.
4. **Assign owners.** Every remediation item needs a named person responsible for it and a target completion date. Without ownership, items drift.
5. **Set a review date.** Schedule a follow-up assessment — even a partial one covering only your Red and Amber items — in ninety days. This creates accountability and lets you measure progress.
6. **Document everything.** Keep your assessment results, remediation plan, and evidence of completed improvements in a central location. This documentation is valuable for insurance renewals, client security questionnaires, regulatory compliance, and your own institutional memory.

Treat your assessment as a living document, not a one-off exercise. Update it as you close gaps, and commit to running the full checklist again at least annually.

If you are looking for a structured way to close common policy and training gaps quickly, our [compliance kits](/kits/) are designed specifically for small teams that need to get documentation and training records in order without hiring a consultant.

## When to Get Professional Help

A self-assessment is a powerful starting point, but it has honest limits. Recognising what it can and cannot do will help you invest wisely.

**A self-assessment is well suited for:**

- Reviewing policies, training records, and procedural controls
- Identifying obvious gaps in documentation and processes
- Creating a baseline to track improvement year on year
- Producing evidence for basic client or insurer due diligence requests
- Covering the human layer — the policies, awareness, and procedures that underpin your security programme

**You should consider bringing in a professional if:**

- You handle highly sensitive data — health records, financial information, children's data — and need assurance beyond what self-review can provide.
- A client, partner, or regulator requires an independent third-party assessment, a formal audit report, or a recognised certification.
- You need a penetration test to probe your technical infrastructure for vulnerabilities. Pen testing is a specialist skill that requires specific tools, experience, and ethical boundaries. It should not be attempted in-house.
- You have experienced a security breach and need forensic investigation to understand the scope and root cause.
- Your business is growing rapidly and your security programme needs to scale with it.

A practical approach for most small businesses is to use self-assessment for the human layer — policies, training, processes, and documentation — and bring in external professionals for technical testing and formal certification when the situation demands it. The two approaches complement each other well. Neither replaces the other.

## Related SMBCyberHub Resources

- [Cyber Hygiene Audit Checklist: Get Audit-Ready in Under an Hour](/posts/audit-ready-in-under-an-hour-a-cyber-hygiene-checklist/)
- [Incident Response Plan Template for Small Businesses](/posts/incident-response-plan-template-small-business/)
- [Quarterly Access Reviews: The Small Team Playbook](/posts/quarterly-access-reviews-small-team-playbook/)
- [Backups That Actually Work: The 3-2-1 Plan for Small Teams](/posts/backups-that-actually-work-3-2-1-plan-small-teams/)
- [Browse All SMBCyberHub Compliance Kits](/kits/)
