import './style.css';

const apiUrl = 'http://localhost:8080/api/tasks';
const app = document.getElementById('app');

app.innerHTML = `
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">
    <div class="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-2xl">
      <h1 class="text-3xl font-bold text-verde text-center mb-6">📝 Task Board</h1>

      <p id="message" class="text-center text-green-600 font-semibold mb-6 hidden"></p>

      <form id="task-form" class="space-y-5 mb-6">
        <input type="text" id="title" placeholder="Título da tarefa"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-verde" required />

        <input type="text" id="description" placeholder="Descrição"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-verde" required />

        <select id="status"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-verde">
          <option value="Pendente">Pendente</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Concluída">Concluída</option>
        </select>

        <button type="submit"
          class="w-full bg-verde text-white py-2 rounded-md hover:bg-green-700 transition duration-200">
          ➕ Adicionar Tarefa
        </button>

        <button type="button" id="cancel-btn"
          class="hidden w-full border border-gray-300 py-2 rounded-md hover:bg-gray-200 transition duration-200">
          ❌ Cancelar Edição
        </button>
      </form>

      <ul id="task-list" class="space-y-4"></ul>
    </div>
  </div>
`;

let isEditing = false;
let editingTaskId = null;

const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const message = document.getElementById('message');
const cancelBtn = document.getElementById('cancel-btn');

async function fetchTasks() {
    const res = await fetch(apiUrl);
    const tasks = await res.json();
    renderTasks(tasks);
}

function getStatusColor(status) {
    switch (status) {
        case 'Pendente':
            return 'bg-yellow-100 border-yellow-300';
        case 'Em andamento':
            return 'bg-blue-100 border-blue-300';
        case 'Concluída':
            return 'bg-green-100 border-green-300';
        default:
            return 'bg-gray-100 border-gray-300';
    }
}

function renderTasks(tasks) {
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `p-5 border rounded-xl flex justify-between items-start shadow-sm ${getStatusColor(task.status)}`;

        li.innerHTML = `
      <div>
        <h2 class="font-semibold text-lg">${task.title}</h2>
        <p class="text-sm text-gray-600">${task.description}</p>
        <p class="text-xs text-gray-500 mt-1">${task.status}</p>
      </div>
      <div class="space-x-2">
        <button data-id="${task.id}" class="edit-btn text-blue-500 hover:text-blue-700">✏️</button>
        <button data-id="${task.id}" class="delete-btn text-red-500 hover:text-red-700">🗑️</button>
      </div>
    `;

        li.querySelector('.edit-btn').addEventListener('click', () => startEditing(task));
        li.querySelector('.delete-btn').addEventListener('click', () => deleteTask(task.id));

        taskList.appendChild(li);
    });
}

function startEditing(task) {
    isEditing = true;
    editingTaskId = task.id;

    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description;
    document.getElementById('status').value = task.status;

    document.querySelector('button[type="submit"]').textContent = '💾 Salvar Alterações';
    cancelBtn.classList.remove('hidden');
}

cancelBtn.addEventListener('click', () => {
    isEditing = false;
    editingTaskId = null;
    taskForm.reset();
    cancelBtn.classList.add('hidden');
    document.querySelector('button[type="submit"]').textContent = '➕ Adicionar Tarefa';
});

async function handleSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const status = document.getElementById('status').value;

    if (isEditing) {
        const res = await fetch(`${apiUrl}/${editingTaskId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, status })
        });

        if (res.ok) {
            showMessage('✅ Tarefa atualizada com sucesso!');
            isEditing = false;
            editingTaskId = null;
            cancelBtn.classList.add('hidden');
            document.querySelector('button[type="submit"]').textContent = '➕ Adicionar Tarefa';
            taskForm.reset();
            fetchTasks();
        }
    } else {
        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, status })
        });

        if (res.ok) {
            showMessage('✅ Tarefa criada com sucesso!');
            taskForm.reset();
            fetchTasks();
        }
    }
}

async function deleteTask(id) {
    const res = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        showMessage('🗑️ Tarefa removida com sucesso!');
        fetchTasks();
    }
}

function showMessage(text) {
    message.textContent = text;
    message.classList.remove('hidden');
    setTimeout(() => {
        message.classList.add('hidden');
    }, 2500);
}

taskForm.addEventListener('submit', handleSubmit);
fetchTasks();
