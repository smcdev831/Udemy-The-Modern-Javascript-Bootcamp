let myAccount = {
  name: "Sharon Moreno",
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({ description: description, amount: amount });
  },
  addIncome: function (description, amount) {
    this.income.push({ description: description, amount: amount });
  },
  getAccountSummary: function () {
    let spending = 0;
    let incomes = 0;
    this.expenses.forEach(function (expense) {
      spending += expense.amount;
    });
    this.income.forEach(function (funds) {
      incomes += funds.amount;
    });
    console.log(
      `Account for ${
        this.name
      } has $${spending} in expenses, and an income of $${incomes}. The balance is ${
        incomes - spending
      }`
    );
  },
};

myAccount.addExpense("Monster Energy", 2.5);
console.log(myAccount);

myAccount.addExpense("Starbucks", 4.5);
console.log(myAccount);

myAccount.addIncome("Payday", 1600);
console.log(myAccount);

myAccount.addIncome("Bonus", 400);
console.log(myAccount);

myAccount.getAccountSummary();
