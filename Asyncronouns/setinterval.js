// setTimeout(function ,time)
// setInterval(function,time)//infinite loop


// function Hello()
// {
//     console.log("Hello");
//     console.log("\n");
// }
// Hello();
// setInterval(Hello,1000);

var f1 = setInterval(getbgcolor,2000);//break


function getbgcolor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    console.log(`rgb(${r},${g},${b})`);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    return `rgb(${r},${g},${b})`;
}

console.log(f1);
function stop(){
    clearInterval(f1);   
    document.body.style.backgroundColor = `rgb(0,0,255)`;
}

