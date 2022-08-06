import React from 'react'
import css from './TransactionHistory.module.css'
import PropTypes from "prop-types";

const TransactionHistory = ({transactions}) => {
return <table className={css.table}>
<thead>
  <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
  </tr>
</thead>

<tbody>
{transactions.map((transaction)=>{ 
    return <tr key={transaction.id}>
    <td>{transaction.type}</td>
    <td>{transaction.amount}</td>
    <td>{transaction.currency}</td>
  </tr>
})}
</tbody>
</table>   

}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape(
    {id: PropTypes.string,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired})).isRequired
}

export default TransactionHistory
