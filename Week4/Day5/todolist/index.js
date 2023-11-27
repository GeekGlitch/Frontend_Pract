// const itemsArray = localStorage.getItem("items")
//   ? JSON.parse(localStorage.getItem("items"))
//   : [];

// document.querySelector("#enter").addEventListener("click", () => {
//   const item = document.querySelector("#item");
//   createItem(item);
// });

// document.querySelector("#item").addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     const item = document.querySelector("#item");
//     createItem(item);
//   }
// });

// function displayDate() {
//   let date = new Date();
//   date = date.toString().split(" ");
//   date = date[1] + " " + date[2] + " " + date[3];
//   document.querySelector("#date").innerHTML = date;
// }

// function displayItems() {
//   let items = "";
//   for (let i = 0; i < itemsArray.length; i++) {
//     items += `<div class="item">
//                 <div class="input-controller">
//                   <textarea disabled>${itemsArray[i]}</textarea>
//                   <div class="edit-controller">
//                     <i class="fa-solid fa-check deleteBtn"></i>
//                     <i class="fa-solid fa-pen-to-square editBtn"></i>
//                   </div>
//                 </div>
//                 <div class="update-controller">
//                   <button class="saveBtn">Save</button>
//                   <button class="cancelBtn">Cancel</button>
//                 </div>
//               </div>`;
//   }
//   document.querySelector(".to-do-list").innerHTML = items;
//   activateDeleteListeners();
//   activateEditListeners();
//   activateSaveListeners();
//   activateCancelListeners();
// }

// function activateDeleteListeners() {
//   let deleteBtn = document.querySelectorAll(".deleteBtn");
//   deleteBtn.forEach((dB, i) => {
//     dB.addEventListener("click", () => {
//       deleteItem(i);
//     });
//   });
// }

// function activateEditListeners() {}

// function activateSaveListeners() {}

// function activateCancelListeners() {}

// function createItem(item) {
//   itemsArray.push(item.value);
//   localStorage.setItem("items", JSON.stringify(itemsArray));
//   location.reload();
// }

// function deleteItem(i) {
//   itemsArray.splice(i, 1);
//   localStorage.setItem("items", JSON.stringify(itemsArray));
//   location.reload();
// }

// function updateItem(text, i) {
//   itemsArray[i] = text;
//   localStorage.setItem("items", JSON.stringify(itemsArray));
//   location.reload();
// }

// window.onload = function () {
//   displayDate();
//   displayItems();
// };
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

// Initial display
displayTasks();
