import type { EmojiEntry } from "./index";
import { getEmojis } from "./index";

let groupIndex: Map<string, EmojiEntry[]> | null = null;
let subgroupIndex: Map<string, EmojiEntry[]> | null = null;

function buildIndexes() {
    if (groupIndex && subgroupIndex) return;

    groupIndex = new Map();
    subgroupIndex = new Map();

    for (const emoji of getEmojis()) {
        if (!groupIndex.has(emoji.group)) {
            groupIndex.set(emoji.group, []);
        }
        groupIndex.get(emoji.group)!.push(emoji);

        if (!subgroupIndex.has(emoji.subgroup)) {
            subgroupIndex.set(emoji.subgroup, []);
        }
        subgroupIndex.get(emoji.subgroup)!.push(emoji);
    }
}

export function getGroupIndex() {
    buildIndexes();
    return groupIndex!;
}

export function getSubgroupIndex() {
    buildIndexes();
    return subgroupIndex!;
}
