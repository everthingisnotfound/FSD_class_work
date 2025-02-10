const fs = require('fs');

function dataWriteCB(){
    fs.writeFile("data.pdf","HELLO WRITING PDF FILE DATA", (err) => {
        if(err) {
            console.log(err);
            };
        console.log("Data Written successfully");    
    });
    console.log("Resource Closed");
}


fs.readFile("data.pdf",{encoding : 'utf-8'},(err,data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);    
})

const obj = {dataWriteCB}
module.exports = obj