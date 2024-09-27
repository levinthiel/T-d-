const todoInput = document.querySelector("input");
const form = document.querySelector("form");
const todoList = document.querySelector("ul");
const introimg = document.querySelector('[data-js="introimg"]');
const clearlist = document.querySelector('[data-js="clearlistbutton"]');

let toDoNumber = 0;

//Selection of random colors------------------------------------------------------------------------------------ 
const todoColors = [ "#e3e949"," #37c66d" ," #f27942", "#6d87ee" , "#f28fc0", "#f1525d", "#97c9f2", "#0b6cec"]
let previousColor ="";

//Function when submit------------------------------------------------------------------------------------ 
form.addEventListener("submit", (event) => {

    toDoNumber = toDoNumber + 1; //incrementation for number of todos
    event.preventDefault();


    //Create the todo------------------------------------------------------------------------------------
    const newTodoLi = document.createElement("LI");

    newTodoLi.innerHTML = `
        ${todoInput.value} 
        <button class="clearbutton "data-js="clearbutton${toDoNumber}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </button>
    `;

    newTodoLi.classList.add("todo-item");
    introimg.classList.add("hidden");
    clearlist.classList.remove("hidden");
    form.classList.add("formuptop");
    document.body.classList.add("removeintroimg");
    newTodoLi.setAttribute('data-js', `todoLi${toDoNumber}`);

    todoList.append(newTodoLi);

    //Asign random colors------------------------------------------------------------------------------------
    function assignRandomColor() {
        let randomColor = todoColors[Math.floor(Math.random() * todoColors.length)];

        if (randomColor !== previousColor ){
            const createdLi = document.querySelector(`[data-js="todoLi${toDoNumber}"]`);
            createdLi.style.background = `${randomColor}`;
            return previousColor = randomColor;
        }else {
            let otherrandomColor = todoColors[Math.floor(Math.random() * todoColors.length)];
            const createdLi = document.querySelector(`[data-js="todoLi${toDoNumber}"]`);
            createdLi.style.background = `${otherrandomColor}`;
        }
    }
    assignRandomColor();
  



    //Delete the todo------------------------------------------------------------------------------------
    const todoLi = document.querySelector(`[data-js="todoLi${toDoNumber}"]`);
    const clearbutton = document.querySelector(`[data-js="clearbutton${toDoNumber}"]`);

    clearbutton.addEventListener("click", () => {
        todoLi.remove();
    });

    //Finish the todo------------------------------------------------------------------------------------
    todoLi.addEventListener("click", (event) => {
        const TodoLi = document.querySelector(`[data-js="todoLi${toDoNumber}"]`)
        if (event.target.tagName === "LI") {
            todoLi.classList.toggle("todo-item-done");
        }
    });

    event.target.reset();
    todoInput.focus();
});

//clear the list------------------------------------------------------------------------------------
clearlist.addEventListener("click", () => {
    todoList.innerHTML="";
});


