// Check if there are tasks in local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display existing tasks
function displayTasks() {
  const taskList = document.querySelector(".listContainer");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
             <span>${task}</span>
             <div class="action">
              <button onclick="editTask(${index})">Edit</button>
              <button onclick="deleteTask(${index})">Delete</button>
             </div>`;
    taskList.appendChild(li);
  });
}

// Add new task
function addTask() {
  const taskInput = document.getElementById("myInput");
  const newTask = taskInput.value.trim();

  if (newTask !== "") {
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    displayTasks();
  }
}

// Edit task
function editTask(index) {
  const updatedTask = prompt("Edit task:", tasks[index]);
  if (updatedTask !== null) {
    tasks[index] = updatedTask.trim();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
}

// Delete task
function deleteTask(index) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (confirmDelete) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
}

displayTasks();
