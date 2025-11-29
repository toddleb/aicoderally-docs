# 📚 Doc-Audit Command Examples

Quick reference for using `/doc-audit` with keywords and focus areas.

---

## Basic Usage

### Full Comprehensive Audit
```
/doc-audit
```
Runs all 10 audit checks across entire documentation.

---

## Focused Audits by Area

### Check Only Broken Links
```
/doc-audit links
```
**What it checks:**
- Internal links (relative paths)
- External links (Vercel, GitHub, etc.)
- Code file references
- Image references

**Output:** List of broken links with file paths and line numbers

---

### Check Only Code Examples
```
/doc-audit examples
```
**What it checks:**
- Examples are complete (imports, setup, error handling)
- No hardcoded secrets or credentials
- Examples follow best practices
- Dependencies are listed

**Output:** List of code examples needing improvement

---

### Check Only Coverage Gaps
```
/doc-audit coverage
```
**What it checks:**
- Features/modules in code without documentation
- API endpoints without docs
- Missing integration guides
- Undocumented architecture decisions

**Output:** List of features needing documentation

---

### Check Only Recent Changes
```
/doc-audit recent
```
**What it checks:**
- Git commits from last 7 days
- New features added
- Breaking changes
- Deprecated features

**Output:** List of code changes needing documentation updates

---

### Check Only Consistency
```
/doc-audit consistency
```
**What it checks:**
- File format (MD vs MDX) usage
- Frontmatter completeness
- Code block language tags
- Heading hierarchy
- Style guide compliance

**Output:** List of formatting/consistency issues

---

### Check Only Accuracy
```
/doc-audit accuracy
```
**What it checks:**
- Code examples match current implementation
- Environment variables match `.env` files
- API endpoints match actual routes
- Dependencies and versions are current

**Output:** List of documentation needing accuracy updates

---

### Check Only Navigation
```
/doc-audit navigation
```
**What it checks:**
- Major docs in navigation menu
- Cross-references between docs
- Table of contents for long docs
- Search keywords and descriptions

**Output:** Navigation improvement suggestions

---

### Check Only Outdated Content
```
/doc-audit outdated
```
**What it checks:**
- "TODO" or "Coming soon" markers
- References to deprecated features
- Old dates (e.g., "Updated: 2024")
- Outdated version numbers
- Old screenshots

**Output:** List of content needing freshening

---

## Focused Audits by Keyword/Topic

### AI Gateway Documentation
```
/doc-audit AI Gateway
```
**What it checks:**
- All docs mentioning "AI Gateway"
- AI Gateway in navigation
- AI Gateway code examples
- Links related to AI Gateway
- Recent commits about AI Gateway
- Missing AI Gateway documentation

**Output:** Comprehensive AI Gateway documentation health report

---

### Authentication Documentation
```
/doc-audit authentication
```
**What it checks:**
- All authentication-related docs
- Auth code examples
- Auth configuration documentation
- Recent auth changes
- Missing auth guides

**Output:** Authentication documentation audit report

---

### Stripe Payment Documentation
```
/doc-audit Stripe payments
```
**What it checks:**
- Stripe-related documentation
- Stripe integration guides
- Payment code examples
- Environment variables for Stripe
- Recent Stripe changes

**Output:** Stripe documentation audit report

---

### Deployment Documentation
```
/doc-audit deployment
```
**What it checks:**
- Deployment guides
- Environment setup docs
- Vercel configuration
- CI/CD documentation
- Recent deployment changes

**Output:** Deployment documentation audit report

---

### API Documentation
```
/doc-audit API
```
**What it checks:**
- API endpoint documentation
- API code examples
- Request/response formats
- Authentication for APIs
- Recent API changes

**Output:** API documentation audit report

---

## Combining Keywords

### Multiple Topics
```
/doc-audit Stripe authentication
```
Focuses on documentation related to **both** Stripe and authentication (e.g., Stripe API authentication).

---

### Specific Feature
```
/doc-audit webhook handling
```
Focuses on all documentation related to webhook handling.

---

## Common Use Cases

### After Adding a New Feature
```
/doc-audit [feature name]
```
Example:
```
/doc-audit TacoFinder
```
Checks if the new feature is properly documented.

---

### Weekly Maintenance
```
/doc-audit recent
```
Checks what changed in the last 7 days and what needs documenting.

---

### Before a Release
```
/doc-audit accuracy
```
Ensures all documentation matches current code before releasing.

---

### Fixing Broken Links
```
/doc-audit links
```
Quickly find and fix all broken links.

---

### Code Example Review
```
/doc-audit examples
```
Test and update all code examples.

---

### Finding Documentation Gaps
```
/doc-audit coverage
```
Identify features without documentation.

---

## Tips

### Be Specific
Good:
```
/doc-audit AI Gateway authentication
```

Better than:
```
/doc-audit auth
```

### Use Focus Areas for Speed
When you only need to check one thing:
```
/doc-audit links
```
Much faster than full audit.

### Chain Audits
Run focused audits, then fix issues:
```
/doc-audit recent
# Review report, fix issues
/doc-audit links
# Fix broken links
/doc-audit examples
# Update code examples
```

---

## Quick Reference Table

| Command | What It Checks | Speed |
|---------|----------------|-------|
| `/doc-audit` | Everything (10 checks) | Slow ⏱️⏱️⏱️ |
| `/doc-audit links` | Just broken links | Fast ⚡ |
| `/doc-audit examples` | Just code examples | Fast ⚡ |
| `/doc-audit coverage` | Just missing docs | Medium ⏱️⏱️ |
| `/doc-audit recent` | Just last 7 days commits | Fast ⚡ |
| `/doc-audit consistency` | Just formatting | Fast ⚡ |
| `/doc-audit accuracy` | Just code vs docs | Medium ⏱️⏱️ |
| `/doc-audit [keyword]` | Everything about keyword | Medium ⏱️⏱️ |

---

## All Supported Focus Areas

**Single Check (Fast):**
- `links` - Broken links only
- `examples` - Code examples only
- `coverage` - Coverage gaps only
- `recent` - Recent changes only
- `consistency` - Formatting only
- `accuracy` - Accuracy check only
- `navigation` - Navigation only
- `outdated` - Outdated content only

**Keyword Search (Multi-Check):**
- `AI Gateway` - All AI Gateway docs
- `authentication` - All auth docs
- `Stripe` - All Stripe docs
- `deployment` - All deployment docs
- `API` - All API docs
- `[any feature]` - All docs about that feature

---

## Examples in Context

### Scenario: Just Added Stripe Integration

```bash
doc
claude

# Check if Stripe needs documentation
> /doc-audit Stripe

# Output shows: No Stripe documentation found

# Create the documentation
> /doc create integration guide for Stripe payments

# Verify it's documented now
> /doc-audit Stripe

# Output shows: ✅ Stripe integration guide exists
```

---

### Scenario: Weekly Maintenance

```bash
doc
claude

# What changed this week?
> /doc-audit recent

# Fix critical issues identified
> /doc update [files identified in audit]

# Check if links are broken
> /doc-audit links

# Fix any broken links found
> /doc fix broken links identified in audit
```

---

### Scenario: Pre-Release Check

```bash
doc
claude

# Full audit before release
> /doc-audit

# Fix critical issues
> /doc fix all critical issues

# Verify examples work
> /doc-audit examples

# Update version numbers
> /doc update all version numbers to v2.0
```

---

**Created:** November 28, 2025
**Last Updated:** November 28, 2025

**Remember:** Restart Claude Code after creating new slash commands to make them available!
