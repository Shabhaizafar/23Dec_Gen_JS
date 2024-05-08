const subbtn = document.querySelector('#subbtn');


subbtn.addEventListener('click',(event)=>{
    event.preventDefault();
    var btn = document.querySelector('#exampleCheck1');
    // var emailvalue = document.querySelector("#exampleInputEmail1").value;
    // var pwdvalue = document.querySelector("#exampleInputPassword1").value;
    var firstname = document.querySelector("#fname").value;
    // const reg = /Royal/i;// not case sensetive imp
    // const reg = /[a-z]/;  // any single char in given range
    // const reg = /[^a-z]/;  // not include  char given range

    // const reg = /(a|z|c)/;  // alternative Char


    // const reg = /\d/;
    // const reg = /\D/;

    // const reg = /\s/;

    // const reg = /\S/;




    // if(!btn.checked)
    // {
    //     document.querySelector('.error-checkme').style.visibility = "visible";
    // }
    // else{
    //     document.querySelector('.error-checkme').style.visibility = "hidden";
    // }

    // if(emailvalue=="")
    // {
    //     document.querySelector('.error-email').style.visibility = "visible";
    // }
    // else{
    //     document.querySelector('.error-email').style.visibility = "hidden";
    // }
    if(firstname=="")
        {
            document.querySelector('.error-fname').style.visibility = "visible";
        }
        else{
            document.querySelector('.error-fname').style.visibility = "hidden";
        }

    // if(pwdvalue=="")
    // {
    //     document.querySelector('.error-pwd').style.visibility = "visible";
    // }
    // else{
    //     document.querySelector('.error-pwd').style.visibility = "hidden";
    // }

//     if(!firstname.search(reg))
//     {
//         document.querySelector("#fname").style.background = "lime";
//         console.log("asdf");
//    }
//    else{
//     document.querySelector("#fname").style.background = "red";
    
//    }

    if(firstname.match(reg))
    {
        document.querySelector("#fname").style.background = "lime";
   }
   else{
    document.querySelector("#fname").style.background = "red";
    document.querySelector('.error-fname').style.visibility = "visible";
    document.querySelector('.error-fname').innerHTML= "Unknown";
    
   }

});






/create regex using all this one/   
// \0	Find a NULL character
// \n	Find a new line character
// \f	Find a form feed character
// \r	Find a carriage return character
// \t	Find a tab character
// \v	Find a vertical tab character
// \xxx	Find the character specified by an octal number xxx
// \xdd	Find the character specified by a hexadecimal number dd
// \udddd	Find the Unicode character specified by a hexadecimal number dddd