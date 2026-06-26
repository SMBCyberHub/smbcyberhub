---
name: api-reference
description: Pointer to canonical API skills for GitHub, JIRA, Confluence, and qTest access.
---

# API Access Skills

This project uses shared API skills maintained in OrchestrationScript. For REST API access to external services, refer to the canonical skills:

| Skill | Location | Service |
|-------|----------|---------|
| github-api | `/root/CascadeProjects/OrchestrationScript/.devin/skills/github-api/SKILL.md` | GitHub Enterprise (eos2git) |
| jira-api | `/root/CascadeProjects/OrchestrationScript/.devin/skills/jira-api/SKILL.md` | JIRA |
| confluence-api | `/root/CascadeProjects/OrchestrationScript/.devin/skills/confluence-api/SKILL.md` | Confluence |
| qtest-api | `/root/CascadeProjects/OrchestrationScript/.devin/skills/qtest-api/SKILL.md` | qTest Manager |
| mcp-cli | `/root/CascadeProjects/OrchestrationScript/.devin/skills/mcp-cli/SKILL.md` | MCP server interface |

## Credential Setup

Credentials are stored in `~/.windsurf/` as JSON files (shared across all projects):
- `~/.windsurf/github_credentials.json`
- `~/.windsurf/jira_credentials.json`
- `~/.windsurf/confluence_credentials.json`
- `~/.windsurf/qtest_credentials.json`

**Setup:** `bash /root/CascadeProjects/OrchestrationScript/bin/setup-credentials`

## Quick Access

```bash
# Read a canonical skill
cat /root/CascadeProjects/OrchestrationScript/.devin/skills/github-api/SKILL.md

# Run credential setup
bash /root/CascadeProjects/OrchestrationScript/bin/setup-credentials --sync-from-mcp
```
