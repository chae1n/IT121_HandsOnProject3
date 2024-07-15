//Declare variables using var, let, and const
const taskTable = document
  .getElementById("taskTable")
  .getElementsByTagName("tbody")[0];
const addTaskButton = document.getElementById("addTaskButton");
const removeTaskButton = document.getElementById("removeTaskButton");
const taskNameInput = document.getElementById("taskName");
const taskDateInput = document.getElementById("taskDate");

//Initialize tasks list
let list = [];

//Create three task items
const task1 = {
  name: "Complete Internship Resume",
  date: "07/27/24",
};

const task2 = {
  name: "Complete TIA Certification",
  date: "08/30/24",
};

const task3 = {
  name: "Submit Job Application",
  date: "03/09/25",
};

//Add the tasks to the array
list.push(task1, task2, task3);

//Function to add a new task
function addTask() {
  const nameToAdd = taskNameInput.value.trim();
  const dateToAdd = taskDateInput.value.trim();

  if (nameToAdd && dateToAdd) {
    const newTask = { name: nameToAdd, date: dateToAdd };
    list.push(newTask); // Add new task to list
    displayList(); // Update table
    taskNameInput.value = "";
    taskDateInput.value = "";
  } else {
    alert("Please fill in both task name and date fields.");
  }
}

//Function to remove selected tasks
function removeSelectedTasks() {
  const checkboxes = taskTable.querySelectorAll('input[type="checkbox"]:checked');

  //Create a new array to store tasks to be removed
  let tasksToRemove = [];
  checkboxes.forEach((checkbox) => {
    const index = checkbox.dataset.index;
    tasksToRemove.push(index);
  });

  //Remove tasks from list in reverse order to avoid index issues
  for (let i = tasksToRemove.length - 1; i >= 0; i--) {
    list.splice(tasksToRemove[i], 1);
  }

  displayList();
}

//Function to mark a task as completed
function completeTask(index) {
  console.log(`Task ${index} marked as completed.`);
}

//Function to display list data in table
function displayList() {
  taskTable.innerHTML = "";
  list.forEach((task, index) => {
    const row = taskTable.insertRow();

    //Name cell
    const nameCell = row.insertCell(0);
    nameCell.textContent = task.name;

    //Date cell
    const dateCell = row.insertCell(1);
    dateCell.textContent = task.date;

    //Checkbox cell
    const checkboxCell = row.insertCell(2);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.index = index; // Store the index of the task in dataset
    checkboxCell.appendChild(checkbox);
  });
}

//Add event listeners
addTaskButton.addEventListener("click", addTask);
removeTaskButton.addEventListener("click", removeSelectedTasks);

//Initial display of tasks
displayList();

