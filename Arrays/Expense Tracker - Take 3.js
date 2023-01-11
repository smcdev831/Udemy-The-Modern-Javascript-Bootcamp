let myAccount = {
  name: "Maria Moreno",
  expenses: [],
  addExpense: function (description, amonut) {
    this.expenses.push({ description: description, amount: amonut });
  },
  getAccountSummary: function () {
    let spending = 0;
    this.expenses.forEach(expense);
    spending += expense.amount;
  },
};

myAccount.addExpense("Monster Energy", 2.5);
console.log(myAccount);

myAccount.addExpense("Starbucks", 4.5);
console.log(myAccount);

myAccount.getAccountSummary();
