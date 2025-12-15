const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();

app.use(session({
	store: new FileStore({
		path: './sessions',
		retries: 0
	}),
	secret: 'secret_key',
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 5 * 60 * 1000
	}
}));

app.get('/', (req, res) => {
	res.send(`
		<h2>Demo sesji (session-file-store)</h2>
		<ul>
			<li><a href="/set">Ustaw dane w sesji</a></li>
			<li><a href="/get">Odczytaj dane z sesji</a></li>
			<li><a href="/delete">Usuń pole z sesji</a></li>
			<li><a href="/destroy">Zniszcz całą sesję</a></li>
		</ul>
		<p>Session ID: ${req.sessionID}</p>
	`);
});

app.get('/set', (req, res) => {
	req.session.username = 'stefan_prace';
	req.session.counter = (req.session.counter || 0) + 1;

	res.send(`
		<p>Dane zapisane w sesji.</p>
		<pre>${JSON.stringify(req.session, null, 2)}</pre>
		<a href="/">powrót</a>
	`);
});

app.get('/get', (req, res) => {
	res.send(`
		<p>Dane z sesji:</p>
		<pre>${JSON.stringify(req.session, null, 2)}</pre>
		<a href="/">powrót</a>
	`);
});

app.get('/delete', (req, res) => {
	delete req.session.username;

	res.send(`
		<p>Usunięto pole <b>username</b> z sesji.</p>
		<pre>${JSON.stringify(req.session, null, 2)}</pre>
		<a href="/">powrót</a>
	`);
});

app.get('/destroy', (req, res) => {
	req.session.destroy(err => {
		res.send(`
			<p>Sesja zniszczona.</p>
			<a href="/">powrót</a>
		`);
	});
});

app.listen(3000, () => {
	console.log('http://localhost:3000');
});
