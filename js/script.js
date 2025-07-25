let todos = [];

function addTodo() {
  const task = document.getElementById('todoInput').value.trim();
  const date = document.getElementById('dateInput').value;

  if (task === '' || date === '') {
    alert('Please fill in both fields.');
    return;
  }

  todos.push({ task, date, status: 'Pending' });
  renderTodos();
  clearInputs();
}

function renderTodos() {
  const list = document.getElementById('todoList');
  list.innerHTML = '';

  if (todos.length === 0) {
    list.innerHTML = '<tr><td colspan="4">No task found</td></tr>';
    return;
  }

  todos.forEach((todo, index) => {
    const row = `
      <tr>
        <td>${todo.task}</td>
        <td>${todo.date}</td>
        <td>${todo.status}</td>
        <td>
          <button onclick="markDone(${index})">Done</button>
          <button onclick="deleteTodo(${index})">Delete</button>
        </td>
      </tr>
    `;
    list.innerHTML += row;
  });
}

function clearInputs() {
  document.getElementById('todoInput').value = '';
  document.getElementById('dateInput').value = '';
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function deleteAll() {
  if (confirm('Are you sure you want to delete all todos?')) {
    todos = [];
    renderTodos();
  }
}

function markDone(index) {
  todos[index].status = 'Done';
  renderTodos();
}

function filterTodos() {
  const filtered = todos.filter(todo => todo.status !== 'Done');
  const list = document.getElementById('todoList');
  list.innerHTML = '';

  if (filtered.length === 0) {
    list.innerHTML = '<tr><td colspan="4">No pending tasks</td></tr>';
    return;
  }

  filtered.forEach((todo, index) => {
    const row = `
      <tr>
        <td>${todo.task}</td>
        <td>${todo.date}</td>
        <td>${todo.status}</td>
        <td>
          <button onclick="markDone(${index})">Done</button>
          <button onclick="deleteTodo(${index})">Delete</button>
        </td>
      </tr>
    `;
    list.innerHTML += row;
  });
}
