const express = require('express');
const layouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(layouts);

app.set('layout', 'layout');

app.get('/', (req, res) => {
	res.render('index', { title: 'Main page' });
});

app.get('/result', (req, res) => {
	res.render('result', { title: 'Result' });
});

app.listen(3000, () =>
	console.log('http://localhost:3000')
);
