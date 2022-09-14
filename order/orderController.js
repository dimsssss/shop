const {StatusCodes, getReasonPhrase} = require('http-status-codes')
const orderService = require('./orderService')

const getOrderList = async (validator, req, res, next) => {
  if (validator.error instanceof Error) {
    return res.status(StatusCodes.BAD_REQUEST).send(validator.error.details)
  }

  try {
    const result = await orderService.getOrderList(req.query)
    return res.status(StatusCodes.OK).send(result)
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR))
  }
}

const shipOrder = async (validator, req, res, next) => {
  if (validator.error instanceof Error) {
    return res.status(StatusCodes.BAD_REQUEST).send(validator.error.details)
  }

  try {
    const result = await orderService.updateOrderStateToShip(req.body)
    return res.status(StatusCodes.OK).send(result)
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR))
  }
}

module.exports = {
  getOrderList,
  shipOrder,
}
