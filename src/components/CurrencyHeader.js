import React from 'react'
import { connect } from 'react-redux'
import { uploadEuroToPLN } from '../actions/currency'

export const CurrencyHeader = (props) => {
   const onInputChange = (e) => {
      const value = e.target.value.trim()
      if (!value || value.match(/^\d{1,}(\.\d{0,9})?$/)) {
         props.uploadEuroToPLN(value)
      }
   }
   return (
      <section className="currency app__currency">
         <div className="currency-div currency__container">
            <h3 className="currency-div__euro-h3">1 EURO = {Math.round(props.euroToPLN * 100) / 100 || 'unknown value of'} PLN</h3>
            <input className="currency-div__input" type="text" placeholder='enter the EURO exchange rate to PLN' onChange={onInputChange} />
            <p className="currency-div__mess">Remember to not type "<span className="span currency-div__span--big-char">,</span>" use "<span className="span currency-div__span--big-char">.</span>" instead!</p>
            <p className="currency-div__mess">Use only numbers!</p>
         </div>
      </section>
   )
}

const mapStateToProps = (state) => ({
   euroToPLN: state.currency.euroToPLN
})

const mapDispatchToProps = (dispatch) => ({
   uploadEuroToPLN: (value) => dispatch(uploadEuroToPLN(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyHeader)