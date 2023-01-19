const notes = [
  {
    title: "My next trip",
    body: "John and Karyn in Texas",
  },
  {
    title: "Habits to work on",
    body: "Exercise, eating better, drinking water",
  },
  {
    title: "Goals",
    body: "Finish courses and get a new job",
  },
];

document.querySelector("button").addEventListener("click", function (e) {
  e.target.textContent = "The button was clicked";
});

document.querySelectorAll("button")[1].addEventListener("click", function (e) {
  console.log("Delete all notes");
});
