let myAccount = {
  name: "Sharon Moreno",
  expenses: [],
  income: 0,
};

let addExpense = function (description, amount) {
  this.expenses.push({ description: description, amount: amount });
};

let addIncome = function (account, amount) {
  account.income += amount;
};

let resetAccount = function (account) {
  account.income = 0;
  account.expenses = [];
};

let getAccountSummary = function (account) {
  let spending = 0;
  account.expenses.forEach((amount) => {
    spending += amount;
  });
  let balance = account.income - spending;
  console.log(
    `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
  );
};

addExpense("Monster Energy", 2.5);
console.log(myAccount);

addExpense(myAccount, "Starbucks", 5.5);
console.log(myAccount);

addIncome(myAccount, 1000);
console.log(myAccount);

getAccountSummary(myAccount);

resetAccount(myAccount);
console.log(myAccount);
