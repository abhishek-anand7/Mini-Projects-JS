const toDoInput = document.querySelector(".toDo-input");
const addBtn = document.querySelector(".add-btn");
const toDoBox = document.querySelector(".toDo-box")

let toDoArray = [];
 
addBtn.addEventListener("click", () => {
  const text = toDoInput.value.trim();

  if (text === "") {
    return;
  }

  const taskText = {
    id: Date.now(),
    text: text,
    completed: false,
  };

  toDoArray.push(taskText);

  toDoInput.value = "";

  renderToDo();
});

function renderToDo() {
  toDoBox.innerHTML = "";

  toDoArray.forEach((taskText) => {
    const taskTextElement = document.createElement("div");
    taskTextElement.classList.add("todo-item");

    taskTextElement.dataset.id = taskText.id;

    taskTextElement.innerHTML = `<span class="${taskText.completed ? "completed" : ""}">${taskText.text}</span>
      <button class="delete-btn">Delete</button>`;

      toDoBox.appendChild(taskTextElement);
  });
}
