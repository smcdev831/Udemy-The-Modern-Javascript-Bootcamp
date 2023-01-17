console.log("This is for the To Do List app");

let ps = document.querySelectorAll("p");

ps.forEach(function (p) {
  if (p.textContent.includes("laundry")) {
    p.remove();
  }
});
