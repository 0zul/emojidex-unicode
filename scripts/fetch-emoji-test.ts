import fs from "fs";
import https from "https";
import { UNICODE_VERSION } from "./config";

const url = `https://www.unicode.org/Public/${UNICODE_VERSION}/emoji/emoji-test.txt`;

https.get(url, res => {
    if (res.statusCode !== 200) {
        throw new Error("Failed to fetch emoji-test.txt");
    }

    const file = fs.createWriteStream("emoji-test.txt");
    res.pipe(file);

    file.on("finish", () => {
        file.close();
        console.log(`✅ emoji-test.txt downloaded (${UNICODE_VERSION})`);
    });
});
