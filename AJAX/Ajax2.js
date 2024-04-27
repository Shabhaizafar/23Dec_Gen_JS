const btn = document.querySelector('button');

function Access()
{
    var ajax = new XMLHttpRequest();

    ajax.onprogress = function (){
       document.querySelector('pre').innerHTML = this.responseText;
    }
    ajax.open('GET',"Extra.txt",true);
    ajax.send();
}


btn.onclick = Access;