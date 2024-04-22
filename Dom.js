// - classList,add remove,toggle 
// - add html element using js
// 	 createElement,append,prepend,remove,before,after
// - insertAdjacentHTML
// 	beforebegin,afterbegin,beforeend,afterend
// - clone Node
// - appendChild
// - insertBefore
// - replaceChild
// - removeChild
// - addEventListener
////////////////////////////////////////////////
// querySelector
// tagSelector 

// const element1 = document.getElementsByClassName('header')[0];
// const element2 = document.getElementsByTagName

// console.log(element1.classList);
// remove  TextNode
// console.log(element1.children);

// const query1 = document.querySelector('header .nav');
// console.log(query1.children);

// /////////////////////////////////////

// const ul = document.querySelector('.todo-list');
// console.log(ul);
// console.log(ul.childNodes);
// console.log(ul.children);


// - classList,add,remove,toggle -------------------//

// ul.classList.add('bg-blue');

// ul.classList.remove('bg-blue');
// console.log(ul.classList);

// console.log(ul.classList.toggle('bg-blue')); //true false 

// //////  // - add html element using js -------------------//
// createElement,append,prepend,remove,before,after

// const ul = document.querySelector('.todo-list');
// console.log(ul);

// const li = document.createElement("li");
// const text = document.createTextNode("This is Li");
// li.appendChild(text);

// ul.append(li);
// ul.prepend(li);

// ul.remove(li);

// console.log(ul.childNodes);

// ul.before(li);
// ul.after(li);

////////////////////////////////
// - insertAdjacentHTML
    // 	beforebegin,afterbegin,beforeend,afterend

// const ul = document.querySelector('.todo-list');
// console.log(ul);

// ul.insertAdjacentHTML("beforeend","<li>beforeend</li>");
// ul.insertAdjacentHTML("afterbegin","<li>afterbegin</li>");

// ul.insertAdjacentHTML("beforebegin","<li>beforebegin</li>");
// ul.insertAdjacentHTML("afterend","<li>afterend</li>");


//// - clone Node

// const ul = document.querySelector('.todo-list');
// const li = document.querySelector('.todo-list li');

// console.log(ul);
// const liNew =  li.cloneNode(true);

// ul.appendChild(liNew);
// console.log(ul);


// document.querySelector('main').innerHTML += "All";


// const ul = document.querySelector('.todo-list');
// console.log(ul);

// ul.insertBefore("","HTML");