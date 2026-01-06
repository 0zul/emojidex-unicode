import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

function assert(condition: any, message: string) {
    if (!condition) {
        console.error("❌ Validation failed:", message);
        process.exit(1);
    }
}

console.log("🔍 Validating build output...");

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const DATA = path.join(ROOT, "data", "emojis.json");

// ---- 1. dist folders exist ----
assert(fs.existsSync(DIST), "`dist/` directory is missing");
assert(fs.existsSync(path.join(DIST, "esm")), "`dist/esm` is missing");
assert(fs.existsSync(path.join(DIST, "cjs")), "`dist/cjs` is missing");

// ---- 2. entry files exist ----
assert(
    fs.existsSync(path.join(DIST, "esm", "index.js")),
    "`dist/esm/index.js` is missing"
);
assert(
    fs.existsSync(path.join(DIST, "cjs", "index.js")),
    "`dist/cjs/index.js` is missing"
);

// ---- 3. type declarations exist ----
assert(
    fs.existsSync(path.join(DIST, "esm", "index.d.ts")),
    "`dist/esm/index.d.ts` is missing"
);

// ---- 4. emoji data exists ----
assert(
    fs.existsSync(DATA),
    "`data/emojis.json` is missing"
);

(async () => {
    // ============================
    // 5. ESM import check
    // ============================
    let esm: any;

    try {
        esm = await import(
            pathToFileURL(path.join(DIST, "esm", "index.js")).href
        );

        assert(typeof esm.search === "function", "ESM export `search` missing");
        assert(typeof esm.allEmojis === "function", "ESM export `allEmojis` missing");
        assert(
            Array.isArray(esm.allEmojis()),
            "ESM export `allEmojis()` did not return an array"
        );
    } catch (err) {
        console.error("❌ ESM import failed", err);
        process.exit(1);
    }

    // ============================
    // 6. CJS require check
    // ============================
    let cjs: any;

    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const mod = require(path.join(DIST, "cjs", "index.js"));

        cjs = mod.allEmojis
            ? mod
            : mod.default
                ? mod.default
                : null;

        assert(cjs, "CJS module shape is invalid");

        assert(
            typeof cjs.search === "function",
            "CJS export `search` missing"
        );
        assert(
            typeof cjs.allEmojis === "function",
            "CJS export `allEmojis` missing"
        );
        assert(
            Array.isArray(cjs.allEmojis()),
            "CJS export `allEmojis()` did not return an array"
        );
    } catch (err) {
        console.error("❌ CJS require failed", err);
        process.exit(1);
    }

    // ============================
    // 7. API surface lock
    // ============================
    const EXPECTED_EXPORTS = [
        "getEmojis",
        "allEmojis",
        "search",
        "byGroup",
        "bySubgroup",
        "listGroups",
        "listSubgroups",
        "getEmojiInfo",
        "replaceShortcodes",
        "randomEmoji",
        "randomByGroup",
        "withSkinTone",
        "allSkinTones",
    ];

    for (const key of EXPECTED_EXPORTS) {
        assert(key in esm, `Missing ESM export: ${key}`);
        assert(key in cjs, `Missing CJS export: ${key}`);
    }

    console.log("✅ Build validation passed");
})();
