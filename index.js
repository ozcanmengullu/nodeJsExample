// const http = require('http');

// const server = http.createServer((req, res) => {
// 	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); 
// 	res.write('Merhaba Dünya!');
// 	res.end();
// });

// server.listen(3000, () => {
// 	console.log('Uygulama çalıştırıldı...');
// });
// ---------------------
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
// 	res.send('Merhaba Dünya!');
// }); 

// app.get('/kategori', (req, res) => {
// 	res.send('Kategori sayfasındasınız!');
// });

// app.listen(3000, () => {
// 	console.log('Uygulama çalıştırıldı...');
// });
// ----------------------------

const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Merhaba Dünya!');
});

app.get('/kategori', (req, res) => {
	//res.send('Kategori sayfasındasınız!');
	res.json({ 'product': 'Elma', 'price': 3.50, 'currency': 'TL' });
});

app.get('/galeri/:categoryUrl/:titleUrl', (req, res) => {
	const category = req.params.categoryUrl;
	const titleUrl = req.params.titleUrl;
	
	res.send(`${category} kategorisindeki ${titleUrl} içeriğine bakıyorsunuz.`);
});

app.listen(3000, () => {
	console.log('Uygulama çalıştırıldı...');
});