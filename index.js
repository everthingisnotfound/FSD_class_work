// // console.log("Hello js");

// // const a=12;
// // if(a>10){
// //     let b=23;
// //     a=40
// //     console.log("a="+a);
// // }
// // console.log("Hi, a="+a);

// function fun(a,b){
//     console.log("HEEEE");
//     return a+b;
// }
// fun();
// let data1=fun();
// console.log(data1);
// let data=fun(10,2);
// console.log(data)


const promise = new Promise((resolve, reject) => {
    let a = 12;
    if(a>10){
        resolve({name:"Rahul",branch:"CSE-AIML"})
    }
    else{
        reject("rejected")
    }
});
promise.then((msg) => console.log(msg))
.catch(error => console.log(error));