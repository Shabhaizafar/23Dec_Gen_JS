// let fetchBtn = document.querySelector('button');
// fetchBtn.addEventListener('click', buttonClickHandler);

// function buttonClickHandler() {
//      console.log('You have clicked the fetchBtn');
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
//     xhr.getResponseHeader('Content-type', 'application/json');

//     // // What to do when response is ready
//     xhr.onload = function () {
//         if(this.status === 200){

//             console.log(this.responseText);
//         }
//         else{
//             console.log("Some error occured");
//         }
//     }
//     // // send the request
//     params = `{"name":"test34sad54234565","salary":"12234563","age":"230"}`;
//     xhr.send(params);
//     console.log("We are done!");
// }


// let popBtn = document.getElementById('popBtn');
// popBtn.addEventListener('click', popHandler);

// function popHandler() {
//     console.log('You have clicked the pop handler');

//     // Instantiate an xhr object
//     const xhr = new XMLHttpRequest();

//     // Open the object
//     xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


//     // What to do when response is ready
//     xhr.onload = function () {
//         if(this.status === 200){
//             let obj = JSON.parse(this.responseText);
//             console.log(obj);
//             let list = document.getElementById('list');
//             str = "";
//             for (key in obj)
//             {
//                 str += `<li>${obj[key].employee_name} </li>`;
//             }
//             list.innerHTML = str;
//         }
//         else{
//             console.log("Some error occured")
//         }
//     }

//     // send the request
//     xhr.send();
//     console.log("We are done fetching employees!");
    
// }

