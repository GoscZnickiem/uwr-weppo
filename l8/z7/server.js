const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

const product = {
	name: 'Książka',
	price: 100
};

app.get('/', (req, res) => {
	res.send(`
		<h2>Kup produkt</h2>
		<p>${product.name} – ${product.price} zł</p>

		<form method="POST" action="/buy">
			<input type="hidden" name="price" value="${product.price}">
			<button type="submit">Kup</button>
		</form>
	`);
});

app.post('/buy', (req, res) => {
	const priceFromClient = req.body.price;

	res.send(`
		<h3>Zakup udany</h3>
		<p>Zapłaciłeś: ${priceFromClient} zł</p>
	`);
});

app.listen(3000, () => console.log('http://localhost:3000'));
