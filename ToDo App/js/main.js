const todos = [
  { text: "Call John", completed: false },
  { text: "Practice Javascript", completed: false },
  { text: "Exercise", completed: false },
  { text: "Do laundry", completed: true },
  { text: "Play WoW", completed: false },
];

console.log("This is for the To Do List app");
let newParagraph = document.createElement("p");

let incomplete = todos.filter(function (todo) {
  return !todo.completed;
});

let summary = document.createElement("h3");
summary.textContent = `You have ${incomplete.length} items left on your list`;
document.querySelector("body").appendChild(summary);

todos.forEach((todo) => {
  let listItem = document.createElement("p");
  listItem.textContent = todo.text;
  document.querySelector("body").appendChild(listItem);
});

document.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();
  e.target.textContent = "New To Do Added";
});
