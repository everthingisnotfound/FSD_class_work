const http = require('http');
const PORT = 3000;
const server = http.createServer((req,res) => {
    res.write("Request started");
    res.end("request ended");
})
server.listen(PORT , () => {
    console.log("Server running on "+ PORT)
})