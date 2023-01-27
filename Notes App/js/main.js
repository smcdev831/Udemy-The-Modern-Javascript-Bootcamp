const notes = [];

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
    63 + 59;
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

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});
