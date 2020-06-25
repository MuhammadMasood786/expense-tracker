import React, { createContext, useReducer } from 'react';
import TransactionReducer from './Reducer';



//Create InitialState
const initialTransactions = {
    transactions:[]
};

// Create Context
export const Context = createContext(initialTransactions);

// Create Provider
export const ContextProvider = ({ children }) => {

    // Using useReducer
    const [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    // Action
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    return (
        <Context.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </Context.Provider>
    )
}