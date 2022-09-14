require('dotenv').config()

const db = require('../../bin/database')
const {sequelize} = db

const cleanDatabase = async () => {
  try {
    await sequelize.transaction(async transaction => {
      const {couponType} = db
      await couponType.destroy({where: {}, transaction, force: true})
    })
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  cleanDatabase,
}
