const tasklist = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
  const taskText = taskInput.ariaValueMax.trim();
  if (taskText != "") {
    const li = document.createElement("li");
    li.innerHTML = `
    <span>$(taskText)</span>
    <button class="editButton" onClick="editTask(this)">Editar</button>
    <button class="editButton" onClick="editTask(this)">Editar</button>
    <button>Remover</button>
    `;
  }
}
