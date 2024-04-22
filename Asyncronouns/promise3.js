// var value = 12;
// var myPromise = new Promise((resolve,reject)=>{
//     if(value==1)
//     {   
//         resolve("Done");
//     }
//     else
//     {
//         reject("Unsuccessful");
//     }
// });

// myPromise.then((get)=>{console.log(get)}).catch((err)=>{console.log(err)});

// // myPromise.

// const btn = document.querySelector('button');

// btn.addEventListener('click',mainFu);

// var count = 0;
// function mainFu(){
//     count++;
//     return new Promise((resolve,reject)=>{
//         if(count>=2)
//         {
//             resolve(`Counter cross ${count}`);
//         }
//         else
//         {
//             reject("Please wait until Counter reach 2.");
//         }
//     }).then((get)=>{
//         document.querySelector('h1').innerHTML = get;
//     }).catch((err)=>{
//         document.querySelector('h1').innerHTML = err;
//     });
// }

////////////////////////////
// chat gpt 1 
// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation, for example, fetching data from an API
    setTimeout(() => {
      const data = {
        message: "Promise resolved successfully!",
        status: 2200
      };
      const error = {
        message: "",
      };
      // Resolving the promise with data
      if(data.status==200)
      {
        resolve(data);
      }
      else
      {
        reject("asdf");
      }
  
      // Rejecting the promise if an error occurs
      // reject(new Error("Something went wrong!"));
    }, 2000);
  });
  // Using the promise
  myPromise.then((data) => {
    console.log(data.message); // Output: Promise resolved successfully!
  },(err) => {
    console.error(err); // Output if promise is rejected: Something went wrong!
  });

////////////////////////////////////////////////////


// promise   : array [12345678];
//use  : 
//resolve : page url destination
// location.href = ""
//reject : page html 404  redirect 


// location.href = 