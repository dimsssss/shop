const discount = (price, value) => {
  if (typeof value !== 'number' || value <= 0 || !Number.isInteger(value)) {
    throw new Error()
  }

  const result = price - value

  if (result < 0) {
    return 0
  }
  return result
}

module.exports = {
  discount,
}
