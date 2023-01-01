let greetUser = function () {
  console.log("Welcome user");
};

greetUser();
greetUser();
greetUser();

let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

//Challenge Area

let convertFahrenheitToCelsius = function (num) {
  console.log((num - 32) * (5 / 9));
};

convertFahrenheitToCelsius(32);
convertFahrenheitToCelsius(68);
