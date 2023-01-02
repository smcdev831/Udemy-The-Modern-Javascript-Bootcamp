let gradeCalculator = function (studentScore, totalPossible) {
  let grade = (studentScore / totalPossible) * 100;
  if (grade >= 90) {
    letterGrade = "A";
  } else if (grade >= 80) {
    letterGrade = "B";
  } else if (grade >= 70) {
    letterGrade = "C";
  } else if (grade >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return `You got an ${letterGrade} (${grade}%)!`;
};

console.log(gradeCalculator(90, 100));
console.log(gradeCalculator(80, 100));
console.log(gradeCalculator(75, 100));
console.log(gradeCalculator(63, 100));
console.log(gradeCalculator(20, 100));
