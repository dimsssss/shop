const orderRepository = require('./orderRepository')

const getOrderList = async filter => {
  return await orderRepository.findAllOrder(filter)
}

module.exports = {
  getOrderList,
}
