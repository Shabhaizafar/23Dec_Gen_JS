var btn=document.getElementById('subbtn');



btn.addEventListener("click",function(event){
    event.preventDefault()
    var email=document.getElementById('exampleInputEmail1').value;
    var pass=document.getElementById('exampleInputPassword1').value;
    var checkbox=document.getElementById('exampleCheck1').checked;


    if(email.trim()===""){
        document.getElementById('error-email').style.visibility='visible'
    }

    if(pass.trim()===""){
        document.getElementById('error-pwd').style.visibility='visible'
    }

    if(!checkbox){
        document.getElementById('error-checkme').style.visibility='visible'
    }
})