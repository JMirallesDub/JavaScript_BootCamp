const account = {
    name: 'Jose Miralles',
    expenses: [],
    incomes: [],
    addExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount){
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let totalExpenses = 0;
        let totalIncomes = 0;
        let totalBalance = 0;
        this.incomes.forEach(function(income){
            totalIncomes = totalIncomes + income.amount;
        })
        this.expenses.forEach(function(expense) {
            totalExpenses = totalExpenses + expense.amount;
        });
        totalBalance = totalIncomes - totalExpenses;
        return `${this.name} has a balance of ${totalBalance}.`
    }
};


account.addExpense('Rent', 950);
account.addExpense('Coffe', 2);
account.addIncome("Salary", 3500);

console.log(account.getAccountSummary());