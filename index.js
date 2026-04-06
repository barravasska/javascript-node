const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

// Kita simpan HTML-nya di dalam variabel string (pakai backtick ` agar bisa multi-line)
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>WSL Server - Barra</title>
    <style>
        body { 
            background: #1a1a2e; 
            color: #00d4ff; 
            font-family: 'Segoe UI', sans-serif; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            margin: 0;
        }
        .box {
            text-align: center;
            padding: 40px;
            border: 2px solid #00d4ff;
            border-radius: 15px;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
        }
        h1 { margin-bottom: 10px; }
        p { opacity: 0.8; }
    </style>
</head>
<body>
    <div class="box">
        <h1>Halo dari index.js! 🚀</h1>
        <p>HTML ini dikirim langsung dari variabel di dalam JavaScript.</p>
        <p>Status: <strong>Running on WSL2</strong></p>
    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // Penting: Set Content-Type ke text/html agar browser merender kode sebagai web
    res.setHeader('Content-Type', 'text/html');
    res.end(htmlContent);
});

server.listen(port, hostname, () => {
    console.log(`✅ Server nyala! Intip di http://localhost:${port}/`);
});
