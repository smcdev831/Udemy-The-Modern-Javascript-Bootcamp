const notes = ["Note 1", "Note 2", "Note 3"];

console.log(notes);
console.log(notes.length);
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

notes.forEach(function (item, index) {
  console.log(index);
  console.log(item);
});
