import React from 'react'
import { connect } from 'react-redux'
import { removeTransaction } from '../actions/transactions'

export const TransactionListItem = ({ name, euro, id, euroToPLN, removeTransaction }) => {
   const onClick = () => {
      removeTransaction(id)
   }
   return (
      <div className="transaction-list-item-div">
         <p className="transaction-list-item-div__p">{name === '' ? 'unnamed' : name}</p>
         <p className="transaction-list-item-div__p">{Math.round(euro * 100) / 100} EURO = {Math.round(euro * euroToPLN * 100) / 100} PLN</p>
         <button className="transaction-list-item-div__button" onClick={onClick}>remove</button>
      </div>
   )
}

const mapDispatchToProps = (dispatch) => ({
   removeTransaction: (id) => dispatch(removeTransaction(id))
})

export default connect(undefined, mapDispatchToProps)(TransactionListItem)