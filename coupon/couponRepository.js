const db = require('../bin/database')

const createCoupon = async coupon => {
  try {
    const {couponTypes} = db
    return await couponTypes.create(coupon, {raw: true})
  } catch (err) {
    throw new Error(err)
  }
}

const findAllCouponHistory = async () => {
  try {
    const {couponHistories} = db
    return await couponHistories.findAll({raw: true})
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  createCoupon,
  findAllCouponHistory,
}
