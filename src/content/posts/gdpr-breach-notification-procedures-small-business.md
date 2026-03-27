---
title: "GDPR Breach Notification: SMB Guide"
description: "GDPR breach notification requirements for small businesses. When to notify, who to tell, 72-hour timeline, and template wording you can use today."
date: 2026-03-27
tags: ["gdpr", "compliance"]
ogImage: "/images/smbcyberhub-logo.webp"
excerpt: "Plain-English guide to GDPR breach notification for small teams. Covers the 72-hour rule, when you must notify, who to tell, and template wording for supervisory authorities."
featured: false
canonical: "https://smbcyberhub.com/posts/gdpr-breach-notification-procedures-small-business/"
dateModified: 2026-03-27
---

<div class="bg-gradient-to-r from-blue-50 to-emerald-50 border-l-4 border-blue-500 p-6 mb-8 rounded-lg">

### 📋 TL;DR Summary

**GDPR gives you 72 hours to notify your supervisory authority after becoming aware of a personal data breach** — but not every incident requires notification. You must notify if the breach is likely to result in a risk to individuals' rights and freedoms. If the risk is high, you must also notify the affected individuals directly. Keep a breach register for every incident, even those you decide not to report. This guide walks you through the decision, the timeline, and exactly what to say.

</div>

A data breach under GDPR is not just a hacking incident. It includes any event where personal data is accidentally or unlawfully destroyed, lost, altered, disclosed, or accessed without authorisation. That covers ransomware, phishing, a lost laptop, an email sent to the wrong person, or a cloud misconfiguration.

For small businesses, the challenge is not understanding the law — it is knowing what to do in practice when something goes wrong at 4pm on a Friday.

---

## When does GDPR require breach notification?

Not every security incident requires notification. GDPR Article 33 sets a clear threshold: you must notify your supervisory authority **unless the breach is unlikely to result in a risk to the rights and freedoms of natural persons**.

In plain English, ask yourself: could this breach cause someone harm? Harm includes financial loss, identity theft, discrimination, reputational damage, or loss of confidentiality.

### Notify the supervisory authority if:

- Personal data was exposed to an unauthorised person (e.g., email sent to wrong recipient, data visible on an unsecured server)
- Personal data was stolen or exfiltrated (e.g., phishing attack captured client records)
- Personal data was lost and cannot be recovered (e.g., ransomware encrypted files with no backup)
- Special category data was involved (health, biometric, racial/ethnic origin, political opinions, religious beliefs)
- Financial data was exposed (bank details, payment information, salary records)

### You probably do NOT need to notify if:

- The breach involved only encrypted data and the encryption key was not compromised
- A phishing email was received but no one clicked it
- A suspicious login was detected and blocked before any data was accessed
- The data involved was already publicly available
- The incident was fully contained with no evidence of data access

### What about notifying individuals?

GDPR Article 34 requires you to notify affected individuals directly **when the breach is likely to result in a high risk to their rights and freedoms**. "High risk" means the potential harm is serious — identity theft, significant financial loss, or disclosure of sensitive personal information.

You do NOT need to notify individuals if:
- You applied encryption or other measures that render the data unintelligible
- You took action that ensures the high risk is no longer likely to materialise
- It would involve disproportionate effort (in which case a public communication is acceptable)

---

## What is the 72-hour notification timeline?

The 72-hour clock starts when you **become aware** of the breach — not when it occurred. "Aware" means the moment you have a reasonable degree of certainty that a breach has happened.

### How the timeline works in practice

| Hour | Action |
|---|---|
| 0 | Incident detected or reported — containment begins |
| 0–1 | Confirm the incident involves personal data |
| 1–4 | Assess scope: what data, how many people, what risk |
| 4–24 | Contain the breach and preserve evidence |
| 24–48 | Prepare notification to supervisory authority |
| 48–72 | Submit notification (can be done in phases if full details are not yet available) |
| 72+ | Update the authority with additional details as the investigation progresses |

GDPR Article 33(4) explicitly allows you to provide information in phases. You do not need to have every answer within 72 hours — but you must have made the initial notification by then.

### What if we miss the 72-hour deadline?

If you cannot notify within 72 hours, you must provide reasons for the delay alongside your notification. Supervisory authorities understand that complex incidents take time to investigate. What they do not accept is failing to notify at all, or waiting weeks because "we were busy." A late notification with good reasons is significantly better than no notification.

---

## Who do you notify?

### Supervisory authority

Your supervisory authority depends on where your business is established:

| Country | Authority | Notification Portal |
|---|---|---|
| Ireland | Data Protection Commission (DPC) | [dataprotection.ie](https://www.dataprotection.ie/en/organisations/know-your-obligations/breach-notification) |
| UK | Information Commissioner's Office (ICO) | [ico.org.uk](https://ico.org.uk/for-organisations/report-a-breach/) |
| Germany | State-level DPAs | Varies by Bundesland |
| France | CNIL | [cnil.fr](https://www.cnil.fr/en/notifying-cnil-personal-data-breach) |
| Netherlands | Autoriteit Persoonsgegevens | [autoriteitpersoonsgegevens.nl](https://www.autoriteitpersoonsgegevens.nl/en) |

If your business operates across multiple EU/EEA countries, you notify the authority in the country of your main establishment (your "lead supervisory authority").

### Affected individuals

If high-risk notification to individuals is required, contact them directly using clear, plain language. Avoid legal jargon. Tell them:
- What happened
- What data was involved
- What you are doing about it
- What they can do to protect themselves
- How to contact you for more information

---

## What information must the notification contain?

GDPR Article 33(3) specifies the minimum content for a supervisory authority notification:

1. **Nature of the breach** — what happened, categories and approximate number of individuals affected, categories and approximate number of records affected
2. **Contact details** — name and contact of your data protection officer or other contact point
3. **Likely consequences** — what could happen as a result of the breach
4. **Measures taken** — what you have done or propose to do to address the breach, including mitigation

---

## How do I actually write a breach notification?

Below is template wording you can adapt. Most supervisory authorities also provide online forms, but having your own draft ready speeds up the process significantly.

### Template: Notification to Supervisory Authority

> **Breach Notification — [Company Name]**
>
> **Date of notification:** [Date]
> **Date breach became known:** [Date and time]
>
> **1. Nature of the breach**
> On [date], we became aware that [brief description of what happened — e.g., "an employee email account was compromised via a phishing attack, and the attacker accessed emails containing client personal data"].
>
> **Categories of data affected:** [e.g., names, email addresses, phone numbers, invoice details]
> **Approximate number of individuals affected:** [number or estimate]
> **Approximate number of records affected:** [number or estimate]
>
> **2. Contact point**
> [Name], [Role], [Email], [Phone]
>
> **3. Likely consequences**
> [e.g., "Affected individuals may be at risk of phishing or social engineering using the exposed contact details. No financial data or passwords were exposed."]
>
> **4. Measures taken or proposed**
> - Compromised account password reset and all sessions revoked
> - MFA re-enabled with new authentication method
> - Email forwarding rules audited and malicious rules removed
> - Affected individuals notified on [date] with guidance on protective measures
> - Staff refresher training scheduled for [date]
> - Incident response plan updated to include [specific improvement]
>
> **5. Additional information**
> [Any further details, or a statement that additional information will follow as the investigation continues]

### Template: Notification to Affected Individuals

> **Important: Security Incident Affecting Your Data**
>
> Dear [Name],
>
> We are writing to let you know about a security incident that may have affected some of your personal information.
>
> **What happened:** [Plain-English description — e.g., "On [date], an unauthorised person gained access to our email system and may have viewed emails containing your name and contact details."]
>
> **What information was involved:** [List the specific data types — e.g., "Your name, email address, and phone number."]
>
> **What we are doing:** [e.g., "We have secured the affected account, engaged our IT provider to investigate, and reported the incident to the Data Protection Commission."]
>
> **What you can do:** [Practical advice — e.g., "Be cautious of unexpected emails or phone calls, especially any that ask for personal or financial information. If you receive a suspicious communication, do not respond and contact us directly."]
>
> **Contact us:** If you have questions or concerns, please contact [Name] at [Email] or [Phone].
>
> We take the security of your information seriously and apologise for any concern this may cause.
>
> [Name, Title, Company]

---

## What is a breach register and why do you need one?

GDPR Article 33(5) requires you to keep a record of **all** personal data breaches — including those you decided not to notify to the supervisory authority. This register must contain the facts of the breach, its effects, and the remedial action taken.

### Breach register template

| Field | Entry |
|---|---|
| **Date of breach** | [Date it occurred] |
| **Date breach discovered** | [Date you became aware] |
| **Description** | [What happened] |
| **Data categories affected** | [Names, emails, financial, health, etc.] |
| **Number of individuals affected** | [Number or estimate] |
| **Risk assessment** | [Low / Medium / High risk to individuals] |
| **Supervisory authority notified?** | [Yes / No — if no, state reason] |
| **Individuals notified?** | [Yes / No — if no, state reason] |
| **Containment actions taken** | [List actions] |
| **Root cause** | [How it happened] |
| **Preventive measures** | [What you changed to prevent recurrence] |
| **Incident lead** | [Name] |

Keep this register alongside your other compliance documentation. Auditors and insurers may ask to see it.

---

## How does breach notification affect cyber insurance?

Most cyber insurance policies require prompt notification to the insurer — often within 24 hours. This is separate from GDPR notification. Failing to notify your insurer in time can void your coverage.

When you contact your insurer, be prepared to provide:
- Policy number
- Date and time of the incident
- Brief description of what happened
- What data was involved
- What containment steps you have taken

Many insurers offer incident response services (forensics, legal, PR) as part of the policy. Ask about these before you start paying for external help out of pocket. For more on what insurers expect, see our [complete guide to cyber insurance requirements](/posts/cyber-insurance-requirements-small-business-complete-guide/).

---

## Common mistakes small businesses make with breach notification

### Waiting too long to assess

Some teams spend days investigating before deciding whether to notify. The 72-hour clock runs regardless. If you are unsure whether notification is required, submit a precautionary notification — you can always update it later. Supervisory authorities prefer early, incomplete notifications over late, complete ones.

### Not documenting "no notification" decisions

If you decide a breach does not need to be reported, you must still record the breach and your reasoning in your breach register. Auditors will ask why you did not notify. "We didn't think it was serious" is not sufficient — you need to document the risk assessment that led to your decision.

### Notifying individuals when it is not required

Over-notification can cause unnecessary alarm and erode trust. Only notify individuals when the breach poses a high risk to their rights and freedoms. For lower-risk breaches (e.g., a misdirected email containing only business contact details), notification to the supervisory authority may be sufficient.

### Forgetting to update the notification

GDPR explicitly allows phased notifications. If your initial notification said "investigation ongoing," you must follow up with additional details once the investigation is complete. Supervisory authorities track open notifications and may follow up if you do not.

---

## Decision flowchart: Do I need to notify?

Use this simple decision tree for every security incident:

**Step 1:** Was personal data involved?
- No → Log the incident. No GDPR notification required.
- Yes → Go to Step 2.

**Step 2:** Is the breach unlikely to result in a risk to individuals?
- Yes (e.g., data was encrypted, breach was immediately contained) → Log the incident in your breach register. No notification required, but document your reasoning.
- No or unsure → Go to Step 3.

**Step 3:** Notify the supervisory authority within 72 hours.

**Step 4:** Is there a high risk to individuals?
- No → Supervisory authority notification is sufficient.
- Yes → Also notify the affected individuals without undue delay.

---

## 📋 Breach Notification Readiness Checklist

- [ ] Incident response plan includes breach notification procedures
- [ ] Supervisory authority contact details are documented and accessible
- [ ] Breach register template is ready and stored with compliance documents
- [ ] Notification templates (authority + individuals) are pre-drafted
- [ ] Cyber insurance claims line and policy number are accessible offline
- [ ] At least one person knows how to submit a notification to the supervisory authority
- [ ] Staff know to report suspected breaches immediately (no-blame culture)
- [ ] Plan has been reviewed within the last 12 months

---

## 🎁 Get Audit-Ready Breach Notification Templates

Our compliance kits include everything you need for breach notification readiness:

✅ **Breach notification templates** — pre-drafted for supervisory authorities and individuals
✅ **Breach register template** — structured log for all incidents
✅ **Incident response plan** — step-by-step procedures with roles and timelines
✅ **Staff training materials** — covering incident reporting and breach awareness
✅ **GDPR compliance checklists** — mapped to Articles 33 and 34

👉 [Download the complete cybersecurity kit](/kits/) — one-time purchase, no subscription

---

## 📚 Related Resources

### Internal Links
- **[Incident Response Plan Template for Small Business](/posts/incident-response-plan-template-small-business/)** — Complete incident response plan with roles and procedures
- **[The True Cost of a Breach for SMBs](/posts/the-true-cost-of-a-breach-for-smbs-and-how-to-avoid-one/)** — Financial impact of breaches and prevention strategies
- **[Simple Data Retention for Small Teams](/posts/simple-data-retention-small-teams/)** — Data retention policies that support breach management
- **[SMB Cybersecurity Compliance Guide](/what-is-smb-cybersecurity-compliance/)** — Full GDPR compliance walkthrough for small businesses
- **[Cybersecurity Documentation for Insurance Renewals](/posts/cybersecurity-documentation-for-insurance-renewals/)** — Documentation insurers expect

### External Resources
- **GDPR Article 33**: [Notification of a personal data breach to the supervisory authority](https://gdpr-info.eu/art-33-gdpr/)
- **GDPR Article 34**: [Communication of a personal data breach to the data subject](https://gdpr-info.eu/art-34-gdpr/)
- **ICO Breach Reporting**: [ico.org.uk/for-organisations/report-a-breach](https://ico.org.uk/for-organisations/report-a-breach/)
- **DPC Breach Notification**: [dataprotection.ie](https://www.dataprotection.ie/en/organisations/know-your-obligations/breach-notification)

---

**🕒 Estimated Reading Time**: 14 minutes
**🔐 Aligned With**: GDPR Articles 33–34, NIST CSF 2.0 (Respond), ISO27001 Clause A.16
**👥 Team Size**: Optimised for 1–20 employees
**🎯 Target Audience**: Small business owners, DPOs, office managers, and compliance leads responsible for GDPR breach reporting
