//  console.log("Hello JS");
// const a=12;
// if(a>10){
//     let b=23;
//     a=40;
//     console.log("a="+a);
// }
// console.log("hi="+b)

// function fun(a,b){
//     console.log("heee");
//     return a+b;
// }

// let d=fun();
// console.log(d);
// function fun(a,,b,c=10){
//     console.log("heee");
//     return a+b+c;
// }
// let d=fun(12,5);
// // console.log(d);
// function cCompiler(){
// return"c compiler"
// // }
// // function javaCompiler(){
// //       return"Java compiler"
// // }

// // function selectlanguage(clbk){
// // return "You have selected"+clbk();    
// // }
// // const result=selectlanguage(cCompiler);
// // console.log(result);
// function selectLanguage(language) {
//     let data;
    
//     if (language === 'c') {
//       function cCompiler() {
//         return "c compiler";
//       }
//       data = cCompiler; 
//     }
    
//     if (language === 'java') {
//       function javaCompiler() {
//         return "java compiler";
//       }
//       data = javaCompiler; 
//     }
    
//     return data();
//   }
  
//   let a = selectLanguage('c');
//   console.log(a);

// const div=document.getElementsByClassName("parent");
// console.log(div);
// div[0].innerHTML="<h2 style=color:red>Hello</h2>"
// const btn=document.getElementById("btn");
// const disp=document.getElementById("disp");
// console.dir(disp);
// // function getData(){
// //     console.log("Getdata called");
// //     disp.innerHTML="<h2>hello..</h2>";
// // }
// // btn.addEventListener("click",getData);
const promise=new promise((resolve,reject)=>
{
    let a=12;
    if(a>10)
    {
        resolve({name:"Rahul",branch:"AIMLCSE"});
    }
    else{
        reject("rejected");
    }

}
);

promise.then(msg=>console.log(msg.name))
.catch(msg=>{console.log(msg)})
