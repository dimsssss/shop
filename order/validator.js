const Joi = require('joi')
const schema = Joi.object({
  state: Joi.string(),
  customerName: Joi.string().min(3).max(30),
  startDate: Joi.date(),
  endDate: Joi.date(),
})

const queryStringValidator = (req, res, next) => {
  const result = schema.validate(req.query)
  next(result, req, res, next)
}

module.exports = {
  queryStringValidator,
}
