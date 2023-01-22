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

let filters = {
  searchText: "",
};

let renderNotes = function (notes, filters) {
  let filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    let noteElement = document.createElement("p");
    noteElement.textContent = note.title;
    document.querySelector("#notes").appendChild(noteElement);
  });
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function (e) {
  e.target.textContent = "The button was clicked";
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#for-fun").addEventListener("change", function (e) {
  e.preventDefault();
  console.log(e.target.checked);
});
