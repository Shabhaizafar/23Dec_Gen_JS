// const btn = document.querySelector('button');
// function All(){
//     console.log("You are click me");
// }

// btn.onclick = All;
// console.log(btn);



// const btn = document.querySelector('button');
// console.dir(btn);

// function All(){
//     console.log("New one");
// }

// btn.addEventListener('click',All);



// btn.addEventListener('click',function (){
//     console.log("New one");
// });

// btn.addEventListener('click',()=>{
//     console.log("New one");
// });


// this ?

// btn.addEventListener('click',function (){
//     console.log(this);
// });

// console.log(this);
// btn.addEventListener('click',()=>{
//     console.log(this);
// });





// const buttons = document.querySelectorAll('.my-buttons button');
// console.log(buttons);

// for(let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', ()=>{
//      console.log(this.textContent);
//  });
// }
// for (let i = 0; i < buttons.length; i++) {
//    buttons[i].addEventListener('click',function (){
//     console.log(this.textContent);
// });
// }


// buttons.forEach(button => {
//        button.addEventListener('click',function (){
//     console.log(this.textContent);
// });
// });


// for (const btn of buttons) {
//     btn.addEventListener('click',function (){
//     console.log(this);
// });
// }


// for(let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', (event)=>{
//      console.log(event.target.textContent);
//  });
// }

// for (const btn of buttons) {
//     btn.addEventListener('click',function (event){
//     console.log(event.currentTarget.textContent);
// });
// }


// function All(a){
//     console.log(a);
// }
// All("zafar");

// const firstbtn = document.querySelector('.btn1');
// firstbtn.addEventListener('click',function(){
//     console.log(this);
// });

// jyare addEventListener koi pn element apply/add

// js engine :  line by line execute  krvu

//browser  : js engine + WebApi/extra content


//browser ?
// 1) checked : user click or not ?

    // - callback  js engine 
    // - callback + information(event)
    // object 
    
// const firstbtn = document.querySelector('.btn1');
// firstbtn.addEventListener('click',function(event){
//     console.log(event);
// });