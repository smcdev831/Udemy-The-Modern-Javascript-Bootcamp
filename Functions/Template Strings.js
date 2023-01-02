let name = "Jen";
name = "Vikram";

let age = 12;

console.log(`Hey, my name is ${name}! I am ${age} years old.`);

let getScoreText = function (name = "Anonymous", score = 0) {
  return `Name: ${name} - Score: ${score}`;
};

//Challenge
let getTip = function (bill, tipPercent = 0.2) {
  let percent = tipPercent * 100;
  let tip = bill * tipPercent;
  let total = bill * tipPercent + bill;
  return `A ${percent}% tip on $${bill} would be $${tip} for a total of $${total}`;
};

console.log(getTip(100));
console.log(getTip(100, 0.3));
console.log(getTip(50, 0.1));
