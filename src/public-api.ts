// DATA ACCESS
export { getEmojis, allEmojis } from "./index";

// SEARCH
export { search } from "./search";

// GROUPING
export { byGroup, bySubgroup } from "./group";
export { listGroups, listSubgroups } from "./meta";

// LOOKUP
export { getEmojiInfo } from "./lookup";

// SHORTCODES
export { replaceShortcodes } from "./shortcodes";

// RANDOM
export { randomEmoji, randomByGroup } from "./random";

// SKIN TONE
export { withSkinTone, allSkinTones } from "./skinTone";

// TYPES
export type { EmojiEntry, EmojiStatus } from "./index";
