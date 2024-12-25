const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector(".list");

const inputHandler = function(){
    const newTask = input.value;
    if(newTask.length == 0){
        return;
    }

    const taskElem = createTask(newTask);

    taskList.appendChild(taskElem);
    input.value = "";

    const deleteBtn = taskElem.children[1];
    deleteBtn.addEventListener("click", function(){
        taskElem.remove();
    })

    const EditBtn = taskElem.children[2];
    EditBtn.addEventListener("click", function(){
        const name = prompt("Write updated task:");
        taskElem.children[0].textContent = name;
    })
}

function createTask(newTask){
    const div = document.createElement("div");
    const li = document.createElement("li");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    button1.innerText = "Delete";
    button2.innerText = "Edit";
    li.textContent = newTask;

    div.appendChild(li);
    div.appendChild(button1);
    div.appendChild(button2);
    return div;
}

button.addEventListener("click", inputHandler);