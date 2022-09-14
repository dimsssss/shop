const Joi = require('joi')
const schema = Joi.object({
  couponType: Joi.string().min(3).max(30),
  couponValue: Joi.number(),
})

const bodyValidator = (req, res, next) => {
  const result = schema.validate(req.query)
  next(result, req, res, next)
}

module.exports = {
  bodyValidator,
}
