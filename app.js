// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// eventListeners
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);

// functions
function addToDo(event){
    // prevent form from submitting
    event.preventDefault();
    // ToDo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create li tags
    const newToDo = document.createElement("li");
    newToDo.innerText=todoInput.value;
    newToDo.classList.add("todo-item");
    todoDiv.appendChild(newToDo);
    // checked button
    const completedButton = document.createElement("button");
    completedButton.innerHTML= '<li class="fas fa-check"> </li>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // checked trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML= '<li class="fas fa-trash"></li>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to the list
    todoList.appendChild(todoDiv);
    //clear the input after submitting
    todoInput.value="";
}

function deleteCheck(e){
    const item=e.target;
    //delete to-do list
    if(item.classList[0] === 'trash-btn'){
        todoInput.value.remove();
    }
    
}