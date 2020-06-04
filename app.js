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
    console.log("hello") ;
}