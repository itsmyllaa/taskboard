
let taskId = 0;

function createTask(columnId) {
  const taskText = prompt("Enter task title:");
  if (taskText) {
    const task = document.createElement("div");
    task.className = "task";
    task.innerText = taskText;
    task.id = "task-" + taskId++;
    document.getElementById(columnId + "-tasks").appendChild(task);
  }
}
