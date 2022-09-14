const discount = (price, value) => {
  if (
    typeof value !== 'number' ||
    Number.isInteger(value) ||
    value <= 0 ||
    value >= 1
  ) {
    throw new Error()
  }

  const result = Number(price - price * value)

  if (result < 0) {
    return 0
  }
  return result
}

module.exports = {
  discount,
}
