const http=require('http');
const server=http.createServer(async(req,res)=>{
    res.setHeader('Content-Type','text/html');
    const serverres=await fetch("https://fakestoreapi.com/products");
    const resdata=await serverres.json();
    // console.log(resdata[0].title);
    const temp=`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online shop</title>
    <style>
        .container{
            border:2px solid red;
        }
    </style>
</head>
<body>
<div>
    ${
        resdata.map((ele)=>{
            return(`
                <div class="container">
                   <img src=${ele.image} height=200 width=200 />
                </div>
                <div>
                   <h3>${ele.price}</h3>
                </div>
                <div>
                   <h3>${ele.title}</h3>
                </div>
                <div>
                   <h3>${ele.description}</h3>
                </div>
            `)
        })
    }
</div>
</body>
</html>
    `
    res.end(temp)
})
server.listen(3001,()=>{
    console.log("server is running on: "+3001);
})