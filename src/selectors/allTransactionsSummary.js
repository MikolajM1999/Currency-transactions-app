export default (transactions, euroToPLN) => {
   const inEURO = transactions.map((transaction) => transaction.euro).reduce((sum, value) => parseInt(sum) + parseInt(value), 0)
   const inPLN = inEURO * euroToPLN
   return { inEURO, inPLN }
}