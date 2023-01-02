let convertFahrenheitToCelsius = function (num) {
  console.log((num - 32) * (5 / 9));
};

convertFahrenheitToCelsius(32);
convertFahrenheitToCelsius(68);

//Teacher Solution
convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
};

let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);
