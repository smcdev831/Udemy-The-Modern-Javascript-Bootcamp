let myAccount = {
  name: "Sharon Moreno",
  expenses: [],
  addExpense: function (description, amount) {
    this.expenses.push({ description: description, amount: amount });
  },
  getAccountSummary: function () {
    let spending = 0;
    this.expenses.forEach(function (expense) {
      spending += expense.amount;
    });
    let balance = this.income - spending;
    console.log(`Account for ${this.name} has $${spending} in expenses.`);
  },
};

myAccount.addExpense("Monster Energy", 2.5);
console.log(myAccount);

myAccount.addExpense("Starbucks", 5.5);
console.log(myAccount);

myAccount.getAccountSummary();
