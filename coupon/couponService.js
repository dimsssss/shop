const couponRepository = require('./couponRepository')

const registerCouponType = async coupon => {
  return await couponRepository.createCoupon(coupon)
}

module.exports = {
  registerCouponType,
}
