# 📚 Doc Agent Terminal Setup Guide

Complete guide to setting up a dedicated terminal session for the Doc agent with custom iTerm2 styling and automatic activation.

---

## Quick Start

### Option 1: Launch Script (Easiest)

1. **Make the launch script executable**:
   ```bash
   chmod +x .claude/launch-doc.sh
   ```

2. **Create an alias** (add to `~/.zshrc` or `~/.bashrc`):
   ```bash
   alias doc='bash /Users/todd.lebaron/dev/aicoderally-docs/.claude/launch-doc.sh'
   ```

3. **Reload your shell**:
   ```bash
   source ~/.zshrc
   ```

4. **Launch the Doc terminal** from anywhere:
   ```bash
   doc
   ```

### Option 2: iTerm2 Profile (Advanced)

1. **Import the profile**:
   - Open iTerm2 → Preferences (⌘,)
   - Go to Profiles tab
   - Click "Other Actions..." → "Import JSON Profiles..."
   - Select `.claude/iterm-doc-profile.json`

2. **Set as default** (optional):
   - Right-click the "Doc Agent - AICodeRally" profile
   - Select "Set as Default"

3. **Launch**:
   - ⌘N to open new window (uses default profile)
   - Or right-click dock icon → "Doc Agent - AICodeRally"

---

## What You Get

### 🎨 Custom Styling

- **Background**: Deep blue theme (documentation-focused)
- **Foreground**: Light blue/white text (high readability)
- **Cursor**: Cyan (easy to spot)
- **Tab Color**: Blue gradient
- **Badge**: 📚 DOC indicator
- **Title**: "📚 Doc Agent - AICodeRally"

### 📍 Auto-Configuration

- **Working Directory**: Automatically opens in `/Users/todd.lebaron/dev/aicoderally-docs`
- **Welcome Message**: Displays Doc agent info and quick commands
- **Environment**: Ready for Claude Code and documentation tasks

### ⚡ Quick Commands

The terminal displays these commands on startup:
- `/doc search for [topic]` - Search documentation
- `/doc create [guide] for [x]` - Create new documentation
- `/doc update [file]` - Update documentation
- `/doc review [file]` - Review for accuracy

---

## Making Doc Agent Default for This Repository

### Method 1: Shell Alias for Auto-Invoke

Add to your `~/.zshrc`:

```bash
# Auto-invoke doc agent when entering docs repo
function cd() {
  builtin cd "$@"
  if [[ "$PWD" == "/Users/todd.lebaron/dev/aicoderally-docs"* ]]; then
    echo "📚 Doc Agent repository detected. Use /doc for documentation tasks."
  fi
}
```

### Method 2: direnv Integration

1. **Install direnv** (if not already):
   ```bash
   brew install direnv
   ```

2. **Create `.envrc` in docs repo**:
   ```bash
   echo 'echo "📚 Doc Agent active. Use /doc for documentation tasks."' > .envrc
   ```

3. **Allow direnv**:
   ```bash
   direnv allow
   ```

Now every time you `cd` into the docs repo, you'll see the reminder.

### Method 3: Git Alias

Create a git alias that always opens with doc context:

```bash
# Add to ~/.gitconfig
[alias]
    doc = !cd /Users/todd.lebaron/dev/aicoderally-docs && clear && echo '📚 Doc Agent - AICodeRally' && echo '' && echo 'Use /doc for documentation tasks' && $SHELL
```

Then run:
```bash
git doc
```

---

## iTerm2 Profile Details

### Colors

| Element | Color (RGB) | Purpose |
|---------|-------------|---------|
| Background | (20, 30, 45) | Deep blue, easy on eyes |
| Foreground | (217, 230, 242) | High contrast text |
| Cursor | (76, 204, 204) | Cyan, highly visible |
| Selection | (51, 102, 153) | Blue highlight |
| Link | (102, 178, 230) | Bright blue links |
| Tab | (25, 76, 128) | Documentation theme |

### ANSI Colors

- **Red** (Error): Bright red for errors
- **Green** (Success): Bright green for success
- **Yellow** (Warning): Amber for warnings
- **Blue** (Info): Bright blue for info
- **Cyan** (Highlight): Bright cyan for highlights
- **Magenta** (Special): Purple for special text

### Window Settings

- **Size**: 120 columns × 40 rows (optimized for documentation)
- **Scrollback**: 10,000 lines
- **Transparency**: 5% (subtle depth)
- **Blur**: Light blur for modern look
- **Badge**: 📚 DOC in corner

---

## Launch Script Features

The `launch-doc.sh` script provides:

### 1. Automatic Directory Navigation
Changes to the docs repository automatically.

### 2. Custom Welcome Banner
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  📚  DOC AGENT - AICodeRally Documentation Keeper

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Repository: aicoderally-docs
  Location:   /Users/todd.lebaron/dev/aicoderally-docs
  Deployed:   https://docs.aicoderally.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Quick Start:
    /doc search for [topic]       - Search documentation
    /doc create [guide] for [x]   - Create new documentation
    /doc update [file]            - Update documentation
    /doc review [file]            - Review for accuracy

  Type "claude" to start or just use /doc commands

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 3. Environment Setup
- Sets tab/window title
- Applies custom badge
- Configures colors
- Shows quick reference

---

## Workflow Examples

### Example 1: Quick Documentation Search

```bash
# From anywhere
$ doc

# In Doc terminal
📚 Doc Agent terminal opens
$ claude
> /doc search for authentication examples
```

### Example 2: Create New Integration Guide

```bash
$ doc
$ claude
> /doc create integration guide for Stripe payments
```

### Example 3: Review Documentation

```bash
$ doc
$ claude
> /doc review the AI Gateway documentation for accuracy
```

---

## Keyboard Shortcuts

Once iTerm2 profile is imported, you can:

- **⌘T** - New tab with Doc profile
- **⌘N** - New window with Doc profile (if set as default)
- **⌘⇧D** - Split pane with Doc profile
- **⌘⌥E** - Search in documentation

---

## Customization

### Change Colors

Edit `.claude/iterm-doc-profile.json` and adjust RGB values:

```json
"Background Color": {
  "Red Component": 0.08,    // 0.0 - 1.0
  "Green Component": 0.12,
  "Blue Component": 0.18
}
```

Then re-import the profile.

### Change Badge

Edit `launch-doc.sh` and modify:

```bash
write text "printf '\\033]1337;SetBadgeFormat=%s\\007' \$(echo -n '📚 DOC' | base64)"
```

Replace `📚 DOC` with your preferred badge text.

### Change Welcome Message

Edit the echo statements in `launch-doc.sh` to customize the welcome banner.

---

## Troubleshooting

### Issue: "Command not found: claude"

**Solution**: Ensure Claude Code CLI is installed:
```bash
# Check installation
which claude

# If not found, install from https://code.claude.com
```

### Issue: Profile doesn't import

**Solution**:
1. Check JSON is valid
2. Restart iTerm2
3. Try manual import via Preferences

### Issue: Colors don't match

**Solution**:
1. Ensure iTerm2 is using the correct profile
2. Check "Minimum contrast" setting in Preferences → Profiles → Colors
3. Disable "Smart box background colors"

### Issue: Launch script doesn't open iTerm2

**Solution**:
1. Ensure script is executable: `chmod +x .claude/launch-doc.sh`
2. Check iTerm2 is installed
3. Verify path in script matches your setup

---

## Advanced Setup

### Multi-Monitor Setup

If you want Doc terminal to always open on a specific monitor:

1. Edit `.claude/iterm-doc-profile.json`
2. Set `"Screen": 0` (main display) or `"Screen": 1` (secondary)
3. Re-import profile

### Hotkey Launch

Set up a global hotkey to launch Doc terminal:

1. iTerm2 → Preferences → Keys → Hotkey
2. Enable "Show/hide all windows with a system-wide hotkey"
3. Set hotkey (e.g., ⌥⌘D)
4. Choose "Doc Agent - AICodeRally" profile

Now ⌥⌘D opens your Doc terminal from anywhere!

### Auto-Start on Login

Create a Launch Agent to auto-start Doc terminal on login:

1. Create `~/Library/LaunchAgents/com.aicoderally.doc.plist`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.aicoderally.doc</string>
    <key>ProgramArguments</key>
    <array>
        <string>/bin/bash</string>
        <string>/Users/todd.lebaron/dev/aicoderally-docs/.claude/launch-doc.sh</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
```

2. Load the agent:
```bash
launchctl load ~/Library/LaunchAgents/com.aicoderally.doc.plist
```

---

## Files Created

```
.claude/
├── iterm-doc-profile.json       # iTerm2 profile with custom colors
├── launch-doc.sh                # Launch script for Doc terminal
├── startup-message.md           # Welcome message shown in repo
└── DOC-TERMINAL-SETUP.md        # This file
```

---

## Quick Reference Card

Save this for easy access:

```
╔════════════════════════════════════════════════════════════╗
║  📚 DOC AGENT - Quick Reference                           ║
╠════════════════════════════════════════════════════════════╣
║  Launch:    doc (from anywhere)                           ║
║  Commands:  /doc [search|create|update|review]            ║
║  Profile:   Doc Agent - AICodeRally                       ║
║  Colors:    Deep blue theme (documentation-focused)       ║
║  Badge:     📚 DOC                                        ║
║  Dir:       ~/dev/aicoderally-docs                        ║
║  Deploy:    https://docs.aicoderally.com                  ║
╚════════════════════════════════════════════════════════════╝
```

---

## Next Steps

1. **Set up the alias**: Add `alias doc='...'` to your shell config
2. **Import the profile**: Import `.claude/iterm-doc-profile.json` to iTerm2
3. **Test it**: Run `doc` from terminal
4. **Customize**: Adjust colors, badge, or messages to your preference
5. **Share with team**: Commit `.claude/` to git for team-wide access

---

**Created**: November 28, 2025
**Status**: ✅ Ready to use
**Support**: todd@aicoderally.com
