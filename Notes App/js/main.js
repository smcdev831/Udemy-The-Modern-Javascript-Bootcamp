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

console.log("This is from a different file");

let p = document.querySelector("p");
// p.remove();

let ps = document.querySelectorAll("p");
// ps.forEach(function (p) {
//     p.textContent = "**********";
//     console.log(p.textContent);
//     p.remove();
// });

let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new element from JS";
document.querySelector("body").appendChild(newParagraph);
