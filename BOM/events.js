// Mouse events:
// Event-Performed	Event Handler	    Description
// click	        onclick	            When mouse click on an element
// mouseover	    onmouseover     	When the cursor of the mouse comes over the element
// mouseout     	onmouseout	        When the cursor of the mouse leaves an element
// mousedown	    onmousedown     	When the mouse button is pressed over the element
// mouseup	        onmouseup	        When the mouse button is released over the element
// mousemove	    onmousemove	        When the mouse movement takes place.


// var h1 = document.querySelector('h1');

//onmouseenter
// h1.onmouseover =  function(){
//     document.querySelector('h1').style.color = "Red";
// };


// // onmouseleave
// h1.onmouseout = function (){
//     document.querySelector('h1').style.color = "green";
// }


// h1.onmousedown = function (){
//         document.querySelector('h1').style.color = "skyblue";
//     }

// h1.onmouseup = function (){
//         document.querySelector('h1').style.color = "orange";
//     }
// h1.onmousemove = function (){
//         document.querySelector('h1').style.color = "yellow";
//     }



/////////////////////////////////
// Keyboard events:
// Event Performed	    Event Handler	        Description
// Keydown & Keyup	    onkeydown & onkeyup	    When the user press and then release the key

var input = document.querySelector('input');

input.onkeydown = function (){
    console.log(input.value);
}