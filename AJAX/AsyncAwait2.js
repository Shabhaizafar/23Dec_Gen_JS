// // async function AsyncAwait(){
// //     var n1=12;
// //     // var n2 =13;
// //     return `Value of n1 and N2 is : ${n1},${n2}`;
// // }

// // var output = AsyncAwait();

// // output.then(
// //     //1) success
// //     (get)=>{
// //         console.log(get);
// //     },
// //     //2) error
// //     ()=>{
// //         // console.log("error")
// //     }
// // );


// // output.catch(
// //     //2) error
// //     ()=>{
// //         console.log("error")
// //     }
// // );
// // output.finally(console.log("Hello"));      

// function extra(){
//     var n1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(12>11){
//                 resolve(va12ue1);
//             }
//             else{
//                 reject(0);
//             };
//         }, 5000);
//     });
//     return n1;
// }



// async function Answer(){
//     var ans = await extra();
//     console.log(ans);
// }
// Answer();

// output.then(
//     (response)=>{
//         console.log(response);
//     },
//     (msg)=>{
//         console.log(msg);
//     }
// );

// ---------------------------------------------------
// function asynchronous_operational_method() {
// 	let first_promise = 
// 		new Promise((resolve, reject) => resolve("Hello"));
// 	let second_promise = 
// 		new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(" GeeksforGeeks..");
// 		}, 1000);
// 	});
// 	let combined_promise = 
// 		Promise.all([first_promise, second_promise]);
// 	return combined_promise;
// }

// async function display() {
// 	let data = await  asynchronous_operational_method();
// 	console.log(data);
// }

// display();
