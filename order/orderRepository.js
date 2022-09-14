const db = require('../bin/database')
const {Sequelize} = db
const {Op} = Sequelize
const createReceiptCondition = filter => {
  const condition = {}

  if (filter === undefined) {
    return condition
  }

  if (Object.hasOwn(filter, 'customerName')) {
    condition.customerName = filter.customerName
  }
  if (Object.hasOwn(filter, 'startDate') && Object.hasOwn(filter, 'endDate')) {
    condition.createdAt = {
      [Op.and]: [
        {
          [Op.gte]: filter.startDate,
        },
        {
          [Op.lte]: filter.endDate,
        },
      ],
    }
  } else if (Object.hasOwn(filter, 'startDate')) {
    condition.createdAt = {
      [Op.gte]: filter.startDate,
    }
  } else if (Object.hasOwn(filter, 'endDate')) {
    condition.createdAt = {
      [Op.lte]: filter.endDate,
    }
  }
  return condition
}

const createOrderCondition = filter => {
  const condition = {}

  if (filter === undefined) {
    return condition
  }

  if (Object.hasOwn(filter, 'state')) {
    condition.orderState = filter.state
  }
  return condition
}

const findAllOrder = async filter => {
  try {
    const {receipt, orders} = db
    const receiptCondition = createReceiptCondition(filter)
    const orderCondition = createOrderCondition(filter)
    return await receipt.findAll({
      raw: true,
      where: receiptCondition,
      attributes: [
        'sequenceId',
        'receiptId',
        'orderId',
        'customerId',
        'customerName',
        'productId',
        'quantity',
        'price',
        'country_code',
        'city',
        [Sequelize.col('o.orderState'), 'orderState'],
        'zipcode',
        'createdAt',
        'updatedAt',
      ],
      include: {
        model: orders,
        as: 'o',
        required: true,
        where: orderCondition,
        attributes: [],
      },
    })
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

module.exports = {
  findAllOrder,
}
