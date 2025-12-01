console.log("Zagrajmy w grę! Wylosowałem liczbę od 0 do 100. Spróbuj ją zgadnąć!");
const N = Math.floor(Math.random() * 100);

process.stdout.write("=> ");
process.stdin.setEncoding("utf8");

process.stdin.on("data", (data) => {
	const n = Number(data.trim());

	if(Number.isNaN(n)) {
		console.log("Nieprawidłowy input!");
		process.stdout.write("=> ");
		return;
	}
	if(n === N) {
		console.log("Brawo! Wygrałeś!");
		process.exit(0);
	}
	if(n < N) {
		console.log("Więcej!");
		process.stdout.write("=> ");
		return;
	}
	else {
		console.log("Mniej!");
		process.stdout.write("=> ");
		return;
	}
})
