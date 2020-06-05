// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// eventListeners
todoButton.addEventListener('click', addToDo);

// functions
function addToDo(event){
    // prevent form from submitting
    event.preventDefault();
    // ToDo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create li tags
    const newToDo = document.createElement("li");
    newToDo.innerText="hey hey";
    newToDo.classList.add("todo-item");
    todoDiv.appendChild(newToDo);
}