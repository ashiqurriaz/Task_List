
let form = document.querySelector("#task_form");
let taskList = document.querySelector("ul");
let clearBtn = document.querySelector("#clear_task_btn");
let filter = document.querySelector("#task_filter");
let taskInput = document.querySelector("#new_task");

form.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);
clearBtn.addEventListener("click", clearTask);
filter.addEventListener("keyup", filterTask);
document.addEventListener("DOMContentLoaded", getTasks);

// ADD TASK

function addTask(e) {
  if (taskInput.value.trim() === "") {
    alert("Please add a task.");
  } else {
    e.preventDefault();
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput.value + " "));
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "x";
    li.appendChild(link);
    taskList.appendChild(li);
    storeTaskInLocalStorage(taskInput.value);
    taskInput.value = "";
  }
}

// REMOVE TASK

    function removeTask(e) {
    if (e.target.hasAttribute("href")) {
    if (confirm("Are You Sure")) {
        let ele = e.target.parentElement;
        ele.remove();

      removeFromLS(ele);
    }
  }
}

    function clearTask(e) {
    taskList.innerHTML = "";
}
    localStorage.clear();

//filter task

    function filterTask(e) {
     let text = e.target.value.toLowerCase();

    document.querySelectorAll("li").forEach((task) => {
    let item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(text) != -1) {
        task.style.display = "block";
    } 
    else {
        task.style.display = "none";
    }
  });
}

//store in local storage

    function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
  } 
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
  }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

    function getTasks() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
  } 
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
  }

    tasks.forEach((task) => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(task + " "));
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "x";
    li.appendChild(link);
    taskList.appendChild(li);
  });
}

    function removeFromLS(taskItem) {
        let tasks;
            if (localStorage.getItem("tasks") === null) {
                tasks = [];
         } 
         else {
                tasks = JSON.parse(localStorage.getItem("tasks"));
  }

         let li = taskItem;
        li.removeChild(li.lastChild);

        tasks.forEach((task, index) => {
        if (li.textContent.trim() === task) {
                tasks.splice(index, 1);
    }
  });
        localStorage.setItem("tasks", JSON.stringify(tasks));
}
