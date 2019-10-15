const currencyDefaultState = []

export default (state = currencyDefaultState, action) => {
   switch (action.type) {
      case 'ADD_TRANSACTION':
         return [
            ...state,
            action.transaction
         ]
      case 'REMOVE_TRANSACTION':
         return state.filter((transaction) => transaction.id !== action.id)
      default:
         return state
   }
}