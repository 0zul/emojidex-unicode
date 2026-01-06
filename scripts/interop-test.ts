import path from "path";

const pkg = path.resolve("dist");

// --- ESM ---
const esm = await import(path.join(pkg, "esm/index.js"));

if (typeof esm.allEmojis !== "function") {
    throw new Error("ESM allEmojis() missing");
}

// --- CJS ---
const cjsRaw = require(path.join(pkg, "cjs/index.js"));
const cjs = cjsRaw.default ?? cjsRaw;

if (typeof cjs.allEmojis !== "function") {
    throw new Error("CJS allEmojis() missing");
}

console.log("✅ Interop test passed");
