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
});


