const couponRepository = require('./couponRepository')

const registerCouponType = async coupon => {
  return await couponRepository.createCoupon(coupon)
}

const getCouponHistories = async () => {
  return await couponRepository.findAllCouponHistory()
}

const getCouponUsageAndCouponDiscountSum = async () => {
  return await couponRepository.getCouponUsageAndCouponDiscountSum()
}

module.exports = {
  registerCouponType,
  getCouponHistories,
  getCouponUsageAndCouponDiscountSum,
}
