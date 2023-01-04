let myBook = {
  title: "1984",
  author: "Georget Orwell",
  pageCount: 326,
};

console.log(myBook);
console.log(myBook.title);
console.log(
  `${myBook.title} by ${myBook.author} is ${myBook.pageCount} pages long.`
);

myBook.title = "Animal Farm";
console.log(myBook);

//Challenge Area

let person = {
  name: "John",
  age: 39,
  location: "Scotland",
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

person.age = person.age + 1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
