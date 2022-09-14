const orderRepository = require('./orderRepository')

const getOrderList = async filter => {
  return await orderRepository.findAllOrder(filter)
}

const updateOrderStateToShip = async orderId => {
  const order = await orderRepository.getOrder(orderId)
  if (order.orderState !== '주문') {
    throw new Error('주문 상태가 유효하지 않습니다')
  }

  return await orderRepository.updateOrderState(orderId)
}

module.exports = {
  getOrderList,
  updateOrderStateToShip,
}
