import type { EmojiEntry } from "./index";
import { getGroupIndex, getSubgroupIndex } from "./indexes";

export function byGroup(group: string): EmojiEntry[] {
    return getGroupIndex().get(group) ?? [];
}

export function bySubgroup(subgroup: string): EmojiEntry[] {
    return getSubgroupIndex().get(subgroup) ?? [];
}
