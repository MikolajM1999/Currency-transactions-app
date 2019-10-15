import { uploadEuroToPLN } from '../../actions/currency'

test('should correctly return the UPLOAD_EURO_TO_PLN action object', () => {
   const object = uploadEuroToPLN(4.29)
   expect(object).toEqual({
      type: 'UPLOAD_EURO_TO_PLN',
      euroToPLN: 4.29
   })
})