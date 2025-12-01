const fs = require("fs");
const readline = require("readline");

async function analyzeLog(filePath) {
	const ipCount = new Map();

	const stream = fs.createReadStream(filePath);

	const rl = readline.createInterface({
		input: stream,
		crlfDelay: Infinity
	});

	for await (const line of rl) {
		if (!line.trim()) continue;

		const parts = line.split(" ");

		if (parts.length < 5) continue;

		const ip = parts[1];

		ipCount.set(ip, (ipCount.get(ip) || 0) + 1);
	}

	const top3 = [...ipCount.entries()]
		.sort((a, b) => b[1] - a[1])
		.slice(0, 3);

	console.log("Top 3 IP:");
	for (const [ip, count] of top3) {
		console.log(ip, count);
	}
}

analyzeLog("sample.log");
