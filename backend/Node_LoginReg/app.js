const http = require('http');
const fs = require('fs').promises;
const PORT = 3040;

const server = http.createServer((req, res) => {
    if (req.url === '/register' && req.method === 'POST') {
        let body = '';
        let arr = [];

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', async () => {
            try {
                console.log(body);
                const { name, email, password } = JSON.parse(body);
                console.log(name);
                const data = await fs.readFile('student.json', { encoding: 'utf-8' });
                arr = data ? JSON.parse(data) : [];
                const status = arr.find(ele => ele.email == email);
                if (status) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ "message": "Email is already registered" }));
                    return;
                } else {
                    arr.push({ name, email, password });
                    await fs.writeFile('student.json', JSON.stringify(arr));
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ "message": "Registration successfully committed" }));
                }
            } catch (err) {
                console.log("Error while writing the data in registration: " + err);
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ "error": "Invalid JSON format or server error" }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "error": "Not Found" }));
    }
});

server.listen(PORT, () => {
    console.log("Server is running on:" + PORT);
});
