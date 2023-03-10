let myAccount = {
  name: "Maria Moreno",
  expenses: [],

  addExpense: function (description, amount) {
    this.expenses.push({ description: description, amount: amount });
  },
  getAccountSummary: function () {
    let spending = 0;
    this.expenses.forEach(function (expenses) {
      spending += expenses.amount;
    });
    console.log(`Account for ${this.name} has $${spending} in expenses.`);
  },
};

myAccount.addExpense("Monster Energy", 2.5);
console.log(myAccount);

myAccount.addExpense("Starbucks", 4.5);
console.log(myAccount);

myAccount.getAccountSummary();
