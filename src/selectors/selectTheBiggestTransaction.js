export default (transactions) => {
   const sortedArray = transactions.sort((a, b) => {
      return parseInt(a.euro) < parseInt(b.euro) ? 1 : -1
   })
   return sortedArray[0]
}