const fs = require('fs').promises;
const promise = fs.writeFile("data.txt", "Hello,Writing data through promises module", { encoding: 'utf-8' });
promise.then(() => {
    console.log("Data written successfully");
}).catch(err => {
    console.log("Error is" + err);
}).finally(msg => (console.log("Finally Done")));