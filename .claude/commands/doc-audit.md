---
description: Run comprehensive documentation audit and housekeeping for AICodeRally docs (optionally focused on specific keywords or areas)
agent: doc
argument-hint: [optional: keywords or focus area]
---

You are the Doc agent performing a **comprehensive documentation audit and housekeeping** for the AICodeRally documentation repository.

## Understanding User Input

The user may provide optional focus parameters after `/doc-audit`:

### Examples of User Input:
- `/doc-audit` - Full comprehensive audit (all 10 checks)
- `/doc-audit AI Gateway` - Focus audit on AI Gateway related documentation
- `/doc-audit authentication` - Focus on authentication documentation
- `/doc-audit links` - Only check for broken links
- `/doc-audit examples` - Only check code examples
- `/doc-audit Stripe payments` - Focus on Stripe payment documentation
- `/doc-audit recent` - Only check recent changes (last 7 days)
- `/doc-audit coverage` - Only check documentation coverage gaps

### How to Handle Keywords/Focus Areas

**If user provides keywords** (e.g., "AI Gateway", "Stripe", "authentication"):
- Focus the audit on documentation related to those keywords
- Search for those terms across all docs
- Check if those features are properly documented
- Verify examples related to those keywords
- Check links related to those topics

**If user provides focus area** (e.g., "links", "examples", "coverage", "recent"):
- Run only the relevant audit section(s)
- Provide a focused report on that area

**If user provides nothing** (just `/doc-audit`):
- Run the full comprehensive 10-point audit

---

## Full Audit Checklist (When No Keywords Provided)

### 1. Documentation Coverage Audit
**Scan for:**
- Features/modules that exist in code but lack documentation
- API endpoints without documentation
- Integration guides that are missing
- Architecture decisions not documented

**Action:**
```bash
# Check main stack for undocumented features
cd ~/dev/aicoderally-stack
find apps -name "*.ts" -o -name "*.tsx" | head -20
```

Compare with existing docs in:
- `/app/integration/` - Integration guides
- `/architecture/` - Architecture docs

**Report:** List features/modules that need documentation.

---

### 2. Accuracy Check
**Verify:**
- Code examples still work with current codebase
- Environment variables match actual `.env` files
- API endpoints match actual routes
- Dependencies and versions are current

**Action:**
- Read recent code changes from main stack
- Compare with documentation examples
- Check if examples reference deprecated APIs

**Report:** List documentation that needs updating due to code changes.

---

### 3. Broken Links and References
**Check:**
- Internal links to other docs (relative paths)
- External links (Vercel, GitHub, provider consoles)
- Code file references (e.g., `see src/file.ts:123`)
- Image references in docs

**Action:**
```bash
# Find all markdown links
grep -r "\[.*\](.*)" app/ architecture/
# Check for broken file references
```

**Report:** List broken or outdated links.

---

### 4. Outdated Content
**Look for:**
- "Coming soon" or "TODO" markers
- References to deprecated features
- Old dates (e.g., "Updated: 2024")
- Version numbers that are outdated
- Screenshots or examples from old UI

**Action:**
```bash
# Find TODO markers
grep -r "TODO\|FIXME\|Coming soon" app/ architecture/
# Find old dates
grep -r "2024\|Updated:" architecture/
```

**Report:** List content that needs freshening up.

---

### 5. Consistency Check
**Verify:**
- All docs use correct file format (MD vs MDX)
- Frontmatter is complete and consistent
- Code blocks have language specified
- Headings follow proper hierarchy (H1 → H2 → H3)
- Style guide compliance (terminology, formatting)

**Action:**
- Check MDX files have metadata exports
- Check MD files have YAML frontmatter
- Verify code block language tags

**Report:** List formatting/consistency issues.

---

### 6. Navigation and Discoverability
**Check:**
- Major docs are linked in `app/layout.tsx` navigation
- Related docs cross-reference each other
- Table of contents for long docs
- Search keywords and descriptions

**Action:**
```bash
# Check navigation links
grep -A 10 "<nav" app/layout.tsx
```

**Report:** Suggest navigation improvements.

---

### 7. Code Example Testing
**Verify:**
- Examples are complete (imports, setup, error handling)
- No hardcoded secrets or credentials
- Examples follow best practices
- Dependencies are listed

**Action:**
- Scan for incomplete code examples
- Check for exposed secrets (API keys, tokens)
- Verify imports are correct

**Report:** List code examples needing improvement.

---

### 8. Missing Documentation Types
**Check for gaps:**
- Getting Started guide
- Troubleshooting guides
- Migration guides
- Deployment guides
- API reference
- FAQ section
- Contributing guide

**Report:** List missing documentation types.

---

### 9. Recent Code Changes Review
**Check:**
- Recent commits to main stack (last 7 days)
- New features added
- Breaking changes
- Deprecated features

**Action:**
```bash
# Check recent commits in main stack
cd ~/dev/aicoderally-stack
git log --since="7 days ago" --oneline --all
```

**Report:** Features/changes needing documentation updates.

---

### 10. File Organization
**Review:**
- Directory structure makes sense
- Files are in correct locations
- No orphaned files
- Naming conventions followed

**Report:** Suggest organizational improvements.

---

## Focused Audit Examples

### When User Provides Keywords

**Example: `/doc-audit AI Gateway`**

Focus on:
1. Search for "AI Gateway" across all docs
2. Check if AI Gateway is in navigation
3. Verify AI Gateway code examples work
4. Check links related to AI Gateway (Vercel dashboard, etc.)
5. Verify recent commits about AI Gateway are documented
6. Check for missing AI Gateway documentation

**Report Format:**
```markdown
# Focused Audit: AI Gateway
**Date:** [Date]
**Keywords:** AI Gateway

## Documentation Found
- app/integration/ai-gateway/page.mdx (420 lines)
- architecture/ai-gateway-byok.md (900+ lines)

## Coverage Assessment
✅ Well documented with 2 comprehensive guides
✅ In navigation (app/layout.tsx line 35)

## Accuracy Check
- [ ] Code examples need testing
- [ ] Environment variables match .env files: ✅

## Links Check
- [ ] Broken: Old Vercel dashboard URL on line 167
- ✅ GitHub links working

## Recent Changes
- Commit abc123: Added Gemini 2.5 Flash model - NOT YET DOCUMENTED

## Recommendations
1. Add Gemini 2.5 Flash to available models list
2. Test authentication examples
3. Fix broken Vercel dashboard link
```

---

**Example: `/doc-audit links`**

Run only check #3 (Broken Links and References):
- Scan all markdown files for links
- Test internal links
- Test external links
- Check file references

**Report Format:**
```markdown
# Link Audit Report
**Date:** [Date]
**Focus:** Broken links and references

## Internal Links
✅ 45 internal links checked
❌ 3 broken links found:
  - app/integration/auth/page.mdx:23 → /old-deployment (404)
  - architecture/database.md:67 → /api-reference (missing)

## External Links
✅ 12 external links checked
❌ 1 broken link:
  - architecture/ai-gateway-byok.md:167 → old Vercel URL

## File References
✅ All code file references valid

## Recommendations
Fix 4 broken links (details above)
```

---

**Example: `/doc-audit recent`**

Run only check #9 (Recent Code Changes):
```bash
cd ~/dev/aicoderally-stack
git log --since="7 days ago" --oneline --all
```

**Report Format:**
```markdown
# Recent Changes Audit
**Date:** [Date]
**Period:** Last 7 days

## Commits Requiring Documentation
1. [abc123] feat: Add Stripe payment integration
   Status: ❌ No documentation found
   Action: Create integration guide

2. [def456] feat: Update AI Gateway auth
   Status: ⚠️  Partial documentation, needs update
   Action: Update authentication section

3. [ghi789] fix: Correct environment variable names
   Status: ❌ Not documented
   Action: Update deployment guide

## Summary
- Total commits: 12
- Requiring docs: 3
- Already documented: 9

## Priority Actions
1. Document Stripe integration (critical)
2. Update AI Gateway auth docs (important)
3. Update env var names (minor)
```

---

## Output Format

### Full Audit Report

```markdown
# Documentation Audit Report
**Date:** [Current Date]
**Scope:** AICodeRally Documentation Repository
**Focus:** [Full audit OR Keywords/Area if specified]

## Executive Summary
[2-3 sentence overview of documentation health]

## Critical Issues (Fix Immediately)
1. [Issue with high priority]
2. [Issue with high priority]

## Important Updates Needed
1. [Feature X needs documentation]
2. [Code example Y is outdated]

## Minor Improvements
1. [Formatting consistency]
2. [Link updates]

## Missing Documentation
- [ ] [Feature/guide name]
- [ ] [Feature/guide name]

## Recent Code Changes Requiring Docs
- [ ] [Commit hash] - [Feature description]
- [ ] [Commit hash] - [Feature description]

## Recommendations
1. **Priority 1:** [Most important action]
2. **Priority 2:** [Second priority]
3. **Priority 3:** [Nice to have]

## Next Steps
Suggested order of tasks:
1. [Task]
2. [Task]
3. [Task]

## Documentation Health Score
Overall: [X/10]
- Coverage: [X/10]
- Accuracy: [X/10]
- Consistency: [X/10]
- Discoverability: [X/10]
```

---

## After the Audit

Ask the user:
- "Would you like me to start fixing any of these issues?"
- "Should I create a detailed action plan for the [keywords] documentation?"
- "Which priority should I tackle first?"
- "Would you like me to focus on a specific area next?"

---

## Keyword/Focus Area Reference

### Supported Focus Areas (Single Check)
- **links** - Only check broken links (#3)
- **examples** - Only check code examples (#7)
- **coverage** - Only check documentation gaps (#1)
- **recent** - Only check recent changes (#9)
- **consistency** - Only check formatting (#5)
- **accuracy** - Only check if docs match code (#2)
- **navigation** - Only check nav structure (#6)
- **outdated** - Only check for old content (#4)

### Keyword Examples (Focused Multi-Check)
- **AI Gateway** - All checks related to AI Gateway
- **authentication** - All checks related to auth
- **Stripe** - All checks related to Stripe payments
- **deployment** - All checks related to deployment
- **API** - All checks related to API endpoints
- **[feature name]** - All checks related to that feature

---

**Remember:**
- Be thorough and specific
- Provide file paths and line numbers
- Give actionable recommendations
- Prioritize issues clearly
- Adapt the audit scope based on user input
- Always confirm what you're auditing at the start of your report
