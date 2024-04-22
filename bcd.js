{/* <div class="grandparent box">
Grandparent
<div class="parent box">
  Parent
  <div class="child box">Child</div>
</div>
</div> */}

// const body = document.body;
// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');



//capturing

// child.addEventListener('click',()=>{    
//     console.log("Click on Child");
// },true);
// parent.addEventListener('click',()=>{    
//     console.log("Click on parent");
// },true);
// grandparent.addEventListener('click',()=>{    
//     console.log("Click on grandparent");
// },true);
// body.addEventListener('click',()=>{    
//     console.log("Click on body");
// },true);

// // bubbling 
// child.addEventListener('click',()=>{    
//     console.log("Click on Child");
// });
// parent.addEventListener('click',()=>{    
//     console.log("Click on parent");
// });
// grandparent.addEventListener('click',()=>{    
//     console.log("Click on grandparent");
// });
// body.addEventListener('click',()=>{    
//     console.log("Click on body");
// });


// delegation : 


// const btn = document.querySelectorAll('main');

// btn.forEach(element => {
//     element.addEventListener('click',(event)=>{
//         console.log(event.target.textContent);
//     });
// });