import selectTheBiggestTransaction from '../../selectors/selectTheBiggestTransaction'
import transactions from '../fixtures/transactions'

test('should correctly return transaction with the biggest euro value', () => {
   const bigTransaction = selectTheBiggestTransaction(transactions)
   expect(bigTransaction).toEqual({
      name: 'c',
      euro: 30,
      id: '3'
   })
})