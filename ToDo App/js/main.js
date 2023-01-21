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

//start
let incomplete = todos.filter(function (todo) {
  return !todo.completed;
});

let summary = document.createElement("h3");
summary.textContent = `You have ${incomplete.length} items left on your list`;
document.querySelector("#todos").appendChild(summary);

todos.forEach((todo) => {
  let listItem = document.createElement("p");
  listItem.textContent = todo.text;
  document.querySelector("#todos").appendChild(listItem);
});

//end

document.querySelector("#add-item").addEventListener("click", function (e) {
  e.preventDefault();
  e.target.textContent = "New To Do Added";
});

document.querySelector("#new-item").addEventListener("input", function (e) {
  console.log(e.target.value);
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.serarchText = e.target.value;
});
