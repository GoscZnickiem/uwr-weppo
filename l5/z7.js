const fs = require("fs");

fs.readFile("plik.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Błąd odczytu:", err);
        return;
    }
    console.log("CALLBACK:", data);
});

function readFilePromise(path, encoding = "utf8") {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

readFilePromise("plik.txt")
    .then(data => console.log("MANUAL PROMISE:", data))
    .catch(err => console.error(err));

const util = require("util");
const readFileP = util.promisify(fs.readFile);

readFileP("plik.txt", "utf8")
    .then(data => console.log("UTIL.PROMISIFY:", data))
    .catch(err => console.error(err));

const { readFile } = require("fs/promises");

readFile("plik.txt", "utf8")
    .then(data => console.log("FS.PROMISES:", data))
    .catch(err => console.error(err));

readFile("plik.txt", "utf8")
    .then(data => console.log("THEN:", data))
    .catch(err => console.error("ERROR:", err));

async function main() {
    try {
        const data = await readFile("plik.txt", "utf8");
        console.log("ASYNC/AWAIT:", data);
    } catch (err) {
        console.error("ERROR:", err);
    }
}

main();
