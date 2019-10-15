import allTransactionsSummary from '../../selectors/allTransactionsSummary'
import transactions from '../fixtures/transactions'

test('should correctly return summary', () => {
   const summary = allTransactionsSummary(transactions, 4)
   expect(summary).toEqual({
      inEURO: 60,
      inPLN: 240
   })
})