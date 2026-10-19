#!/usr/bin/env bash
# Prints the CV pages to PDF with headless Chrome.
# Needs the built site served locally first:  npm run build && npx astro preview --port 4321
set -euo pipefail
CHROME="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"
BASE="${BASE:-http://127.0.0.1:4321}"
cd "$(dirname "$0")/.."
for l in en es; do
  path=$([ "$l" = en ] && echo /cv/ || echo /es/cv/)
  out="public/cv-oscar-romero-quincoces-$l.pdf"
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=4000 \
    --print-to-pdf="$(cygpath -w "$PWD/$out" 2>/dev/null || echo "$PWD/$out")" "$BASE$path"
done
