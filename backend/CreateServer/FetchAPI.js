const http = require('http');
const port = 3400;
http.createServer((req,res) => {
    const serverRes = fetch("https:/dummyjson.com/recipes");
    console.log(serverRes);
})
server.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})