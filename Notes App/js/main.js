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
