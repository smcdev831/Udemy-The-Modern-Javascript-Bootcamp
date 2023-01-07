let num = 103.941;

//To fixed
console.log(num.toFixed(2));
console.log(num.toFixed(1));
console.log(num.toFixed(10));

//Math Rounding

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

//Math Random
let min = 10;
let max = 20;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

//Challenge area

let makeGuess = function (guess) {
  let min = 1;
  let max = 5;
  let randomNumber = Math.floor(Math.random() * max - min + 1) + min;
  console.log(randomNumber);
  return guess === randomNumber;
};

console.log(makeGuess(1));
console.log(makeGuess(2));
console.log(makeGuess(3));
console.log(makeGuess(4));
console.log(makeGuess(5));
