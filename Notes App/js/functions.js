let getSavedNotes = function () {
  let notesJSON = localStorage.getItem("notes");
  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

let generateNoteDOM = function (note) {
  let noteElement = document.createElement("p");

  if (note.title > 0) {
    noteElement.textContent = note.title;
  } else {
    noteElement.textContent = "Untitled Note";
  }
  return noteElement;
};

let renderNotes = function (notes, filters) {
  let filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    let noteElement = generateNoteDOM(note);
    document.querySelector("#notes").appendChild(noteElement);
  });
};
