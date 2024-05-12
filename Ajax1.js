const btn = document.querySelector("button");


btn.addEventListener('click',()=>{
    
    var xhr = new XMLHttpRequest();

    xhr.open('GET',"ajax1.txt");

    xhr.onload = function (){
            console.log(this.responseText);
    }
    xhr.send();
    // console.log(xhr);
});