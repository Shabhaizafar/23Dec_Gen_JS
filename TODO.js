const form = document.querySelector('.form-todo');
const ul = document.querySelector(".todo-list");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = document.querySelector('.form-todo input').value;
    document.querySelector('.form-todo input').value = "";
    const newLi = document.createElement("li");
    const newText = `
    <span class="text">${data}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
    `;
    newLi.innerHTML = newText;
    
    ul.appendChild(newLi);
}
);

ul.addEventListener('click',(e)=>{
    if(e.target.classList.contains('done'))
    {
        const siblings = e.target.parentNode.previousElementSibling;
        siblings.style.textDecoration = "line-through";
        siblings.style.color = "gray";
    }
    else if(e.target.classList.contains('remove'))
    {
        const parentLi = e.target.parentNode.parentNode;
        parentLi.remove();
    }
    else if(e.target.classList.contains('update'))
    {
      const siblings = e.target.parentNode.previousElementSibling;
      var newText = prompt("Enter New Data  :");
      siblings.innerHTML = newText;
    }
});




/*
<form class="form-todo">
        <input type="text" name="" id="" placeholder="Add Todo" />
        input
        <input type="submit" value="Add Todo" class="btn" />
      </form>
*/ 

/*
<ul class="todo-list">
        <li>
          <span class="text">Do this do that</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>
        </li>
      </ul>
*/