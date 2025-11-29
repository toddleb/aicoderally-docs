#!/bin/bash

# Launch Doc Agent - AICodeRally Documentation Terminal
# This script opens a dedicated iTerm2 session for the Doc agent with custom styling

# Colors for output
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${CYAN}📚 Launching Doc Agent Terminal...${NC}"

# Check if iTerm2 is installed
if ! command -v osascript &> /dev/null; then
    echo -e "${YELLOW}⚠️  This script requires macOS and iTerm2${NC}"
    exit 1
fi

# Directory to launch in
DOC_DIR="/Users/todd.lebaron/dev/aicoderally-docs"

# Check if directory exists
if [ ! -d "$DOC_DIR" ]; then
    echo -e "${YELLOW}⚠️  Documentation directory not found: $DOC_DIR${NC}"
    exit 1
fi

# iTerm2 AppleScript to open new window with custom profile
osascript <<EOF
tell application "iTerm"
    activate

    -- Try to use the Doc Agent profile if it exists, otherwise create a new window
    try
        set newWindow to (create window with profile "Doc Agent - AICodeRally")
    on error
        set newWindow to (create window with default profile)
    end try

    tell current session of newWindow
        -- Set working directory
        write text "cd $DOC_DIR"

        -- Set custom colors via escape sequences
        write text "printf '\\033]6;1;bg;red;brightness;20\\007'"
        write text "printf '\\033]6;1;bg;green;brightness;30\\007'"
        write text "printf '\\033]6;1;bg;blue;brightness;45\\007'"

        -- Set tab/window title
        write text "echo -ne '\\033]0;📚 Doc Agent - AICodeRally\\007'"

        -- Set badge
        write text "printf '\\033]1337;SetBadgeFormat=%s\\007' \$(echo -n '📚 DOC' | base64)"

        -- Clear screen and show welcome message
        write text "clear"
        write text "echo ''"
        write text "echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'"
        write text "echo ''"
        write text "echo '  📚  DOC AGENT - AICodeRally Documentation Keeper'"
        write text "echo ''"
        write text "echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'"
        write text "echo ''"
        write text "echo '  Repository: aicoderally-docs'"
        write text "echo '  Location:   $DOC_DIR'"
        write text "echo '  Deployed:   https://docs.aicoderally.com'"
        write text "echo ''"
        write text "echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'"
        write text "echo ''"
        write text "echo '  Quick Start:'"
        write text "echo '    /doc search for [topic]       - Search documentation'"
        write text "echo '    /doc create [guide] for [x]   - Create new documentation'"
        write text "echo '    /doc update [file]            - Update documentation'"
        write text "echo '    /doc review [file]            - Review for accuracy'"
        write text "echo ''"
        write text "echo '  Type \"claude\" to start or just use /doc commands'"
        write text "echo ''"
        write text "echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'"
        write text "echo ''"
    end tell
end tell
EOF

echo -e "${GREEN}✅ Doc Agent terminal launched!${NC}"
