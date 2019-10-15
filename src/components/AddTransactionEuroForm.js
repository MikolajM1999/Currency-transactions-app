import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { addTransaction } from '../actions/transactions'
import allTransactionsSummary from '../selectors/allTransactionsSummary'

export const AddTransactionEuroForm = (props) => {
   const [error, setError] = useState('')
   const [name, setName] = useState('')
   const [euro, setEuro] = useState('')
   const onInputNameChange = (e) => {
      setName(e.target.value)
   }
   const onInputValueChange = (e) => {
      const value = e.target.value
      if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
         setEuro(value)
      }
   }
   const onSubmit = (e) => {
      e.preventDefault()
      if (euro === '') {
         setError('Fill in EURO amount at least!')
      } else {
         props.addTransaction(name.trim(), euro)
         setName('')
         setEuro('')
         setError('')
      }
   }
   return (
      <section className="summary-section app__summary-section">
         <div className="transaction-section summary-section__transaction-section">
            <p className="transaction-section__p">Add new transaction:</p>
            <form className="form-add transaction-section__form" onSubmit={onSubmit}>
               <input className="form-add__input" type="text" placeholder="name" value={name} onChange={onInputNameChange} />
               <input className="form-add__input" type="text" placeholder="EURO" value={euro} onChange={onInputValueChange} />
               <button className="form-add__button">Add the transaction</button>
            </form>
            {error && <p className="transaction-section__error">{error}</p>}
            <p className="transaction-section__p">All transactions summary:</p>
            <p className="transaction-section__p">EURO: {Math.round(props.summaryObject.inEURO * 100) / 100}</p>
            <p className="transaction-section__p">PLN: {Math.round(props.summaryObject.inPLN * 100) / 100}</p>
         </div>
      </section>
   )
}

const mapStateToProps = (state) => ({
   summaryObject: allTransactionsSummary(state.transactions, state.currency.euroToPLN)
})

const mapDispatchToProps = (dispatch) => ({
   addTransaction: (name, euro) => dispatch(addTransaction({ name, euro, id: uuid() }))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTransactionEuroForm)