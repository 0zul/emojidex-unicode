import rawData from "../data/emojis.json";

export type EmojiStatus =
    | "fully-qualified"
    | "minimally-qualified"
    | "unqualified";

export type EmojiEntry = {
    readonly emoji: string;
    readonly name: string;
    readonly codePoints: readonly string[];
    readonly status: EmojiStatus;
    readonly group: string;
    readonly subgroup: string;
    readonly keywords: readonly string[];
    readonly shortcode: string;
    readonly supportsSkinTone?: boolean;
};


let _emojis: readonly EmojiEntry[] | null = null;

export function getEmojis(): readonly EmojiEntry[] {
    if (_emojis) return _emojis;
    _emojis = rawData as readonly EmojiEntry[];
    return _emojis;
}

export function allEmojis(): readonly string[] {
    return getEmojis().map(e => e.emoji);
}


export * from "./search";
export * from "./shortcodes";
export * from "./group";
export * from "./meta";
export * from "./status";
export * from "./random";
export * from "./lookup";
export * from "./skinTone";
export * from "./public-api";
