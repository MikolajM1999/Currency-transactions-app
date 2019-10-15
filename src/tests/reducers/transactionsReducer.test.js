import transactionsReducer from '../../reducers/transactionsReducer'
import transactions from '../fixtures/transactions'

test('should set default state', () => {
   const state = transactionsReducer(undefined, { type: '@@INIT' })
   expect(state).toEqual([])
})

test('should add transaction correctly', () => {
   const action = {
      type: 'ADD_TRANSACTION',
      transaction: {
         name: 'd',
         euro: 40,
         id: '4'
      }
   }
   const state = transactionsReducer(transactions, action)
   expect(state).toEqual([
      ...transactions,
      {
         name: 'd',
         euro: 40,
         id: '4'
      }
   ])
})

test('should remove transaction correctly', () => {
   const action = {
      type: 'REMOVE_TRANSACTION',
      id: '2'
   }
   const state = transactionsReducer(transactions, action)
   expect(state).toEqual([{
      name: 'a',
      euro: 10,
      id: '1'
   }, {
      name: 'c',
      euro: 30,
      id: '3'
   }])
})