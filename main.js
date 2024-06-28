//Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('tasklist');

// Add event listener to the "Add" button
addBtn.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="deleteBtn">Delete</button>`;
        taskList.appendChild(taskItem);
        taskInput.value = "";
        addDeleteEventListener(taskItem);
    }
}

// Function to add event listener to the delete button of each task
function addDeleteEventListener(taskItem) {
    const deleteBtn = taskItem.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });
}


// // Get elements from the DOM
// const taskInput=document.getElementById('taskInput');
// const addBtn=document.getElementById('addBtn');
// const 