let myAccount = {
  name: "Sharon Moreno",
  expenses: 0,
  income: 0,
};

let otherAccount = myAccount;
otherAccount.income = 1000;

let addExpense = function (account, amount) {
  //   account = {};
  account.expenses += amount;
};

addExpense(myAccount, 2.5);
console.log(myAccount);
console.log(otherAccount);
