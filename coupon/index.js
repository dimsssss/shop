const express = require('express')
const router = express.Router()
const couponController = require('./couponController')
const couponValidator = require('./couponValidator')

router.post(
  '/',
  couponValidator.bodyValidator,
  couponController.publishDiscountCoupon,
)

module.exports = router
