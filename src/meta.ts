import { getEmojis } from "./index";

export function listGroups(): string[] {
    return [...new Set(getEmojis().map(e => e.group))];
}

export function listSubgroups(): string[] {
    return [...new Set(getEmojis().map(e => e.subgroup))];
}
