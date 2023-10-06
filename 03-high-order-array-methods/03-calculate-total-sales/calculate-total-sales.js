function calculateTotalSalesWithTax(products, taxRate) {
  const totalRevenueArray = products.map(
    (product) => product.price * product.quantity
  )

  const totalRevenue = totalRevenueArray.reduce(
    (total, revenue) => total + revenue,
    0
  )

  const taxesAmount = (totalRevenue * taxRate) / 100
  const totalAmount = totalRevenue + taxesAmount
  return +totalAmount.toFixed(2)
}

/* const calculateTotalSalesWithTax = (products, taxRate) => {
  const partialAmount = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  )

  const taxesAmount = (partialAmount * taxRate) / 100

  const totalAmount = +(partialAmount + taxesAmount).toFixed(2)

  return totalAmount
}
 */
module.exports = calculateTotalSalesWithTax
