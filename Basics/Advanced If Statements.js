let isAccountLocked = false;
let userRole = "Admin";

if (isAccountLocked === true) {
  console.log("This account is locked");
} else if (userRole === "Admin") {
  console.log("Welcome Admin!");
} else {
  console.log("Welcome!");
}

//Challenge
let temp = 45;

if (temp <= 32) {
  console.log("It is freezing outside.");
} else if (temp >= 110) {
  console.log("It is way too outside!");
} else {
  console.log("It is fine to go outside.");
}
