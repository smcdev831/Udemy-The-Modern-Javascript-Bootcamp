const todos = [
  { text: "Call John", completed: false },
  { text: "Practice Javascript", completed: false },
  { text: "Exercise", completed: false },
  { text: "Do laundry", completed: true },
  { text: "Play WoW", completed: false },
];

//Challenge 1
console.log(`You have ${todos.length} todos.`);
// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length - 2]}`);

//Challenge 2
// todos.splice(2, 1);
// todos.push("Call John again");
// todos.shift();
// console.log(todos);

//Challenge 3
// todos.forEach(function (item, index) {
//   console.log(`Todo ${index + 1}: ${item}`);
// });

//Challenge 4
// for (let i = 0; i < todos.length; i++) {
//   console.log(`Todo ${i + 1}: ${todos[i]}`);
// }

//Challenge 5
let deleteTodo = function (todos, task) {
  let index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === task.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

deleteTodo(todos, "Do sports");
console.log(todos);

deleteTodo(todos, "Do laundry");
console.log(todos);
