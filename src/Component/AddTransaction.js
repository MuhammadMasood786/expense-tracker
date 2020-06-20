import React from 'react';
import '../App.css';


const AddTransaction = () => {
    return (
        <div classNameName="control">
            <div className='history'>
                <h3>Add Transaction</h3><br />
                <hr width="300px" />
            </div>
            <form>
                <div className="form-group col-md-12">
                    <label for="inputZip">Text</label>
                    <input type="text" className="form-control" id="inputZip" placeholder="Enter Discription"></input>
                </div>
                <div className="form-group col-md-12">
                    <label for="inputZip">Amount</label>
                    <input type="number" className="form-control" id="inputZip" placeholder="0"></input>
                </div>
                <button type="submit" class="btn btn-primary col-lg-12">Add Transaction</button>
            </form>
        </div>
    );
}
export default AddTransaction;


