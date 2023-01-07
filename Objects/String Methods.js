let name = "Sharon Moreno";

console.log(name.length);

//Convert to uppercase
console.log(name.toUpperCase());

//Convert to lowercase
console.log(name.toLowerCase());

//Includes
let password = "ABC123Password098";
console.log(name.includes("Password"));
console.log(password.includes("Password"));

//Trim
name = "   Sharon Moreno   ";
cleanName = name.trim();
console.log(name.length);
console.log(cleanName.length);

//Challenge Area

let isValidPassword = function (password) {
  return password.length > 8 && !password.includes("password");
};

console.log(isValidPassword("asdfp"));
console.log(isValidPassword("abc123!@#$%^&"));
console.log(isValidPassword("asdfpasdfpoijpassword"));
