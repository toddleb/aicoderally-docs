# AICodeRally Documentation Context

This memory file provides persistent context for all documentation work in the aicoderally-docs repository. It loads automatically for every Claude Code session.

## Project Overview

**AICodeRally** is an AI-native platform for building intelligent applications. This repository contains the official documentation website, integration guides, architecture documentation, and developer resources.

## Documentation Authority

- **Primary Repository**: `/Users/todd.lebaron/dev/aicoderally-docs`
- **GitHub**: https://github.com/AICodeRally/aicoderally-docs
- **Main Branch**: `master`
- **Deployment**: Vercel auto-deploys from master branch
- **Public URL**: https://docs.aicoderally.com
- **Auto-Deploy**: Yes - every push to master triggers deployment

## Repository Structure

### Core Documentation Directories

```
/Users/todd.lebaron/dev/aicoderally-docs/
├── app/                        # Next.js app router (MDX pages)
│   ├── integration/           # Integration guides with code examples
│   │   └── ai-gateway/       # AI Gateway BYOK integration guide
│   ├── layout.tsx            # Main site layout with navigation
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
├── architecture/              # Technical architecture docs (MD files)
│   └── ai-gateway-byok.md    # AI Gateway architecture reference
├── components/                # Reusable documentation components
├── .claude/                   # Claude Code agent configurations
│   ├── agents/               # Subagent configurations
│   │   └── doc.md           # Doc agent configuration (YOU!)
│   ├── commands/             # Custom slash commands
│   │   └── doc.md           # /doc command
│   └── CLAUDE.md            # This memory file
└── public/                    # Static assets
```

### Key Files

- **`app/layout.tsx`**: Main site layout, navigation header, footer
- **`app/integration/ai-gateway/page.mdx`**: AI Gateway integration guide
- **`architecture/ai-gateway-byok.md`**: AI Gateway technical reference
- **`.claude/agents/doc.md`**: Doc agent configuration
- **`.claude/commands/doc.md`**: `/doc` slash command

## Documentation Categories

### 1. Integration Guides (`/app/integration/`)
**Purpose**: Step-by-step guides with practical code examples for developers
**Format**: MDX (Next.js pages with React components)
**Current Guides**:
- AI Gateway (`/app/integration/ai-gateway/page.mdx`) - Vercel AI Gateway with BYOK

**Structure**:
- Quick Start section
- Environment Setup
- Usage Examples (API routes, components, server actions)
- Available Models
- Error Handling
- Advanced Features (streaming, caching, rate limiting)
- Testing Examples
- Next Steps and Support

### 2. Architecture Documentation (`/architecture/`)
**Purpose**: Deep technical specifications and design decisions
**Format**: Markdown (*.md files)
**Current Docs**:
- `ai-gateway-byok.md` - Vercel AI Gateway architecture (900+ lines)

**Structure**:
- Overview and Benefits
- Architecture Diagrams
- Configuration Details
- Usage Methods (unified endpoint, provider SDKs, AI SDK)
- BYOK Configuration Steps
- Authentication (OIDC vs API Key)
- Testing and Monitoring
- Troubleshooting
- Security Best Practices
- Migration Guide
- Performance Metrics

### 3. Main Documentation Pages (`/app/`)
**Purpose**: Core documentation content served via Next.js
**Format**: TSX/MDX files

### 4. Components (`/components/`)
**Purpose**: Reusable documentation components
**Format**: React components (TSX)

## Recent Documentation Additions

### AI Gateway Documentation (November 28, 2025)

#### Architecture Document
**File**: `architecture/ai-gateway-byok.md`
**Lines**: 900+
**Status**: ✅ Complete and deployed

**Coverage**:
- Complete technical reference for Vercel AI Gateway with BYOK
- Environment configuration across all apps
- Three usage methods:
  1. Unified endpoint (recommended for multi-AI orchestration)
  2. Provider-specific base URLs (for SDK compatibility)
  3. Vercel AI SDK integration
- BYOK configuration in Vercel Dashboard
- Authentication via OIDC token (expires every 12 hours)
- Testing with `test-gateway-final.mjs` script
- Monitoring in Vercel Dashboard
- Troubleshooting common issues
- Security best practices
- Migration guide from direct API calls
- Performance metrics (sub-20ms latency overhead)

**Key Technical Details**:
- Unified endpoint: `https://ai-gateway.vercel.sh/v1/chat/completions`
- Provider-specific: `https://api.vercel.ai/v1/{provider}`
- Authentication: `VERCEL_OIDC_TOKEN` (auto-generated)
- Model format: `provider/model` (e.g., "anthropic/claude-sonnet-4-5")
- Supported providers: Anthropic, OpenAI, Google (Gemini)

#### Integration Guide
**File**: `app/integration/ai-gateway/page.mdx`
**Status**: ✅ Complete and deployed

**Coverage**:
- Developer guide with practical Next.js code examples
- Quick start setup (environment, token refresh, testing)
- Usage examples:
  - Next.js API routes
  - React components with hooks
  - Server actions
  - Streaming responses
- Available models for each provider
- Error handling patterns
- Rate limiting implementation
- Caching strategies
- Monitoring and metrics tracking
- Unit and integration tests

**Code Examples Included**:
- API route with error handling
- React component with loading states
- Server action for server-side calls
- Streaming implementation
- Rate limiting with limiter library
- Caching with Map-based cache
- Monitoring with metrics tracking
- Test cases with Vitest

## Documentation Standards

### File Formats

#### Markdown (*.md)
**Use for**: Pure technical documentation
**Location**: `/architecture/`, `/docs/`
**Features**: Standard markdown, YAML frontmatter, code blocks

**Template**:
```markdown
# Title

**Last Updated**: [Date]
**Status**: [Status]

## Overview

[Description]

## Section

[Content]
```

#### MDX (*.mdx)
**Use for**: Next.js integrated documentation pages
**Location**: `/app/`
**Features**: Markdown + React components, YAML frontmatter

**Template**:
```mdx
export const metadata = {
  title: 'Page Title',
  description: 'Page description'
}

# Page Title

Content with **markdown** and React components.
```

### YAML Frontmatter

All documentation files should include metadata:

```yaml
---
title: 'Document Title'
description: 'Brief description for SEO and navigation'
---
```

For MDX (Next.js pages):
```typescript
export const metadata = {
  title: 'Document Title',
  description: 'Brief description for SEO and navigation'
}
```

### Code Block Formatting

Always specify language for syntax highlighting:

````markdown
```typescript
// TypeScript code
const example: string = "with types";
```

```bash
# Shell commands
npm install package
```

```json
{
  "config": "value"
}
```
````

### Code Example Requirements

1. **Must be tested** - Run code before documenting
2. **Complete examples** - Include all necessary imports and setup
3. **Error handling** - Show proper error handling patterns
4. **Comments** - Explain complex logic inline
5. **Runnable** - Reader should be able to copy-paste and run
6. **Dependencies** - Note any required packages or setup

Example:
```typescript
// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const response = await fetch(process.env.AI_GATEWAY_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.VERCEL_OIDC_TOKEN}`,
      },
      body: JSON.stringify({
        model: 'anthropic/claude-sonnet-4-5',
        messages: [{ role: 'user', content: message }],
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(`Gateway error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json({
      reply: data.choices[0].message.content
    });
  } catch (error) {
    console.error('AI Gateway error:', error);
    return NextResponse.json(
      { error: 'Failed to get AI response' },
      { status: 500 }
    );
  }
}
```

### Cross-References

- **Use relative paths**: `[Link text](/path/to/doc)`
- **Link to related docs**: Include "See also" or "Related" sections
- **Update all references** when moving files
- **Verify links** after reorganization

Examples:
```markdown
See the [AI Gateway architecture](/architecture/ai-gateway-byok) for technical details.

Related:
- [Getting Started](/getting-started)
- [Deployment Guide](/deployment)
```

### Navigation

The site uses a persistent header navigation defined in `app/layout.tsx`:

```tsx
<nav className="hidden md:flex gap-2">
  <a href="/" className="nav-link">Home</a>
  <a href="/getting-started" className="nav-link">Getting Started</a>
  <a href="/tech-stack" className="nav-link">Tech Stack</a>
  <a href="/modules" className="nav-link">Modules</a>
  <a href="/integration/ai-gateway" className="nav-link">AI Gateway</a>
  <a href="/deployment" className="nav-link">Deployment</a>
</nav>
```

When adding new major documentation sections, update the navigation in `app/layout.tsx`.

## Common Documentation Tasks

### Searching Documentation

```bash
# Search all documentation
grep -r "search_term" .

# Search integration guides only
grep -r "authentication" app/integration/

# Search architecture docs only
grep -r "database" architecture/

# Find all code examples in MDX files
grep -r "```typescript" app/

# Find all API route examples
grep -r "export async function POST" app/
```

### Finding Documentation by Topic

| Topic | Location | File Pattern |
|-------|----------|--------------|
| Integration guides | `/app/integration/` | `page.mdx` |
| Architecture specs | `/architecture/` | `*.md` |
| API examples | `/app/integration/` | Search for `export async function` |
| React components | `/app/integration/` | Search for `'use client'` |
| Configuration | `/architecture/`, `/app/integration/` | Search for `.env` |

### Creating New Documentation

#### Integration Guide
1. Create directory: `app/integration/[feature-name]/`
2. Create file: `app/integration/[feature-name]/page.mdx`
3. Add metadata export:
   ```typescript
   export const metadata = {
     title: 'Feature Integration',
     description: 'How to integrate feature X'
   }
   ```
4. Structure:
   - Quick Start
   - Environment Setup
   - Usage Examples
   - Error Handling
   - Advanced Features
   - Testing
   - Next Steps
5. Add navigation link in `app/layout.tsx` if major section
6. Test all code examples
7. Commit with clear message

#### Architecture Documentation
1. Create file: `architecture/[feature-name].md`
2. Add frontmatter:
   ```markdown
   # Feature Name

   **Last Updated**: YYYY-MM-DD
   **Status**: ✅ Complete

   ## Overview
   ```
3. Structure:
   - Overview and Benefits
   - Architecture (diagrams if applicable)
   - Configuration
   - Usage
   - Security
   - Troubleshooting
   - References
4. Test all commands and examples
5. Commit with clear message

### Updating Existing Documentation

1. **Read current documentation** to understand context
2. **Identify outdated sections** by comparing to current code
3. **Verify against implementation** - check actual code
4. **Update content precisely** using Edit tool
5. **Test updated examples** - run code to verify
6. **Update "Last Updated" date** if applicable
7. **Commit with description** of what changed

### Verifying Documentation Accuracy

1. **Find the implementation**:
   ```bash
   # Find related code files
   grep -r "function_name" ~/dev/aicoderally-stack/
   ```

2. **Read implementation** to understand current behavior

3. **Compare with documentation** - note discrepancies

4. **Update documentation** to match reality

5. **Test examples** - ensure they work

6. **Cross-check references** - verify links and cross-references

## Environment Context

### Related Repositories

**Main Stack**: `/Users/todd.lebaron/dev/aicoderally-stack`
- Monorepo with all AICodeRally applications
- Contains actual implementation that documentation references
- `.env` files with configuration examples

**Documentation**: `/Users/todd.lebaron/dev/aicoderally-docs` (this repo)
- Documentation website
- Integration guides
- Architecture specifications

### Tech Stack

**Documentation Site**:
- Next.js 14 (App Router)
- TypeScript
- MDX for documentation pages
- Tailwind CSS for styling
- Vercel for deployment

**Content**:
- Markdown for architecture docs
- MDX for integrated documentation
- React components for interactive examples

## Team and Process

### Team Context
- **Organization**: AICodeRally
- **Repository**: https://github.com/AICodeRally/aicoderally-docs
- **Team**: AICodeRally developers and documentation maintainers
- **Contact**: todd@aicoderally.com (documentation questions)

### Deployment Process
1. Make changes to documentation files
2. Commit to master branch
3. Push to GitHub
4. Vercel automatically deploys
5. Changes live at https://docs.aicoderally.com within 1-2 minutes

### Version Control
- **Branch**: master (production)
- **Commit messages**: Clear, descriptive (e.g., "docs: Add AI Gateway integration guide")
- **Git**: All documentation changes tracked in git history

## Documentation Principles

1. **Accuracy First** - Documentation must reflect actual implementation
2. **Developer Experience** - Write for developers building with AICodeRally
3. **Examples Over Theory** - Show working code, not just concepts
4. **Continuous Evolution** - Documentation evolves with the codebase
5. **Completeness** - Cover happy path, edge cases, and error scenarios
6. **Discoverability** - Make documentation easy to find and navigate
7. **Version Awareness** - Note what versions features apply to
8. **Test Everything** - All code examples must be tested before documenting

## Current Focus Areas

Based on recent activity, current documentation priorities include:

1. **AI Gateway** - Vercel AI Gateway with BYOK (recently completed)
2. **Integration Guides** - Practical code examples for developers
3. **Architecture Documentation** - Technical specifications and design decisions
4. **Client App Documentation** - Documentation for apps built for clients

## Special Notes

### Token Expiration
The `VERCEL_OIDC_TOKEN` mentioned in AI Gateway documentation expires every 12 hours. Documentation reminds users to run `vercel env pull` to refresh it.

### Testing Scripts
Reference test scripts that live in the main stack:
- `test-gateway-final.mjs` - Tests AI Gateway with all 3 providers

### External Links
Documentation references external resources:
- Vercel Dashboard for configuration
- Provider console URLs for API keys
- GitHub repositories for code

---

**Last Updated**: November 28, 2025

This memory file is automatically loaded for all Claude Code sessions in this repository. Update it as documentation structure, standards, or focus areas evolve.
