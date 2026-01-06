# emojidex-unicode

[![npm version](https://img.shields.io/npm/v/emojidex-unicode)](https://www.npmjs.com/package/emojidex-unicode)
[![unicode version](https://img.shields.io/badge/unicode-17.0.0-blue)](https://www.unicode.org/emoji/charts/full-emoji-list.html)
[![build](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![bundle size](https://img.shields.io/badge/size-%3C200KB-lightgrey)](#)

A **Unicode-accurate emoji dataset and utility library** built directly from the official  
[`emoji-test.txt`](https://www.unicode.org/Public/17.0.0/emoji/emoji-test.txt).

Designed for **APIs and text tooling**, with full metadata, fast search, and zero runtime dependencies.

---

## ✨ Features

- Official Unicode source (`emoji-test.txt`)
- Versioned Unicode support (17.0.0 → 18+)
- Full emoji metadata
- Prebuilt indexes for fast lookups
- Keyword & fuzzy search
- Emoji shortcodes (`:smile:`)
- Skin-tone helpers
- Group & subgroup filtering
- Random emoji helpers
- Dual ESM + CJS builds
- Zero runtime dependencies

---

## 📦 Installation

```bash
npm install emojidex-unicode
# or
bun add emojidex-unicode
```

---

## 📚 Dataset Structure

```ts
export type EmojiEntry = {
  emoji: string;
  name: string;
  codePoints: string[];
  status: "fully-qualified" | "minimally-qualified" | "unqualified";
  group: string;
  subgroup: string;
  keywords: string[];
  shortcode: string;
  supportsSkinTone: boolean;
};
```

---

## 🔍 Search

```ts
import { search } from "emojidex-unicode";

search("scientist");
search("smile face");
```

---

## 📂 Group & Subgroup Filtering

```ts
import { byGroup, bySubgroup, listGroups } from "emojidex-unicode";

listGroups();
byGroup("Smileys & Emotion");
bySubgroup("person-role");
```

---

## 🧾 Emoji Shortcodes

```ts
import { replaceShortcodes } from "emojidex-unicode";

replaceShortcodes("This is fire :fire:");
```

Output:
```
This is fire 🔥
```

---

## 🎨 Skin-Tone Helpers

```ts
import { withSkinTone, allSkinTones } from "emojidex-unicode";

withSkinTone("👍", 3);
allSkinTones("👋");
```

---

## 🎲 Random Emoji Utilities

```ts
import { randomEmoji, randomByGroup } from "emojidex-unicode";

randomEmoji();
randomByGroup("Animals & Nature");
```

---

## ℹ Emoji Metadata Lookup

```ts
import { getEmojiInfo, findByName } from "emojidex-unicode";

getEmojiInfo("👨‍🔬");
findByName("GRINNING FACE");
```

---

## 🔄 Unicode Updates

```ts
// scripts/config.ts
export const UNICODE_VERSION = "17.0.0";
```

```bash
bun run update
bun run build
```

---

## 📄 Data Source

Emoji data derived from:

https://www.unicode.org/Public/17.0.0/emoji/emoji-test.txt

Copyright © Unicode Consortium.

---

## 📜 License

Emoji data is subject to the  
https://www.unicode.org/license.html

Source code is MIT licensed.

---

## 🏁 Summary

**emojidex-unicode** provides a correct, fast, and future-proof emoji foundation for APIs and text tooling — built directly on official Unicode data.
