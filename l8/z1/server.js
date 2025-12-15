const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
	res.render('upload', { error: null });
});

app.post('/upload', upload.single('file'), (req, res) => {
	if (!req.file) {
		return res.render('upload', {
			error: 'No file selected'
		});
	}

	res.redirect(`/result?name=${req.file.originalname}&size=${req.file.size}`);
	console.log(`Received a file: "${req.file.originalname}" - ${req.file.size}`)
});

app.get('/result', (req, res) => {
	const { name, size } = req.query;
	res.render('result', { name, size });
});

app.listen(3000, () =>
	console.log('Serwer: http://localhost:3000')
);
