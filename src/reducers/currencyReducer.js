const currencyDefaultState = {
   euroToPLN: 0
}

export default (state = currencyDefaultState, action) => {
   switch (action.type) {
      case 'UPLOAD_EURO_TO_PLN':
         return {
            ...state,
            euroToPLN: action.euroToPLN
         }
      default:
         return state
   }
}