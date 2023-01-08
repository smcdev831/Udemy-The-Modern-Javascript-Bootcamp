const todos = [
  "Call John",
  "Practice Javascript",
  "Exercise",
  "Do laundry",
  "Play WoW",
];

//Challenge 1
console.log(`You have ${todos.length} todos.`);
console.log(`Todo: ${todos[0]}`);
console.log(`Todo: ${todos[todos.length - 2]}`);

//Challenge 2
todos.splice(2, 1);
todos.push("Call John again");
todos.shift();
console.log(todos);
