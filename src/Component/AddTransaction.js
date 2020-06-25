import React, { useContext, useState } from 'react';
import '../App.css';
import { Context } from '../Context/ContextApi';


const AddTransaction = () => {
    let { addTransaction } = useContext(Context);
    let [text, setText] = useState('');
    let [amount, setAmount] = useState(0);


    const handleAddition = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount:Number(amount)
        }
        addTransaction(newTransaction)
    }


    return (
        <div className="control">
            <div className='history'>
                <h3>Add Transaction</h3><br />
                <hr width="300px" />
            </div>
            <form onSubmit={handleAddition}>
                <div className="form-group col-md-12">
                    <label htmlFor="inputZip">Text</label>
                    <input type="text" className="form-control" value={text} onChange={(ev) => setText(ev.target.value)} placeholder="Enter Discription"></input>
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputZip">Amount <br />(negative - expense, positive - income)</label>
                    <input type="number" value={amount} className="form-control" onChange={(ev) => setAmount(ev.target.value)}  placeholder="0"></input>
                </div>
                <button type="submit" className="btn btn-primary col-lg-12">Add Transaction</button>
            </form>
            
        </div>
    );
}
export default AddTransaction;

