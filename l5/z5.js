const https = require("https");

function fetch(url) {
	return new Promise((resolve, reject) => {
		https.get(url, res => {
			let data = "";
			res.on("data", chunk => { data += chunk; })
			res.on("end", () => { resolve(data); })
		}).on("error", err => { console.error("Error: ", err); })
	});
}

async function main() {
	try {
		const content = await fetch("https://motherfuckingwebsite.com");
		console.log(content);
	} catch (err) {
		console.error("Error: ", err);
	}
}

main();
