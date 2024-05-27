const fs = require("fs").promises;

async function readDirAsyn() {
    try {
        const files = await fs.readdir("./");
        console.log(files);
        console.log("Code is done.")
    } catch {
        console.error(err);
    }
}

readDirAsyn();