const express = require('express');
const app = express();

app.get('/download', (req, res) => {
	const filename = 'dane.txt';

	res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
	res.setHeader('Content-Type', 'text/plain');

	for (let i = 1; i <= 10; i++) {
		res.write(`Linia numer ${i}\n`);
	}

	res.end();
});

app.listen(3000, () => {
	console.log('Serwer działa: http://localhost:3000');
	console.log('Pobierz plik: http://localhost:3000/download');
});
