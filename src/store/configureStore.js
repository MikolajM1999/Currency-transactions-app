import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import currencyReducer from '../reducers/currencyReducer'
import transactionsReducer from '../reducers/transactionsReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      currency: currencyReducer,
      transactions: transactionsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}