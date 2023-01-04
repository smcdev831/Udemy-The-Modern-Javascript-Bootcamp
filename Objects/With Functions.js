let myBook = {
  title: "1984",
  author: "Georget Orwell",
  pageCount: 326,
};

let otherBook = {
  title: "A People's History of the United States",
  author: "Howard Zinn",
  pageCount: 723,
};

let getSummary = function (book) {
  return {
    summary: `${book.title} is by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long.`,
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);
