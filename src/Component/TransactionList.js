import React, { useContext } from 'react';
import '../App.css';
import { Context } from '../Context/ContextApi';


const TransactionList = (transaction) => {
    let { transactions, deleteTransaction } = useContext(Context);
    return (
        <div className="listGroup">
            <ul className="col-md-12">
                {transactions.map((transaction) => {
                    return (
                        <li key={transaction.id}>
                            <span className="three">{transaction.text}</span>
                            <span className="Three">${transaction.amount}</span>
                            <i className="fa fa-trash one" onClick={() => deleteTransaction(transaction.id)} aria-hidden="true"></i>
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    );
}

export default TransactionList;