//Pending Status 
// var myPromise = new Promise((resolve,reject)=>{

// });
// console.log(myPromise);
////////////////////////////////////////
//rejected Status
// var value;
// var myPromise = new Promise((resolve,reject)=>{
//    if(value==1) 
//    {
//         resolve("Coder");
//    }
//    else
//    {
//         reject("Non Coder");
//    }
// });
// console.log(myPromise);
//////////////////////////////////////////
//fulfilled Status
// var value=1;
// var myPromise = new Promise((resolve,reject)=>{
//    if(value==1) 
//    {
//         resolve("Coder");
//    }
//    else
//    {
//         reject("Non Coder");
//    }
// });

// myPromise.then((value)=>{
//     console.log(value);
// },(error)=>{
//     console.log(error);
// });
///////////////////////////////////////////////
//show output in a HTML Tag
// var value;
var myPromise = new Promise((resolve,reject)=>{
//    if(value==1) 
//    {
//         resolve("Coder");
//    }
//    else
//    {
//         reject("Non Coder");
//    }
});
console.log(myPromise);
myPromise.then((value)=>{
   displayValue(value);
},(error)=>{
    displayValue(error);
});


function displayValue(v){
    document.querySelector('h1').innerHTML = v;
}

