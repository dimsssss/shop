const db = require('../bin/database')

const findAllOrder = async () => {
  try {
    const {receipt} = db
    return await receipt.findAll()
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  findAllOrder,
}
