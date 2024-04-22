//callback , callbackhell , pyramind of dom


var h1 = document.querySelector('.heading1');
var h2 = document.querySelector('.heading2');
var h3 = document.querySelector('.heading3');
var h4 = document.querySelector('.heading4');
var h5 = document.querySelector('.heading5');
var h6 = document.querySelector('.heading6');
var h7 = document.querySelector('.heading7');
var h8 = document.querySelector('.heading8');


//callback hell
// setTimeout(() => {
//     h1.textContent = "Royal 1";
//     h1.style.color = "red";
//     setTimeout(() => {
//         h2.textContent = "Royal 2";
//         h2.style.color = "green";
//         setTimeout(() => {
//             h3.textContent = "Royal 3";
//             h3.style.color = "yellow";
//             setTimeout(() => {
//                 h4.textContent = "Royal 4";
//                 h4.style.color = "red";
//                 setTimeout(() => {
//                     h5.textContent = "Royal 5";
//                     h5.style.color = "blue";
//                     setTimeout(() => {
//                         h6.textContent = "Royal 6";
//                         h6.style.color = "purple";
//                         setTimeout(() => {
//                             h7.textContent = "Royal 7";
//                             h7.style.color = "violet";
//                             setTimeout(() => {
//                                 h8.textContent = "Royal 8";
//                                 h8.style.color = "green";

//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);



// setTimeout(() => {
//    element.textContent = text;
//     element.style.color = color;
// }, time);
function All(element,text,color,time,callback,Show){
    setTimeout(() => {
       if(element)
       {
            element.textContent = text;
            element.style.color = color;
            if(callback)
            {
                callback();
            }
       }
       else
       {
           if(Show)
           {
                Show();
           }
       }
    }, time);
}


//pyramind of Dom
All(h1,"Royal 1","red",1000,()=>{
    All(h2,"Royal 2","red",1000,()=>{
        All(h3,"Royal 3","red",1000,()=>{
            All(h4,"Royal 4","red",1000,()=>{
                All(h5,"Royal 5","red",1000,()=>{
                    All(h6,"Royal 6","red",1000,()=>{
                        All(h7,"Royal 7","red",1000,()=>{
                            All(h8,"Royal 8","red",1000,()=>{
    
                            },()=>{console.log("element doesn't Exist");});
                        },()=>{console.log("element doesn't Exist");});
                    },()=>{console.log("element doesn't Exist");});
                },()=>{console.log("element doesn't Exist");});
            },()=>{console.log("element doesn't Exist");});
        },()=>{console.log("element doesn't Exist");});
    },()=>{console.log("element doesn't Exist");});    
},()=>{console.log("element doesn't Exist");});
