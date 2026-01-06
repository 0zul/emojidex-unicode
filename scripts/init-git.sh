#!/usr/bin/env bash

set -e

echo "🚀 Initializing git repository..."

# ---- init repo ----
git init
git branch -M main

# ---- commit 1: project metadata ----
git add package.json README.md LICENSE
git commit -m "chore: initialize project metadata 🎯

- add package metadata
- add README
- add MIT license
"

# ---- commit 2: configuration ----
git add tsconfig*.json
git commit -m "build: add TypeScript build configuration 🏗️

- dual ESM + CJS builds
- strict TypeScript setup
"

# ---- commit 3: emoji data & parser ----
git add scripts/ data/
git commit -m "feat(data): add Unicode emoji dataset & parser 🧬

- fetch emoji-test.txt
- parse full Unicode metadata
- generate emojis.json
"

# ---- commit 4: core emoji API ----
git add src/index.ts src/public-api.ts
git commit -m "feat(api): define public emoji API surface 🔒

- lock public exports
- expose core data access
"

# ---- commit 5: search & lookup ----
git add src/search.ts src/lookup.ts
git commit -m "feat(search): add emoji search & lookup 🔍

- keyword search
- metadata lookup helpers
"

# ---- commit 6: grouping & metadata ----
git add src/group.ts src/meta.ts src/status.ts
git commit -m "feat(meta): add emoji grouping & metadata helpers 🗂️

- group & subgroup filters
- status-based helpers
"

# ---- commit 7: shortcodes ----
git add src/shortcodes.ts
git commit -m "feat(shortcodes): add emoji shortcode support 🏷️

- :smile: style replacement
- fully-qualified preference
"

# ---- commit 8: random & skin tone ----
git add src/random.ts src/skinTone.ts
git commit -m "feat(utils): add random & skin-tone helpers 🎲🎨

- random emoji selection
- Unicode skin tone modifiers
"

# ---- commit 9: build validation ----
git add scripts/validate-build.ts
git commit -m "test(build): add build validation script ✅

- validate ESM & CJS outputs
- enforce API surface lock
"

# ---- commit 10: ignores & housekeeping ----
git add .gitignore .npmignore
git commit -m "chore(repo): add ignore files 🧹

- gitignore
- npmignore
"

echo "✅ Git repository initialized with clean commit history"
