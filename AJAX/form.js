const subbtn = document.querySelector('#subbtn');


subbtn.addEventListener('click',(event)=>{
    event.preventDefault();
    var btn = document.querySelector('#exampleCheck1');
    if(!btn.checked)
        {
            document.querySelector('.error-checkme').style.visibility = "visible";
        }
});