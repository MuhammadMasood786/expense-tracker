const TransactionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transaction: [action.transaction, ...state]
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transaction:state.transaction.filter((transaction)=>transaction.id !== action.payload )
            }
        default:
            break;
    }
}

export default TransactionReducer;