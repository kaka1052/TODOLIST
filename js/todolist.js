const todo_form = document.querySelector("#todo_form");
const todo_text = todo_form.querySelector("input");
const list_form = document.querySelector("#list_form");
let todos = [];
const TODO_KEY = "todo";

todo_form.addEventListener("submit", handleTodo);
function handleTodo(params) {
  params.preventDefault();

  const data = {
    text: todo_text.value,
    id: new Date().getTime(),
  };

  todos.push(data);

  todo_text.value = "";
  saveTolocal();
  displayList(data);
}

function saveTolocal() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

const savedList = JSON.parse(localStorage.getItem(TODO_KEY));
if (savedList !== null) {
  todos = savedList;
  todos.forEach(displayList);
}

function displayList(data) {
  const li_todo = document.createElement("li");
  const sp_todo1 = document.createElement("button");
  const sp_todo2 = document.createElement("span");

  li_todo.appendChild(sp_todo1);
  li_todo.appendChild(sp_todo2);
  li_todo.id = data.id;
  list_form.appendChild(li_todo);

  sp_todo1.innerText = "❌";
  sp_todo1.className = "btn_none";
  sp_todo2.innerText = ` ${data.text}`;

  sp_todo1.addEventListener("click", handleTodolist);
}

function handleTodolist(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((res) => parseInt(li.id) !== res.id);
  saveTolocal();
}
