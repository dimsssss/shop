module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .createTable(
        'orders',
        {
          orderId: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            allowNull: false,
          },
          customerId: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            allowNull: false,
          },
          customerName: {
            type: Sequelize.DataTypes.STRING,
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
        queryInterface.addIndex('orders', ['customerName'])
      })
  },
  down: queryInterface => {
    return queryInterface.dropTable('orders')
  },
}
