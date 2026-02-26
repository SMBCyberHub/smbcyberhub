---
title: "When Someone Leaves: Complete Offboarding Security Checklist for Small Teams"
description: "Comprehensive guide to employee offboarding security. Access removal, data protection, compliance requirements, and implementation strategies for small businesses."
date: 2025-08-12
tags: ["offboarding", "access control", "small business", "employee offboarding", "security compliance"]
ogImage: "/images/smbcyberhub-logo.webp"
excerpt: "Step-by-step offboarding checklist to remove access, protect data, and stay audit-ready when someone leaves your small business with comprehensive security procedures."
featured: false
canonical: "https://smbcyberhub.com/posts/when-someone-leaves/"
---

When someone leaves—whether it's a resignation, contract end, or dismissal—there's a short window to cleanly remove access and protect your files. This simple checklist keeps it calm, fast, and audit-ready for small teams.

## Understanding Offboarding Security Risks

### The Departure Window
When someone leaves your organization, there's a critical period where security is most vulnerable.

#### Security Risks During Offboarding:
- **Data theft**: Ex-employees may copy or steal sensitive information
- **Account takeover**: Former credentials may be used to access systems
- **Backdoor creation**: New access methods may be created
- **Social engineering**: Former employees may be targeted by attackers
- **Compliance violations**: Regulatory requirements may be violated

#### Common Attack Scenarios:
- **Data exfiltration**: Downloading sensitive business documents
- **Account compromise**: Using stolen credentials to access systems
- **Insider threats**: Malicious actions by departing employees
- **Social engineering**: Attackers impersonating former employees
- **Legal violations**: Violating data protection regulations

#### Business Impact:
- **Financial losses**: Direct financial impact from data theft
- **Reputational damage**: Loss of customer trust and confidence
- **Legal liability**: Regulatory fines and legal action
- **Compliance violations**: Failure to meet regulatory requirements
- **Business disruption**: Operational impact from security incidents

---

## The Complete Offboarding Security Checklist

### Phase 1: Immediate Actions (First 1 Hour)

#### Step 1: Suspend the Primary Account
Suspend immediately stops access while preserving files, settings, and audit trails.

#### Why Suspension First:
- **Preserves evidence**: Maintains audit trails and logs
- **Protects data**: Prevents immediate data theft
- **Maintains access**: Allows continued access for handover
- **Legal compliance**: Meets regulatory requirements
- **Business continuity**: Allows for smooth transition

#### Implementation Steps:
- **Identity provider**: Suspend account in Google Workspace or Microsoft 365
- **Document suspension**: Record date, time, and reason
- **Notify stakeholders**: Inform management and HR
- **Preserve data**: Ensure all data remains accessible

#### External Reference:
- **CISA**: https://www.cisa.gov/insider-threat-mitigation

### Step 2: Revoke SSO Sessions and MFA Methods
Kill active sessions and remove authentication methods.

#### Session Revocation:
- **Identity provider**: Kill all active sessions
- **Mobile devices**: Revoke all active device sessions
- **Web browsers**: Clear all cached sessions
- **Applications**: Revoke app-specific sessions

#### MFA Removal:
- **Authenticator apps**: Remove from all devices
- **Recovery codes**: Remove all backup codes
- **Hardware tokens**: Deactivate all hardware tokens
- **Biometric data**: Remove biometric data where possible

#### Implementation Process:
1. **List all active sessions** for the user
2. **Revoke each session** individually
3. **Remove MFA devices** from user account
4. **Test access** to ensure revocation worked
5. **Document revocation** in audit logs

### Phase 2: Asset and Access Management (First 4 Hours)

#### Step 3: Transfer Ownership of Shared Assets
Reassign ownership of all shared resources and assets.

#### Shared Resources to Transfer:
- **Shared drives**: Google Drive, OneDrive, SharePoint
- **Shared folders**: Team folders, project folders
- **Calendars**: Team calendars, meeting rooms
- **Documents**: Shared documents, templates
- **Forms and dashboards**: Forms, reports, dashboards
- **Communication tools**: Slack channels, Teams channels

#### Transfer Process:
1. **Identify all shared assets** owned by the departing user
2. **Assign new owners** for each shared asset
3. **Test access** for new owners
4. **Update documentation** with new ownership
5. **Communicate changes** to team members

#### Best Practices:
- **Assign before removal**: Transfer ownership before account removal
- **Test thoroughly**: Verify new owners have proper access
- **Document everything**: Keep records of all transfers
- **Communicate clearly**: Inform all team members of changes
- **Test automations**: Ensure automations still work with new owners

#### Common Issues to Avoid:
- **Broken links**: Links break when accounts are deleted
- **Lost access**: Team members lose access to shared resources
- **Broken automations**: Automations fail with deleted accounts
- **Confusion**: Team members don't know who owns what
- **Data loss**: Data may be lost when accounts are deleted

### Step 4: Collect and Secure Devices
Retrieve and secure all company-owned devices.

#### Device Collection:
- **Laptops**: Collect all company-owned laptops
- **Mobile devices**: Collect company-owned phones and tablets
- **Security keys**: Collect hardware security keys and tokens
- **Access cards**: Collect all access cards and badges
- **Peripherals**: Collect keyboards, mice, monitors

#### Device Security:
- **Remote wipe**: Use remote wipe capabilities when possible
- **Encryption**: Ensure all devices are encrypted
- **Password protection**: Remove or change all passwords
- **Data backup**: Back up all data before wiping
- **Asset tracking**: Record serial numbers and device states

#### Documentation:
- **Device inventory**: Maintain complete device inventory
- **Asset tracking**: Track all device locations
- **Device state**: Record device condition and status
- **Wipe logs**: Keep records of all wipe operations
- **Return receipts**: Document device return receipts

### Step 5: Rotate Shared Credentials and API Keys
Change all shared credentials and access keys.

#### Credentials to Rotate:
- **Shared mailboxes**: billing@, info@, support@
- **Admin accounts**: All admin-level accounts
- **Database credentials**: Database usernames and passwords
- **API keys**: All API keys and tokens
- **Service accounts**: Service account credentials
- **Wi-Fi passwords**: Network passwords
- **VPN credentials**: VPN usernames and passwords

#### Rotation Process:
1. **Identify all shared credentials** across systems
2. **Generate new credentials** for each shared credential
- **Update systems** with new credentials
- **Test new credentials** to ensure they work
- **Update documentation** with new credentials
- **Destroy old credentials** securely
- **Communicate changes** to team members

#### Best Practices:
- **Unique credentials**: Ensure each account has unique credentials
- **Strong passwords**: Use strong, unique passwords
- **MFA enabled**: Enable MFA on all accounts
- **Password managers**: Use password managers for credential management
- **Regular rotation**: Rotate credentials regularly
- **Access control**: Implement principle of least privilege

---

## People and Process Controls

### Phase 3: Communication and Documentation (First 24 Hours)

#### Step 6: Remove Access from Vendors and Apps
Check all third-party services and remove access.

#### Vendor Management:
- **CRM systems**: Salesforce, HubSpot, Zoho
- **Accounting software**: QuickBooks, Xero, Sage
- **Email providers**: Mailchimp, Constant Contact
- **Support tools**: Zendesk, Freshdesk, Intercom
- **Code hosting**: GitHub, GitLab, Bitbucket
- **Time tracking**: Toggl, Harvest, Clockify
- **Project management**: Asana, Trello, Monday

#### App Management:
- **OAuth applications**: Revoke OAuth tokens
- **API integrations**: Remove API access
- **Mobile apps**: Remove work apps from personal devices
- **Browser extensions**: Remove work browser extensions
- **Desktop apps**: Remove work desktop applications
- **Cloud services**: Remove access to cloud services

#### Implementation Process:
1. **Inventory all vendor accounts** with user access
2. **Remove user access** from each vendor system
3. **Test access** to ensure removal worked
4. **Document changes** in vendor management system
5. **Communicate changes** to vendors and team members

### Step 7: Tidy the Mailbox
Prepare the mailbox for archiving and forwarding.

#### Auto-Reply Configuration:
- **Set up auto-reply**: "This inbox is no longer monitored"
- **Include contact information**: Provide alternative contact methods
- **Set time limit**: Limit auto-reply duration
- **Professional tone**: Maintain professional communication
- **Call to action**: Direct to appropriate contact method

#### Email Forwarding:
- **Set up temporary forwarding**: Forward to team mailbox
- **Set time limit**: Limit forwarding duration
- **Test forwarding**: Ensure forwarding works correctly
- **Document forwarding**: Keep records of forwarding rules
- **Communicate forwarding** to team members

#### Archive Preparation:
- **Identify important emails**: Mark for archiving
- **Export critical emails**: Export important communications
- **Label emails**: Add appropriate labels for organization
- **Prepare for legal hold**: Preserve emails for legal requirements
- **Document archive** procedures

---

## Complete Offboarding Checklist

### Phase 1: Immediate Actions (First 1 Hour)
- [ ] **Suspend primary account** in identity provider
- [ ] **Revoke all SSO sessions** and MFA methods
- [ ] **Notify management** and HR of departure
- [ ] **Document suspension** with date and time
- [ ] **Preserve all data** for handover purposes

### Phase 2: Asset and Access Management (First 4 Hours)
- [ ] **Transfer ownership** of all shared assets
- [ ] **Collect and secure** all company devices
- [ ] **Rotate all shared** credentials and API keys
- [ ] **Remove access** from all vendor systems
- [ ] **Configure email** auto-reply and forwarding
- [ ] **Remove work accounts** from personal devices
- [ ] **Archive important** communications and documents

### Phase 3: Communication and Documentation (First 24 Hours)
- [ ] **Communicate changes** to all team members
- **Update documentation** with new ownership
- **Archive important** communications for legal hold
- **Update org chart** and contact information
- **Review security** settings and configurations
- **Document all offboarding** steps taken
- **Close the loop** with management and HR

### Phase 4: Final Cleanup (First Week)
- [ ] **Delete primary account** after appropriate retention period
- **Remove all MFA devices** and recovery codes
- **Destroy all physical devices** or repurpose them
- **Update all documentation** with final status
- **Conduct security** assessment of changes
- **Review access logs** for unusual activity
- **Prepare final compliance** documentation

---

## Incident Response for Offboarding Issues

### When Offboarding Goes Wrong

#### Immediate Response:
1. **Stop all offboarding** immediately
2. **Secure all systems** and data
3. **Investigate the issue** thoroughly
4. **Document the problem** for analysis
5. **Implement corrective** actions

#### Common Issues:
- **Account deletion too early**: Lost data and shared links
- **Incomplete access removal**: Some access remains active
- **Device collection failure**: Devices not returned
- **Credential rotation failure**: Some credentials not changed
- **Communication breakdown**: Team not informed of changes
- **Documentation errors**: Records are incomplete

#### Recovery Actions:
- **Data recovery**: Attempt to recover lost data
- **Access restoration**: Restore access where needed
- **Device recovery**: Attempt to recover lost devices
- **Credential recovery**: Reset compromised credentials
- **Communication recovery**: Restore communication channels
- **Documentation recovery**: Update incomplete documentation

---

## Advanced Offboarding Strategies

### Automated Offboarding
Implement automated offboarding workflows.

#### Automation Benefits:
- **Consistent process**: Same process every time
- **Reduced errors**: Minimize human error
- **Faster execution**: Complete offboarding in minutes
- **Audit trails**: Automatic logging of all actions
- **Compliance**: Ensure regulatory requirements are met

#### Implementation Options:
- **HR systems**: BambooHR, Workday, Gusto
- **Identity providers**: Azure AD, Google Workspace
- **IT systems**: Intune, JumpCloud
- **Custom solutions**: Custom automation scripts

#### Automation Features:
- **Account suspension**: Automatic account suspension
- **Access revocation**: Automatic access removal
- **Data archiving**: Automatic data archiving
- **Notification**: Automatic notifications to stakeholders
- **Logging**: Automatic logging of all actions

### Third-Party Offboarding Services
Professional services for offboarding support.

#### Services:
- **HR offboarding**: Professional HR offboarding services
- **IT offboarding**: Professional IT offboarding services
- **Legal compliance**: Legal compliance offboarding services
- **Data management**: Professional data management services
- **Security consulting**: Security assessment services

#### Implementation:
- **Vendor selection**: Choose appropriate offboarding service
- **Integration**: Integrate with existing systems
- **Configuration**: Configure automated workflows
- **Testing**: Test automated workflows
- **Monitoring**: Monitor automated offboarding processes

---

## Key Takeaways

### Remember These Rules
1. **Suspend first** before deleting accounts
2. **Revoke all sessions** and MFA methods immediately
3 **Transfer ownership** before account removal
4 **Collect devices** and secure them properly
- **Rotate all shared** credentials and API keys
- **Document everything** for audit and compliance

### Your Action Plan

Our [cybersecurity compliance kits](/kits/) include offboarding checklists, access review templates, and policy documents to make this process repeatable and audit-ready.

- [ ] **Create offboarding policies** and procedures
- [ ] **Implement automated offboarding** where possible
- [ ] **Train staff** on offboarding procedures
- [ ] **Regular reviews** of offboarding processes
- [ ] **Update security policies** based on experience
- [ ] **Monitor compliance** with regulatory requirements

### Success Metrics
- **Zero unauthorized** access after offboarding
- **All shared assets** properly transferred
- **All devices** collected and secured
- **All credentials** rotated or removed
- **All documentation** updated and complete
- **Compliance with** regulatory requirements

---

## Compliance and Legal Considerations

### GDPR Article 32(4)
- **Security of processing**: Implement appropriate technical measures
- **Data protection by design**: Use strong authentication methods
- **Access control**: Limit access to authorized personnel

### ISO27001 Clause 7.2.2
- **Information security awareness**: Train staff on security procedures
- **Incident response**: Document and test response procedures
- **Business continuity**: Ensure operations during security incidents

### Industry Regulations
- **HIPAA**: Employee offboarding for healthcare data
- **PCI DSS**: Employee offboarding for payment data
- **SOX**: Internal controls for financial reporting
- **NYDFS**: Cybersecurity requirements for financial services

---

## Download Your Free Cyber Security Training Kit

Need ready-to-use checklists and other easy training resources?  
👉 [Download the Free Cyber Security Training Kit](https://smbcyberhub.com/free-cyber-security-training/?utm_source=blog&utm_medium=cta&utm_campaign=offboarding_post)

---

## Related Resources

### Internal Links:
- **[Audit-Ready in Under an Hour: A Cyber Hygiene Checklist](/posts/audit-ready-in-under-an-hour-a-cyber-hygiene-checklist/)**
- **[Top 5 Password Mistakes Small Businesses Still Make in 2025](/posts/top-5-password-mistakes-small-businesses-still-make-in-2025/)**
- **[What Happens After a Phishing Click?](/posts/what-happens-after-a-phishing-click-and-what-you-should-do/)**

### External Resources:
- **CISA**: Insider threat mitigation guidance
- **Microsoft**: Employee offboarding best practices
- **Google Workspace**: Employee offboarding documentation
- **National Cyber Security Centre**: Offboarding security guidance

---

**Estimated Reading Time**: 20 minutes  
**Aligned With**: GDPR Article 32(4), ISO27001 Clause 7.2.2  
**Target Audience**: Small business owners, HR managers, IT administrators  
**Learning Objectives**: Implement secure offboarding, protect data during departures, maintain compliance
