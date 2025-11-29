# 📚 Doc Agent Configuration

This directory contains the complete configuration for the **Doc Agent** - AICodeRally's specialized documentation keeper.

## What's in Here

### Core Agent Files

- **`agents/doc.md`** - Doc agent subagent configuration
  - Defines the agent's identity, responsibilities, and capabilities
  - Tools: Read, Write, Edit, Grep, Glob, Bash
  - Model: Sonnet
  - Expertise: Documentation management, repository navigation, content organization

- **`commands/doc.md`** - `/doc` slash command
  - Quick invocation: `/doc [task]`
  - Examples: search, create, update, review
  - Automatically delegates to the Doc subagent

- **`CLAUDE.md`** - Persistent memory file
  - Loads automatically in every Claude Code session
  - Contains repository structure, documentation standards, recent updates
  - Provides context about AICodeRally documentation ecosystem

### Terminal Setup Files

- **`iterm-doc-profile.json`** - iTerm2 profile with custom styling
  - Deep blue theme (documentation-focused)
  - Custom badge, colors, and window settings
  - Auto-opens in docs directory

- **`launch-doc.sh`** - Terminal launcher script (executable)
  - Opens dedicated Doc terminal with custom styling
  - Displays welcome message and quick commands
  - Sets up environment for documentation work

- **`startup-message.md`** - Welcome message for the repository
  - Shows when entering the docs repo
  - Quick reference for /doc commands

### Documentation

- **`DOC-TERMINAL-SETUP.md`** - Complete setup guide
  - iTerm2 profile import instructions
  - Shell alias configuration
  - Customization options
  - Troubleshooting guide

- **`README.md`** - This file

## Quick Start

### 1. Use the Doc Agent

From any session in this repository:

```
/doc search for authentication docs
/doc create integration guide for feature X
/doc update AI Gateway documentation
```

The agent has persistent knowledge of:
- Repository structure
- Documentation standards
- Recent updates
- Content organization

### 2. Set Up Dedicated Doc Terminal

#### Option A: Simple Alias

Add to your `~/.zshrc`:

```bash
alias doc='bash /Users/todd.lebaron/dev/aicoderally-docs/.claude/launch-doc.sh'
```

Then from anywhere:

```bash
doc  # Opens dedicated Doc terminal
```

#### Option B: Full iTerm2 Profile

See **[DOC-TERMINAL-SETUP.md](DOC-TERMINAL-SETUP.md)** for complete setup instructions including:
- iTerm2 profile import
- Custom colors and styling
- Hotkey configuration
- Advanced customization

## How It Works

### Layer 1: Subagent (agents/doc.md)
Defines the Doc agent's identity, capabilities, and knowledge areas.

### Layer 2: Slash Command (commands/doc.md)
Provides easy invocation via `/doc [task]`.

### Layer 3: Persistent Memory (CLAUDE.md)
Automatically loads context about the documentation repository.

### Layer 4: Terminal Environment (optional)
Custom iTerm2 setup for dedicated documentation work with visual indicators.

## Usage Examples

### Search Documentation
```
/doc search for all AI Gateway references
/doc find database configuration examples
```

### Create Documentation
```
/doc create integration guide for Stripe
/doc write API docs for user endpoints
```

### Update Documentation
```
/doc update deployment guide with new Vercel steps
/doc add Gemini 2.5 Flash to AI Gateway models
```

### Review Documentation
```
/doc review authentication docs for accuracy
/doc audit integration guides for completeness
```

## Documentation Standards

The Doc agent enforces these standards (defined in CLAUDE.md):

- **Markdown** (*.md) for architecture docs in `/architecture/`
- **MDX** (*.mdx) for integrated pages in `/app/`
- **Code examples** must be tested and working
- **Cross-references** use relative paths
- **Frontmatter** required for all docs
- **Navigation** updates for major sections

## File Organization

```
.claude/
├── agents/
│   └── doc.md                   # Doc subagent configuration
├── commands/
│   └── doc.md                   # /doc slash command
├── CLAUDE.md                    # Persistent memory (auto-loads)
├── iterm-doc-profile.json       # iTerm2 profile
├── launch-doc.sh                # Terminal launcher (executable)
├── startup-message.md           # Repo welcome message
├── DOC-TERMINAL-SETUP.md        # Complete setup guide
└── README.md                    # This file
```

## Team Setup

All files in `.claude/` are version controlled, so your entire team gets:

1. **Doc agent** available via `/doc` command
2. **Persistent memory** with repository knowledge
3. **Terminal setup** option for consistent environment
4. **Documentation standards** enforced automatically

No additional setup required - just clone and use!

## Customization

### Modify Agent Behavior
Edit `agents/doc.md` to:
- Add more knowledge areas
- Adjust tool access
- Refine responsibilities

### Update Memory
Edit `CLAUDE.md` to:
- Add new documentation areas
- Update standards
- Document recent changes

### Customize Terminal
Edit `launch-doc.sh` to:
- Change welcome message
- Modify colors
- Adjust layout

## Related Documentation

- **Main docs site**: https://docs.aicoderally.com
- **Repository**: https://github.com/AICodeRally/aicoderally-docs
- **Claude Code**: https://code.claude.com/docs

## Support

Questions about the Doc agent setup?
- Contact: todd@aicoderally.com
- See: [DOC-TERMINAL-SETUP.md](DOC-TERMINAL-SETUP.md) for troubleshooting

---

**Created**: November 28, 2025
**Status**: ✅ Production Ready
**Team**: Share via git - everyone gets the same setup!
