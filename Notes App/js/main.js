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

document.querySelector("#create-note").addEventListener("click", function (e) {
  e.target.textContent = "The button was clicked";
});

document.querySelector("#remove-all").addEventListener("click", function (e) {
  document.querySelectorAll(".note").forEach(function (note) {
    note.remove();
  });
});
