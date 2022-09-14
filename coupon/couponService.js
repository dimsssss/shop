const couponRepository = require('./couponRepository')

const registerCouponType = async coupon => {
  return await couponRepository.createCoupon(coupon)
}

const getCouponHistories = async () => {
  return await couponRepository.findAllCouponHistory()
}

module.exports = {
  registerCouponType,
  getCouponHistories,
}
