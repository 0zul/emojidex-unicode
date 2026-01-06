import type { EmojiEntry } from "./index";
import { getEmojis } from "./index";

export function search(query: string, limit = 20): EmojiEntry[] {
    const q = query.toLowerCase();
    const results: { e: EmojiEntry; score: number }[] = [];

    for (const e of getEmojis()) {
        let score = 0;

        if (e.name.toLowerCase().includes(q)) score += 5;
        if (e.keywords.some(k => k.includes(q))) score += 3;
        if (e.shortcode.includes(q)) score += 2;

        if (score > 0) results.push({ e, score });
    }

    return results
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(r => r.e);
}
