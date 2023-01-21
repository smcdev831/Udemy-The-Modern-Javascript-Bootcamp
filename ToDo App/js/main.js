const todos = [
  { text: "Call John", completed: false },
  { text: "Practice Javascript", completed: false },
  { text: "Exercise", completed: false },
  { text: "Do laundry", completed: true },
  { text: "Play WoW", completed: false },
];

console.log("This is for the To Do List app");
let newParagraph = document.createElement("p");

let filters = {
  serarchText: "",
};

let renderTodos = function (todos, filters) {
  let filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.serarchText.toLowerCase());
  });

  let incomplete = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";

  let summary = document.createElement("h3");
  summary.textContent = `You have ${incomplete.length} items left on your list`;
  document.querySelector("#todos").appendChild(summary);

  filteredTodos.forEach((todo) => {
    let listItem = document.createElement("p");
    listItem.textContent = todo.text;
    document.querySelector("#todos").appendChild(listItem);
  });
};

renderTodos(todos, filters);

document.querySelector("#add-item").addEventListener("click", function (e) {
  e.preventDefault();
  e.target.textContent = "New To Do Added";
});

document.querySelector("#new-item").addEventListener("input", function (e) {
  console.log(e.target.value);
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.serarchText = e.target.value;
  renderTodos(todos, filters);
});
