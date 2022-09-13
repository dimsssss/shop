const orderRepository = require('./orderRepository')

const getOrderList = async () => {
  return await orderRepository.findAllOrder()
}

module.exports = {
  getOrderList,
}
