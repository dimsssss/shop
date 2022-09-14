const express = require('express')
const router = express.Router()
const orderController = require('./orderController')
const {queryStringValidator} = require('./validator')

router.get('/', queryStringValidator, orderController.getOrderList)
router.patch('/', queryStringValidator, orderController.shipOrder)

module.exports = router
