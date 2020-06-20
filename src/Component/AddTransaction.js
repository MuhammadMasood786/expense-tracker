import React,{ useContext, useState } from 'react';
import '../App.css';
import { Context } from '../Context/ContextApi';


const AddTransaction = () => {
    let { AddTransaction } = useContext(Context);
    let [decs,setText] = useState('');
    let [price,setPrice] = useState('');
    const handleAddition = (event) =>{
        event.preventDefault();
        AddTransaction({
            amount:price,
            text:decs
        })
    }

    return (
        <div className ="control">
            <div className='history'>
                <h3>Add Transaction</h3><br />
                <hr width="300px" />
            </div>
            <form onSubmit={handleAddition}>
                <div className="form-group col-md-12">
                    <label htmlFor="inputZip">Text</label>
                    <input type="text" className="form-control" onChange={(ev)=>setText(ev.target.value)}  placeholder="Enter Discription"></input>
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputZip">Amount</label>
                    <input type="number" className="form-control" onChange={(ev)=>setPrice(ev.target.value)} i placeholder="0"></input>
                </div>
                <button type="submit" onClick={AddTransaction} className="btn btn-primary col-lg-12">Add Transaction</button>
            </form>
        </div>
    );
}
export default AddTransaction;


