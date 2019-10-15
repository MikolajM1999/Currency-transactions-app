import React from 'react'
import Header from './Header'
import CurrencyHeader from './CurrencyHeader'
import AddTransactionEuroForm from './AddTransactionEuroForm'
import TransactionsList from './TransactionsList'
import TheBiggestTransaction from './TheBiggestTransaction'

export const App = () => (
   <div className="app">
      <Header />
      <CurrencyHeader />
      <AddTransactionEuroForm />
      <div className="app__div-container-transactions">
         <TransactionsList />
         <TheBiggestTransaction />
      </div>
   </div>
)

export default App