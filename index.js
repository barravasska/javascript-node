const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    // Tentukan path file yang diminta, default ke index.html
    let filePath = '.' + (req.url === '/' ? '/index.html' : req.url);
    const extname = path.extname(filePath);
    
    // Tentukan Content-Type berdasarkan ekstensi file
    let contentType = 'text/html';
    if (extname === '.css') contentType = 'text/css';
    if (extname === '.js') contentType = 'text/javascript';

    // Baca file dari folder latihan_wsl
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code == 'ENOENT') {
                res.writeHead(404);
                res.end('Waduh Barra, Filenya Ga Ketemu! (404)');
            } else {
                res.writeHead(500);
                res.end(`Maaf ya, ada error: ${error.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`🚀 Server Barra jalan di http://localhost:${port}/`);
    console.log(`Tekan Ctrl+C untuk mematikan server.`);
});
