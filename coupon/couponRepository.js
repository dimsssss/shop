const db = require('../bin/database')
const {Sequelize} = db

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

const getCouponUsageAndCouponDiscountSum = async () => {
  try {
    const {couponHistories, couponTypes} = db
    return await couponHistories.findAll({
      raw: true,
      attributes: [
        'couponTypeId',
        [Sequelize.col('c.couponType'), 'couponType'],
        [Sequelize.fn('COUNT', '*'), 'usage'],
        [
          Sequelize.fn('SUM', Sequelize.col('discountAmount')),
          'totalDiscountAmount',
        ],
      ],
      include: [
        {
          model: couponTypes,
          required: true,
          as: 'c',
          attributes: [],
        },
      ],
      group: 'couponTypeId',
    })
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  createCoupon,
  findAllCouponHistory,
  getCouponUsageAndCouponDiscountSum,
}
