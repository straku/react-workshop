export {
  formatPrice
}

function formatPrice (price) {
  return `$ ${(price / 100).toFixed(2)}`
}