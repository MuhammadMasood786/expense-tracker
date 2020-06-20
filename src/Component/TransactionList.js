import React, { useContext } from 'react';
import '../App.css';
import { Context } from '../Context/ContextApi';


const TransactionList = () => {
    let { transactions } = useContext(Context);
    console.log(transactions)

    return (
        <div className="listGroup">
            <ul className="col-md-12">
                {transactions.map((transaction, ind) => {
                    return (
                        <li key={ind}>
                            <span>{transaction.text}</span>
                            <span>{transaction.amount < 0 ? '-' : '+'}${transaction.amount}</span>
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    );
}

export default TransactionList;