import type { EmojiEntry, EmojiStatus } from "./index";
import { getEmojis } from "./index";

export function byStatus(status: EmojiStatus): EmojiEntry[] {
    return getEmojis().filter(e => e.status === status);
}
