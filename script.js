let form = document.querySelector("#task_form");
let taskList = document.querySelector("ul");
let clearBtn = document.querySelector("#clear_task_btn");
let filter = document.querySelector("#task_filter");
let taskInput = document.querySelector("#new_task");

form.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);
clearBtn.addEventListener("click" , clearTask);

// ADD TASK

function addTask(e) {
    if (taskInput.value.trim() === "") {
        alert("Please add a task.");
    } else {
        e.preventDefault();
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(taskInput.value + " "));
        taskList.appendChild(li);
        taskInput.value = "";
        let link = document.createElement("a");
        link.setAttribute("href" , "#");
        link.innerHTML = "x";
        li.appendChild(link);
    }
    
}


// REMOVE TASK

function removeTask(e){

    if(e.target.hasAttribute("href")){
        if(confirm("Are You Sure")){
            let li = e.target.parentElement;
            li.remove();
        }
    }
}

function clearTask(e){
    taskList.innerHTML = "";
}



