// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// event listeneres
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


// functions
function addTodo(event){
    console.log("hello");
    // Prevent form from submitting
    event.preventDefault();
    // To do div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // Checked button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    // Append to list
    todoList.appendChild(todoDiv);
    // Clear input value
    todoInput.value = "";

}

function deleteCheck(e) {
    const item = e.target;
    // DELETE
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        // ANIMATION
        todo.classList.add("fall");
        todo.addEventListener('transitionned', function(){
            todo.remove();
        });
    }

    // CHECK
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}