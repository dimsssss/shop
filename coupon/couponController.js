const {StatusCodes, getReasonPhrase} = require('http-status-codes')
const couponService = require('./couponService')

const publishDiscountCoupon = async (validator, req, res) => {
  if (validator.error instanceof Error) {
    return res.status(StatusCodes.BAD_REQUEST).send(validator.error.details)
  }

  try {
    const result = await couponService.registerCouponType(req.body)
    return res.status(StatusCodes.CREATED).send(result)
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR))
  }
}

const getCouponHistory = async (validator, req, res) => {
  if (validator.error instanceof Error) {
    return res.status(StatusCodes.BAD_REQUEST).send(validator.error.details)
  }

  try {
    const result = await couponService.getCouponHistories()
    return res.status(StatusCodes.CREATED).send(result)
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR))
  }
}

const getCouponUsageAndCouponDiscountSum = async (validator, req, res) => {
  if (validator.error instanceof Error) {
    return res.status(StatusCodes.BAD_REQUEST).send(validator.error.details)
  }

  try {
    const result = await couponService.getCouponUsageAndCouponDiscountSum()
    return res.status(StatusCodes.CREATED).send(result)
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR))
  }
}

module.exports = {
  publishDiscountCoupon,
  getCouponHistory,
  getCouponUsageAndCouponDiscountSum,
}
