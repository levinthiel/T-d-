// SELECT DOM ELEMENTS
const todoInput = document.querySelector("input");
const todoList = document.querySelector("ul");
const form = document.querySelector("form");

// CREATE CLICK EVENT LISTNER FOR SUBMIT BUTTON
form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevents default form submit behaviour

    // create a new todo li
    const newTodoLi = document.createElement("li");

    // set text content of new todo li to the value of input
    newTodoLi.textContent = todoInput.value;

    // add todo-item class to new todo li
    newTodoLi.classList.add("todo-item");

    // append the new todo li to the todo list ul
    todoList.append(newTodoLi);

    // empty the input field and refocus
    todoInput.value = "";
    todoInput.focus();
});

// CREATE CLICK EVENT LISTENER FOR ALL TODO LIST
todoList.addEventListener("click", (e) => {
    // if the clicked element is a todo li ->
    if (e.target.tagName === "LI") {
        e.target.remove(); // deletes todo li
    }
});
