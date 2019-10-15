import React from 'react'
import { connect } from 'react-redux'
import selectTheBiggestTransaction from '../selectors/selectTheBiggestTransaction'

export const TheBiggestTransaction = ({ theTransaction, euroToPLN }) => (
   <div className="the-biggest-transaction app__most-exensive-transaction-div">
      <p className="the-biggest-transaction__title">The most expensive transaction is:</p>
      {theTransaction && (
         <div className="summary-the-biggest-transaction the-biggest-transaction__div">
            <p className="summary-the-biggest-transaction__p">{theTransaction.name}</p>
            <p className="summary-the-biggest-transaction__p">EURO: {Math.round(theTransaction.euro * 100) / 100}</p>
            <p className="summary-the-biggest-transaction__p">PLN: {Math.round(theTransaction.euro * euroToPLN * 100) / 100}</p>
         </div>
      )}
   </div>
)

const mapStateToProps = (state) => ({
   theTransaction: selectTheBiggestTransaction(state.transactions),
   euroToPLN: state.currency.euroToPLN
})

export default connect(mapStateToProps)(TheBiggestTransaction)