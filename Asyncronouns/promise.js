var Basket = ["oil","clove garlic","onion","carrot","capsicum","sweet corn","tomato","chilli powder","salt","maggi noodles"];

//Promise(mainFunction(funcion1(success),function2(unsuccessfull)))

//promise  create
var myPromise = new Promise((resolve,reject)=>{
    if(Basket.includes("water") && Basket.includes("chilli powder") && Basket.includes("maggi noodles"))
    {
        resolve("Successfully Done.");
    }
    else
    {
        reject("Sorry,unsuccessfull !!");
    }
});
myPromise.then((get)=>{
    console.log(get,"let's Eat Meggie.");
},
(reject)=>{
    console.log(reject,"asdfty");
});