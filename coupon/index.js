const express = require('express')
const router = express.Router()
const couponController = require('./couponController')
const couponValidator = require('./couponValidator')

router.get('/statics', couponController.getCouponUsageAndCouponDiscountSum)
router.post(
  '/',
  couponValidator.bodyValidator,
  couponController.publishDiscountCoupon,
)

router.get('/', couponController.getCouponHistory)

module.exports = router
