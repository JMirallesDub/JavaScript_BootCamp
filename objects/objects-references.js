let myAccount = {
    name: 'Jose Miralles',
    expenses: 0,
    income: 0
};

let addExpense = function(account, amount){
    account.expenses = account.expenses + amount;
};

// addIncome

// resetAccount

// getaccountSummary

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount

let addIncome = function(account, amount){
    account.income = account.income + amount;
};

let getAccountSummary = function(account){
    let balance = account.income - account.expenses;
    return `The balance of the account of ${account.name} is ${balance}. The expenses are ${account.expenses} and the incomes are ${account.income}.`
};

let resetAccount = function(account){
    account.income = 0
    account.expenses = 0
};

addIncome(myAccount, 1000);
addExpense(myAccount, 300);
addExpense(myAccount, 100);

console.log(getAccountSummary(myAccount));

resetAccount(myAccount);
console.log(getAccountSummary(myAccount));