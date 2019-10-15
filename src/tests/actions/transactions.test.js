import { addTransaction, removeTransaction } from '../../actions/transactions'

test('should correctly return the ADD_TRANSACTION action object', () => {
   const transaction = { name: 'abc', euro: '29.99', id: '1' }
   const object = addTransaction(transaction)
   expect(object).toEqual({
      type: 'ADD_TRANSACTION',
      transaction
   })
})

test('should correctly return the REMOVE_TRANSACTION action object', () => {
   const id = '123'
   const object = removeTransaction(id)
   expect(object).toEqual({
      type: 'REMOVE_TRANSACTION',
      id
   })
})