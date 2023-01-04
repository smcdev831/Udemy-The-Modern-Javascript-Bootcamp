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
