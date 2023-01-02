let add = function (a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

let getScoreText = function (name = "Anonymous", score = 0) {
  return `Name: ${name} - Score: ${score}`;
};

// console.log(getScoreText());
// console.log(getScoreText("Andrew", 100));

let scoreText = getScoreText();
console.log(scoreText);
