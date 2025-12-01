process.stdout.write("Podaj swoje imie: ");

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
	const name = data.trim();
	console.log(`Witaj ${name}!`);
	process.exit(0);
})
