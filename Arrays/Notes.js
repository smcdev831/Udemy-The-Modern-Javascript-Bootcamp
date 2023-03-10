// const notes = ["Note 1", "Note 2", "Note 3"];

// console.log(notes);
// console.log(notes.length);
// console.log(notes[2]);
// console.log(notes[22]);
// console.log(notes[notes.length - 1]);

// notes.push("Note 4");
// console.log(notes);
// console.log(notes.length);

// console.log(notes.pop());
// console.log(notes);
// console.log(notes.length);

// notes.shift();
// console.log(notes);
// console.log(notes.length);

// notes.unshift("My First Note");
// console.log(notes);
// console.log(notes.length);

// notes.splice(1, 1);
// console.log(notes);
// console.log(notes.length);

// notes.splice(1, 0, "This is the new second item");
// console.log(notes);
// console.log(notes.length);

// notes.splice(1, 1, "This is the new second item");
// console.log(notes);
// console.log(notes.length);

// notes[2] = "This is now the new note 3";
// console.log(notes);
// console.log(notes.length);

// notes.forEach(function (item, index) {
//   console.log(index);
//   console.log(item);
// });

// for (let count = 0; count <= 2; count++) {
//   console.log(`Counting... ${count}`);
// }

// for (let count = 2; count >= 0; count--) {
//   console.log(`Counting... ${count}`);
// }

// for (let count = 0; count < notes.length; count++) {
//   console.log(notes[count]);
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//   console.log(notes[count]);
// }

// console.log(notes.indexOf("Note 2"));

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

console.log(notes);
console.log(notes.length);

// let index = notes.findIndex(function (note, index) {
//   console.log(note);
//   return note.title === "Habits to work on";
// });
// console.log(index);

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

// let note = findNote(notes, "goAls");
// console.log(note);

// const findNote = function (notes, noteTitle) {
//   const index = notes.find(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

// const findNote = function (notes, noteTitle) {
//   return notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
// };

// let note = findNote(notes, "goAls");
// console.log(note);

// let findNotes = function (notes, query) {
//   return notes.filter(function (note, index) {
//     let isTitleMatch = note.title
//       .toLocaleLowerCase()
//       .includes(query.toLocaleLowerCase());
//     let isBodyMatch = note.body
//       .toLocaleLowerCase()
//       .includes(query.toLocaleLowerCase());
//     return isBodyMatch || isTitleMatch;
//   });
// };

// console.log(findNotes(notes, "ExerCIsE"));

let sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortNotes(notes);
console.log(notes);
