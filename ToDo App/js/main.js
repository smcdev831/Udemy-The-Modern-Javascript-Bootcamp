const todos = [
  { text: "Call John", completed: false },
  { text: "Practice Javascript", completed: false },
  { text: "Exercise", completed: false },
  { text: "Do laundry", completed: true },
  { text: "Play WoW", completed: false },
];

console.log("This is for the To Do List app");

let ps = document.querySelectorAll("p");

ps.forEach(function (p) {
  if (p.textContent.includes("laundry")) {
    p.remove();
  }
});
