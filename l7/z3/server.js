const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	const error = req.cookies.error || '';
	res.clearCookie('error');

	const formHtml = fs.readFileSync(path.join(__dirname, 'views/form.html'), 'utf8');

	res.send(formHtml.replace('{{error}}', error));
});

app.post('/submit', (req, res) => {
	const { firstName, lastName, course } = req.body;

	if (!firstName || !lastName || !course) {
		res.cookie('error', 'Imię, nazwisko i nazwa zajęć są wymagane!');
		return res.redirect('/');
	}

	const tasks = [];
	for (let i = 1; i <= 10; i++) {
		const raw = req.body[`task${i}`];
		tasks.push(Number(raw) || 0);
	}

	res.cookie(
		'formData',
		JSON.stringify({ firstName, lastName, course, tasks }),
		{ maxAge: 5 * 60 * 1000 }
	);

	res.redirect('/print');
});

app.get('/print', (req, res) => {
	const data = req.cookies.formData;
	if (!data) return res.redirect('/');

	const { firstName, lastName, course, tasks } = JSON.parse(data);

	let printHtml = fs.readFileSync(path.join(__dirname, 'views/print.html'), 'utf8');

	printHtml = printHtml
		.replace('{{firstName}}', firstName)
		.replace('{{lastName}}', lastName)
		.replace('{{course}}', course)
		.replace('{{rows}}',
			tasks
				.map((v, i) => `<tr><td>${i + 1}</td><td>${v}</td></tr>`)
				.join('')
		);

	res.send(printHtml);
});

app.listen(3000, () => console.log('Serwer działa na http://localhost:3000'));
