const btn = document.querySelector('button');

btn.addEventListener('click',FetchApi);

function FetchApi(){
    const ajax = new XMLHttpRequest();
    ajax.open("POST","https://dummy.restapiexample.com/api/v1/create",true);
    ajax.getResponseHeader('Content-Type','application/json');

    ajax.onload = function (){
        console.log(this.responseText);
    }

    var Data = `{"name":"test","salary":"123","age":"23"}`;
    ajax.send();
}