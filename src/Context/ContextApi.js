import React, { createContext, useReducer } from 'react';
import TransactionReducer from './Reducer';

const initialTransactions = [
    { id: 0, text: 'Gas Bill', amount: -450 },
    { id: 1, text: 'Salary', amount: 15000 },
    { id: 2, text: 'Camera', amount: -500 }
];

export const Context = createContext(initialTransactions);


export const ContextProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function AddTransaction(Transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: {
                amount: Transaction.amount,
                text: Transaction.text
            },
        })
    }
    function DeleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    return (
        <Context.Provider value={{
            transactions: state.transactions,
            DeleteTransaction,
            AddTransaction
        }}>
            {children}
        </Context.Provider>
    )
}