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
