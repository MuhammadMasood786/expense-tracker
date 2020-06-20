import React, { useContext } from 'react';
import '../App.css';
import { Context } from '../Context/ContextApi';


const ExpenseIncome = () => {
    const { transactions } = useContext(Context);
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(add => add > 0).reduce((prevValue, nextValue) => (prevValue += nextValue), 0).toFixed(2);
    const expense = amount.filter(add => add < 0).reduce((prevValue, nextValue) => (prevValue += nextValue), 0).toFixed(2);

    return (
        <div className='available'>
            <div>
                <h3 className="colorText">Income</h3><br />
                <h3 className="colorText">${income}</h3>
            </div>
            <div>
                <h3 className="colorText1">Expense</h3><br />
                <h3 className="colorText1">${expense}</h3>
            </div>
        </div>
    );
}

export default ExpenseIncome;