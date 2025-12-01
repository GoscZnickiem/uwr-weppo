const fs = require("fs").promises;

async function main() {
	try {
		const data = await fs.readFile("plik.txt", "utf8");
		console.log(data);
	} catch (err) {
		console.error("IO error: ", err);
	}
}

main();
