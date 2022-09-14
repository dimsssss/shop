require('dotenv').config()

const db = require('../../bin/database')
const {sequelize} = db
const {faker} = require('@faker-js/faker')

const createProductData = () => {
  const productDummy = []
  const orderDummy = []
  const reciptDummy = []
  const userDummy = []
  const orderStates = ['주문', '결제완료', '결제취소']
  for (let i = 0; i < 10; i += 1) {
    const orderId = faker.datatype.uuid()
    const userId = faker.datatype.uuid()
    const receiptId = faker.datatype.uuid()
    const userName = faker.name.middleName()
    const productId = faker.datatype.uuid()
    const productName = faker.commerce.productName()
    const productQuantity = faker.commerce.price(1, 100, 0, '')
    const price = faker.commerce.price(100, 1000000, 0, '')
    const country = faker.address.countryCode('alpha-2')
    const zipcode = faker.address.zipCodeByState(country)
    const city = faker.address.city()

    productDummy.push({
      productId,
      name: productName,
      price,
    })
    orderDummy.push({
      orderId,
      cutomerId: userId,
      orderState:
        orderStates[
          faker.datatype.number({
            min: 0,
            max: 2,
          })
        ],
    })

    userDummy.push({
      userId,
      name: userName,
    })

    reciptDummy.push({
      receiptId,
      orderId,
      cusotmerId: userId,
      customerName: userName,
      quantity: Number(productQuantity),
      price: price * productQuantity,
      country_code: country,
      zipcode,
      city,
    })
  }
  return [productDummy, orderDummy, userDummy, reciptDummy]
}
const createDefaultData = async () => {
  try {
    const [productDummy, orderDummy, userDummy, reciptDummy] =
      createProductData()
    return await sequelize.transaction(async transaction => {
      const {receipt, users, orders, products} = db
      const resultUsers = await users.bulkCreate(userDummy, {
        transaction,
        raw: true,
      })
      const resultProducts = await products.bulkCreate(productDummy, {
        transaction,
        raw: true,
      })
      const resultOrders = await orders.bulkCreate(orderDummy, {
        transaction,
        raw: true,
      })
      const resultReceipts = await receipt.bulkCreate(reciptDummy, {
        transaction,
        raw: true,
      })
      return [resultUsers, resultProducts, resultOrders, resultReceipts]
    })
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

const cleanDatabase = async () => {
  try {
    await sequelize.transaction(async transaction => {
      const {receipt, users, orders, products} = db
      await users.destroy({where: {}, transaction, force: true})
      await products.destroy({where: {}, transaction, force: true})
      await orders.destroy({where: {}, transaction, force: true})
      await receipt.destroy({where: {}, transaction, force: true})
    })
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

module.exports = {
  createDefaultData,
  cleanDatabase,
}
