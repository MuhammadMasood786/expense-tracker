import React, { useContext } from 'react';
import '../App.css';
import { Context } from '../Context/ContextApi';


const ExpenseIncome = () => {
    const { transactions } = useContext(Context);
    // const amounts = transactions.map(transaction => transaction.amount);
    // const income = amounts.filter(add => add > 0).reduce((prevValue, nextValue) => (prevValue += nextValue), 0);
    // const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0);


    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    
    return (
        <div className='available'>
            <div>
                <h3 className="colorText">Income</h3><br/>
                <h3 className="colorText">${getIncome()}</h3>
            </div>
            <div>
                <h3 className="colorText1">Expense</h3><br />
                <h3 className="colorText1">${getExpense()}</h3>
            </div>
        </div>
    );
}

export default ExpenseIncome;