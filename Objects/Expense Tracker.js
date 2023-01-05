let myAccount = {
  name: "Sharon Moreno",
  expenses: 0,
  income: 0,
};

let addExpense = function (account, amount) {
  account.expenses += amount;
};

let addIncome = function (account, amount) {
  account.income += amount;
};

let resetAccount = function (account) {
  account.income = 0;
  account.expenses = 0;
};

let getAccountSummary = function (account) {
  let total = account.income - account.expenses;
  console.log(
    `Account for ${account.name} has ${total}. ${account.income} in income. ${account.expenses} in expenses.`
  );
};

addExpense(myAccount, 2.5);
console.log(myAccount);

addIncome(myAccount, 1000);
console.log(myAccount);

getAccountSummary(myAccount);

resetAccount(myAccount);
console.log(myAccount);
