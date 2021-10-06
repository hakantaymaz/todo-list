const formElement = document.querySelector("#submit");
const addButton = document.querySelector("#add-todo");
const taskList = document.querySelector("#task-list");
const li = document.querySelector("#task");
const input = document.querySelector("#input");
const doneButton = document.querySelector("#done-button");

formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        const newTask = document.createElement('li');
        const newDoneButton = document.createElement('button');
        newTask.innerText = input.value;
        input.value = "";
        newDoneButton.innerText = "Done";
        taskList.appendChild(newTask);
        newTask.appendChild(newDoneButton);
    } else {
        false;
    }
});

taskList.addEventListener('click', function(e){
    if (e.target.tagName === "BUTTON" && e.target.parentElement.lastChild.innerText === "Done"){
            e.target.parentElement.style.setProperty("text-decoration", "line-through");
            e.target.parentElement.lastChild.innerText = "Remove";
            } 
    else if (e.target.tagName === "BUTTON" && e.target.parentElement.lastChild.innerText === "Remove") {
        e.target.parentElement.remove();
    }
    console.log(e);
});

localStorage.setItem('taskList', JSON.stringify(taskList));