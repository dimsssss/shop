const {StatusCodes, getReasonPhrase} = require('http-status-codes')
const orderService = require('./orderService')

const getOrderList = (req, res) => {
  try {
    return res.status(StatusCodes.OK).send(orderService.getOrderList())
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR))
  }
}

module.exports = {
  getOrderList,
}
