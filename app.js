require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const orderRouter = require('./order/index')
const couponRouter = require('./coupon/index')

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(logger('dev'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/order', orderRouter)
app.use('/coupon', couponRouter)

module.exports = app
