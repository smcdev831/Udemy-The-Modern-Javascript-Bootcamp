let myBook = {
  title: "1984",
  author: "Georget Orwell",
  pageCount: 326,
};

let otherBook = {
  title: "A People's History of the United States",
  author: "Howard Zin",
  pageCount: 723,
};

let getSummary = function (book) {
  console.log(
    `${book.title} by ${book.author} is ${book.pageCount} pages long.`
  );
};

getSummary(myBook);
getSummary(otherBook);
