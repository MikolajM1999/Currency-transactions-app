import React from 'react'
import { connect } from 'react-redux'
import TransactionsListItem from './TransactionsListItem'

export const TransactionsList = (props) => (
   <section className="list-of-transactions app__list">
      {props.transactions.length === 0 ? (
         <div className="add-info list-of-transactions__div">
            <span className="add-info__span">Add new transactions.</span>
         </div>
      ) : (
            props.transactions.map((transaction) => {
               return <TransactionsListItem key={transaction.id} {...transaction} euroToPLN={props.euroToPLN} />
            })
         )}
   </section>
)

const mapStateToProps = (state) => ({
   euroToPLN: state.currency.euroToPLN,
   transactions: state.transactions
})

export default connect(mapStateToProps)(TransactionsList)