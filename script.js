document.addEventListener('DOMContentLoaded', () => {
    const incomeForm = document.getElementById('income-form');
    const expenseForm = document.getElementById('expense-form');

    let totalIncome = 0;
    let totalExpenses = 0;

    // Handle income form submission
    incomeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const incomeAmount = parseFloat(document.getElementById('income-amount').value);
        totalIncome += incomeAmount;
        updateBudget();
        incomeForm.reset();
    });

    // Handle expense form submission
    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
        totalExpenses += expenseAmount;
        updateBudget();
        expenseForm.reset();
    });

    // Update the budget summary
    function updateBudget() {
        const remainingBudget = totalIncome - totalExpenses;
        document.getElementById('total-income').textContent = totalIncome.toFixed(2);
        document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
        document.getElementById('remaining-budget').textContent = remainingBudget.toFixed(2);
    }
});
