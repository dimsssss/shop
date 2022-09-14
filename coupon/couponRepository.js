const db = require('../bin/database')

const createCoupon = async coupon => {
  try {
    const {couponTypes} = db
    console.log(db)
    return await couponTypes.create(coupon, {raw: true})
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

module.exports = {
  createCoupon,
}
