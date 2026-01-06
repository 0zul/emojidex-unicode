import type { EmojiEntry } from "./index";
import { getEmojis } from "./index";

let emojiMap: Map<string, EmojiEntry> | null = null;

function getEmojiMap() {
    if (emojiMap) return emojiMap;
    emojiMap = new Map(getEmojis().map(e => [e.emoji, e]));
    return emojiMap;
}

export function getEmojiInfo(emoji: string): EmojiEntry | undefined {
    return getEmojiMap().get(emoji);
}
