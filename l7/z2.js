const https = require('https');
const fs = require('fs');

const options = {
	pfx: fs.readFileSync('cert.pfx'),
	passphrase: '12345'
};

https.createServer(options, (req, res) => {
	res.writeHead(200);
	res.end('Witamy na bardzo bezpiecznym serwerze');
}).listen(8443, () => {
	console.log("HTTPS server running at https: //localhost:8443");
});
