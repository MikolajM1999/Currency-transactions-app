export const addTransaction = (transaction) => ({
   type: 'ADD_TRANSACTION',
   transaction
})

export const removeTransaction = (id) => ({
   type: 'REMOVE_TRANSACTION',
   id
})