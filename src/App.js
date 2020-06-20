import React from 'react';
import './App.css';
import Header from './Component/Header';
import Balance from './Component/Balance';
import ExpenseIncome from './Component/ExpenseIncome';
import History from './Component/History';
import TransactionList from './Component/TransactionList';
import AddTransaction from './Component/AddTransaction';
import { ContextProvider } from './Context/ContextApi';


function App() {
  return (
    <ContextProvider>
      <div className="container">
      <Header/>
      <Balance/>
      <ExpenseIncome/>
      <History/>
      <TransactionList/>
      <AddTransaction/>
      </div>
      </ContextProvider>
  );
}

export default App;
