import React, { useContext } from 'react';
import '../App.css';
import { Context } from '../Context/ContextApi';

const Balance = () => {
    const { transactions } = useContext(Context);
    // const amount = transactions.map(transaction =>transaction.amount);
    // const total = amount.reduce((acc, item) => (acc += item),0);
    // console.log(typeof(total));


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
        <div className='balance'>
            <h3>Expense Tracker</h3><br />
            <h3>${getIncome() + getExpense()}</h3>

        </div>
    );
}

export default Balance;