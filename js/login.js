const hello = document.querySelector("#hello");
const login_form = document.querySelector("#login_form");
const id_input = login_form.querySelector("input");
const NAME_KEY = "name";

login_form.addEventListener("submit", handleIdbtn);
function handleIdbtn(event) {
  event.preventDefault();

  localStorage.setItem(NAME_KEY, id_input.value);
  hello.innerText = `Hello ${id_input.value}`;

  hiddenIdform();
}

if (localStorage.getItem(NAME_KEY) != null) {
  hiddenIdform();
  hello.innerText = `Hello ${localStorage.getItem(NAME_KEY)}`;
}

function hiddenIdform() {
  login_form.classList = "hidden";
  id_input.innerText = "";
}
