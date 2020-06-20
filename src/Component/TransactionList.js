import React, { useContext } from 'react';
import '../App.css';
import { Context } from '../Context/ContextApi';


const TransactionList = () => {
    let { transactions, DeleteTransaction } = useContext(Context);
    return (
        <div className="listGroup">
            <ul className="col-md-12">
                {transactions.map((transaction, ind) => {
                    return (
                        <li key={ind}>
                            <span className="three">{transaction.text}</span>
                            <span className="Three">${transaction.amount}</span>
                            <i className="fa fa-trash one" onClick={() => DeleteTransaction(transaction.id)} aria-hidden="true"></i>
                            <i className="fa fa-pencil one" aria-hidden="true"></i>
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    );
}

export default TransactionList;