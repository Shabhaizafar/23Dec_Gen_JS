// const btn = document.querySelector('button');

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
    
//     const reg = /Royal/;

//     var text = "Hello Everyone\nWelcome to\nRoyal";
//     console.log(text.search(reg));
// });



//Any Single Char 
// var reg = /[a-z]/;
// var reg = /[abc]/;
// var reg = /[^abc]/;

// var reg = /(a|z)/
// console.log(reg.test('az'));

// var reg = /\d/;   // only digit

// console.log("Z12far".match(reg));

// var reg = /\D/;  // not digit include

// console.log("A123".match(reg));


// \w  = char 
// \W  = no char 
// \s   = white space 
// \S  = no white space 
// \0  = empty


// Starting
// var reg = /^[abc][#]/;
// console.log(reg.test("a#far"));


// var reg = /^[abc]+[#]/;
// console.log(reg.test("aaaaaaabbbbbbbbcccc#far"));


// Ending 
// var reg  =  /[abc]+[#]$/;
// console.log(reg.test("aaaaaaabbbbbbbbcccc#fa#"));

// var reg = /R?yal/;
// var reg = /R..yal/;

// console.log(reg.test("Rzayal"));

// /?@gmail.com/

// var reg = /R?yal/;
// console.log(reg.test("Ryal"));


//////////////////////////////////////////////////
// const btn = document.querySelector('button');

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     var input = document.querySelector('input');
//     const reg = /^[A-Z][a-z]{1,2}$/;  //name 
//     // var phoneNo = /^[6-9][0-9]{9}$/
//     // var email = /^[a-z0-9A-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
//     // var password = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[#$&*@\.]).{8,15}$/
    
//     var text = document.querySelector('input').value;
//     var logic = reg.test(text);
//     if(logic==false)
//     {
//         input.classList.add('error');
//         input.classList.remove('success');
//     }
//     else{
//         input.classList.add('success');
//     }
// });

// ---------------------------------- //