const express = require('express');
const app = express();

app.get('/download-csv', (req, res) => {
	const filename = 'tabela.csv';
	res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
	res.setHeader('Content-Type', 'text/csv');

	res.write('Imię,Nazwisko,Wynik\n');

	const users = [
		{ name: 'Jan', surname: 'Kowalski', score: 10 },
		{ name: 'Anna', surname: 'Nowak', score: 9 },
		{ name: 'Tomasz', surname: 'Malinowski', score: 8 }
	];

	users.forEach(u => {
		res.write(`${u.name},${u.surname},${u.score}\n`);
	});

	res.end();
});

app.listen(3000, () => {
	console.log('Serwer działa: http://localhost:3000');
	console.log('Pobierz plik: http://localhost:3000/download-csv');
});
