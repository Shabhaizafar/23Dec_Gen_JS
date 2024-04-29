const btn = document.querySelector('button');

btn.addEventListener('click',CollectData);

function CollectData(){
    
    //xhr Object
    const ajax = new XMLHttpRequest();
    ajax.open('GET','Extra1.txt',true);
    
    console.log("Ajax Opened");
    
    ajax.onreadystatechange = function () {
        console.log(this.readyState);
    }
    
    ajax.onprogress = function (){
        console.log("Progressing!!");
    }
    
    ajax.onload = function (){
        if(this.status ==200)
        {
            console.log(this.responseText);
        }
        // else
        // {

        // }
    }
    ajax.send();
    console.log("Process Done");
}