import React, { useContext } from 'react';
import '../App.css';
import { Context } from '../Context/ContextApi';


const Balance = () => {
    const { transactions } = useContext(Context);
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((prevValue, nextValue) => (prevValue += nextValue), 0).toFixed(2);

    return (
        <div className='balance'>
            <h3>Expense Tracker</h3><br />
            <h3>${total}</h3>
        </div>
    );
}

export default Balance;