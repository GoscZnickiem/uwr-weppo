const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
	res.send(`
		<h2>Demo ciasteczek</h2>
		<ul>
			<li><a href="/set">Ustaw ciasteczko</a></li>
			<li><a href="/get">Odczytaj ciasteczko</a></li>
			<li><a href="/clear">Usuń ciasteczko</a></li>
		</ul>
	`);
});

app.get('/set', (req, res) => {
	res.cookie('username', 'henryk_garncarz', {
		maxAge: 60 * 1000,
		httpOnly: true
	});
	res.send('Ciasteczko ustawione');
});

app.get('/get', (req, res) => {
	const username = req.cookies.username;
	res.send('Wartość ciasteczka: ' + username);
});

app.get('/clear', (req, res) => {
	res.clearCookie('username');
	res.send('Ciasteczko usunięte');
});

app.listen(3000, () => {
	console.log('http://localhost:3000');
});
