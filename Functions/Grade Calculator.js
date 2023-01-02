let gradeCalculator = function (studentScore, totalPossible) {
  let grade = (studentScore / totalPossible) * 100;
  if (grade >= 90) {
    return `You got an A (${grade}%)!`;
  } else if (grade >= 80) {
    return `You got an B (${grade}%)!`;
  } else if (grade >= 70) {
    return `You got an C (${grade}%)!`;
  } else if (grade >= 60) {
    return `You got an D (${grade}%)!`;
  } else {
    return `You got an F (${grade}%)!`;
  }
};

console.log(gradeCalculator(90, 100));
console.log(gradeCalculator(80, 100));
console.log(gradeCalculator(75, 100));
console.log(gradeCalculator(63, 100));
console.log(gradeCalculator(20, 100));
