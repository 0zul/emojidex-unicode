import { getEmojis } from "./index";
import { byGroup } from "./group";

/**
 * Get a random emoji from the full dataset
 */
export function randomEmoji(): string {
    const emojis = getEmojis();
    return emojis[(Math.random() * emojis.length) | 0].emoji;
}

/**
 * Get a random emoji from a specific group
 */
export function randomByGroup(group: string): string | undefined {
    const groupEmojis = byGroup(group);
    if (groupEmojis.length === 0) return undefined;
    return groupEmojis[(Math.random() * groupEmojis.length) | 0].emoji;
}
