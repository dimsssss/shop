const express = require('express')
const router = express.Router()
const orderController = require('./orderController')
router.get('/', orderController.getOrderList)

module.exports = router
