import fs from "fs";

const lines = fs.readFileSync("emoji-test.txt", "utf8").split("\n");

type EmojiStatus =
    | "fully-qualified"
    | "minimally-qualified"
    | "unqualified";

const STOP_WORDS = new Set(["with", "and", "of", "the", "a"]);

let group = "";
let subgroup = "";

const emojis = [];

for (const line of lines) {
    const t = line.trim();

    if (t.startsWith("# group:")) {
        group = t.replace("# group:", "").trim();
        continue;
    }

    if (t.startsWith("# subgroup:")) {
        subgroup = t.replace("# subgroup:", "").trim();
        continue;
    }

    if (!t || t.startsWith("#")) continue;

    const [left, right] = t.split("#");
    if (!left || !right) continue;

    const [codesRaw, statusRaw] = left.split(";").map(s => s.trim());

    if (
        statusRaw !== "fully-qualified" &&
        statusRaw !== "minimally-qualified" &&
        statusRaw !== "unqualified"
    ) {
        continue;
    }

    const status = statusRaw as EmojiStatus;
    const codePoints = codesRaw.split(" ");

    const parts = right.trim().split(" ");
    const emoji = parts[0];
    const name = parts.slice(2).join(" ").toUpperCase();

    const keywords = name
        .toLowerCase()
        .split(/[\s-]+/)
        .filter(k => !STOP_WORDS.has(k));

    emojis.push({
        emoji,
        name,
        codePoints,
        status,
        group,
        subgroup,
        keywords,
        shortcode: `:${keywords.join("_")}:`,
        supportsSkinTone:
            group === "People & Body" &&
            !emoji.includes("👨‍👩‍👧‍👦"),
    });
}

fs.mkdirSync("data", { recursive: true });
fs.writeFileSync("data/emojis.json", JSON.stringify(emojis, null, 2));

console.log(`✅ Parsed ${emojis.length} emojis`);
