const SKIN_TONES = [
    "\u{1F3FB}",
    "\u{1F3FC}",
    "\u{1F3FD}",
    "\u{1F3FE}",
    "\u{1F3FF}",
];

export function withSkinTone(emoji: string, tone: 1 | 2 | 3 | 4 | 5): string {
    return emoji + SKIN_TONES[tone - 1];
}

export function allSkinTones(emoji: string): string[] {
    return SKIN_TONES.map(t => emoji + t);
}
