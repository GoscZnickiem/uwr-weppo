const express = require('express');
const cookieParser = require('cookie-parser');
const layouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(layouts);
app.set('layout', 'layout');

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
	const error = req.cookies.error || null;
	res.clearCookie('error');
	res.render('form', { error, title: 'Form' });
});

app.post('/', (req, res) => {
	const { role, languages } = req.body;

	if (!role) {
		res.cookie('error', 'Please select!');
		return res.redirect('/');
	}

	let selectedLanguages = [];
	if (languages) {
		selectedLanguages = Array.isArray(languages) ? languages : [languages];
	}

	res.cookie(
		'formData',
		JSON.stringify({ role, selectedLanguages }),
		{ maxAge: 5 * 60 * 1000 }
	);
	res.redirect('/result');
});

app.get('/result', (req, res) => {
	const data = req.cookies.formData;
	if (!data) return res.redirect('/');
	const parsed = JSON.parse(data);
	res.render('result', {...parsed, title: 'Result'});
});

app.listen(3000, () => console.log('http://localhost:3000'));
