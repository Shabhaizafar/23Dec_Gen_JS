const subbtn = document.querySelector('#subbtn');

subbtn.addEventListener('click',(event)=>{
    event.preventDefault();

    // var btn = document.querySelector('#exampleCheck1');
    var name = document.querySelector('#Fname').value;
    // var email = document.querySelector('#email').value;
    // var pwd = document.querySelector('#password').value;
    // if(!btn.checked){
    //     document.querySelector('.error-checkme').style.visibility = "visible";
    // }
    // else{
    //     document.querySelector('.error-checkme').style.visibility = "hidden";

    // }
    if(name==""){
        document.querySelector('.error-name').style.visibility = "visible";
    }
    else{
        document.querySelector('.error-name').style.visibility = "hidden";
    }
    // if(!email==""){
    //     document.querySelector('.error-email').style.visibility = "visible";
    // }
    // else{
    //     document.querySelector('.error-email').style.visibility = "hidden";
    // }
    // if(!pwd==""){
    //     document.querySelector('.error-pwd').style.visibility = "visible";
    // }
    // else{
    //     document.querySelector('.error-pwd').style.visibility = "hidden";
    // }
});