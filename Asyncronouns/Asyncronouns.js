// Synchronous Programming VS Asynchronous Programing

// Synchronous Programming
// Single Threaded


// console.log("Script start");

// for (let i = 0; i < 10000; i++) {
//     console.log("a");
// }

// console.log("Script end");


//setTimeout();


// console.log("Script start");

// function Print(){
//     console.log("Hello");
// }
// // Print();
// // function ,time (milisecond)
// setTimeout(Print,1000);

// console.log("Script end");



console.log("Script start");

const Id = setTimeout(
    ()=>{
        console.log("Hello");
    },1000);
const Id2 = setTimeout(
        ()=>{
            console.log("Hello2");
        },1000);
    
console.log("setTimeout: ",Id2);
console.log("Script end");
clearTimeout(Id2);