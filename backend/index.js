const fs = require('fs');
function myWriteFile(){
    try{
        console.log("Before writing");
        fs.writeFileSync("data.txt","DATA IS WRITTEN BY NODEJS");
        console.log("data is written successfully"); 
    }
    catch(err){
        console.log("Error in writing file:" + err);
    }
}
myWriteFile()

console.log("Before reading")
const rd = fs.readFileSync("data.txt",{encoding:'utf-8'});
console.log(rd.toString());

console.log("After reading");
console.log("before append");

fs.appendFileSync("data.txt","appended data by fs module");
console.log("data is appended successfully");

fs.unlinkSync("data.txt");
console.log("file is deleted successfully");
