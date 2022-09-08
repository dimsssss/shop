module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .createTable(
        'coupon_histories',
        {
          couponHistoryId: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            allowNull: false,
          },
          couponTypeId: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            allowNull: false,
          },
          discounAmount: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
          },
          createdAt: {
            type: Sequelize.DataTypes.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false,
          },
          updatedAt: {
            type: Sequelize.DataTypes.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false,
          },
          deletedAt: {
            type: Sequelize.DataTypes.DATE,
            allowNull: true,
          },
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_general_ci',
          timestamp: false,
          paronid: true,
        },
      )
      .then(() => {
        queryInterface.addIndex('coupon_histories', ['couponTypeId'])
      })
  },
  down: queryInterface => {
    return queryInterface.dropTable('coupon_histories')
  },
}
