import currencyReducer from '../../reducers/currencyReducer'

test('should set default state', () => {
   const state = currencyReducer(undefined, { type: '@@INIT' })
   expect(state).toEqual({
      euroToPLN: 0
   })
})

test('should upload euroToPLN correctly', () => {
   const action = {
      type: 'UPLOAD_EURO_TO_PLN',
      euroToPLN: 4.29
   }
   const state = currencyReducer({ euroToPLN: 0 }, action)
   expect(state).toEqual({
      euroToPLN: 4.29
   })
})