import { getEmojis } from "./index";

let shortcodeMap: Map<string, string> | null = null;

function getShortcodeMap() {
    if (shortcodeMap) return shortcodeMap;

    shortcodeMap = new Map(
        getEmojis()
            .filter(e => e.status === "fully-qualified")
            .map(e => [e.shortcode, e.emoji])
    );

    return shortcodeMap;
}

export function replaceShortcodes(text: string): string {
    const map = getShortcodeMap();
    return text.replace(/:\w+:/g, m => map.get(m) ?? m);
}
