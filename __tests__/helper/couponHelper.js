require('dotenv').config()

const db = require('../../bin/database')
const {sequelize} = db
const {faker} = require('@faker-js/faker')

const createDummy = () => {
  const couponHistories = []

  const amountCouponTypeId = faker.datatype.uuid()
  const amountValue = Number(faker.commerce.price(100, 1000000, 0, ''))
  const amounCouponType = {
    couponTypeId: amountCouponTypeId,
    couponType: '금액할인',
    value: amountValue,
  }
  const rateCouponTypeId = faker.datatype.uuid()
  const rateValue = Number(faker.commerce.price(0.1, 0.99999, 5, ''))
  const rateCouponType = {
    couponTypeId: rateCouponTypeId,
    couponType: '비율할인',
    value: rateValue,
  }
  let amountCouponTypeUseCount = 0
  let amountCouponDiscountSum = 0
  let rateCouponTypeUseCount = 0
  let rateCouponDiscountSum = 0

  for (let i = 0; i < 10; i += 1) {
    const orderId = faker.datatype.uuid()
    const coin = faker.datatype.number({min: 0, max: 1})
    const couponHistory = {orderId}

    if (coin === 0) {
      amountCouponTypeUseCount += 1
      amountCouponDiscountSum += amountValue
      couponHistory.couponTypeId = amountCouponTypeId
      couponHistory.discountAmount = amountValue
    } else {
      const amount = Number(
        rateValue * faker.commerce.price(100, 1000000, 0, ''),
      )
      rateCouponTypeUseCount += 1
      rateCouponDiscountSum += amount
      couponHistory.couponTypeId = rateCouponTypeId
      couponHistory.discountAmount = amount
    }
    couponHistories.push(couponHistory)
  }

  return [
    [amounCouponType, rateCouponType],
    [amountCouponTypeUseCount, amountCouponDiscountSum],
    [rateCouponTypeUseCount, rateCouponDiscountSum],
    couponHistories,
  ]
}

const initDummyData = async () => {
  try {
    const dummies = createDummy()
    const {couponHistories, couponTypes} = db

    const [types, histories] = await sequelize.transaction(
      async transaction => {
        const types = await couponTypes.bulkCreate(dummies[0], {
          transaction,
          raw: true,
        })
        const histories = await couponHistories.bulkCreate(dummies[3], {
          transaction,
          raw: true,
        })
        return [types, histories]
      },
    )
    return [types, histories, dummies[1], dummies[2]]
  } catch (err) {
    throw new Error(err)
  }
}

const cleanDatabase = async () => {
  try {
    await sequelize.transaction(async transaction => {
      const {couponTypes, couponHistories} = db

      await couponHistories.destroy({where: {}, transaction, force: true})
      await couponTypes.destroy({where: {}, transaction, force: true})
    })
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  cleanDatabase,
  initDummyData,
}
