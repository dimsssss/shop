module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .createTable(
        'receipt',
        {
          receiptId: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            allowNull: false,
          },
          orderId: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            allowNull: false,
          },
          productId: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            allowNull: false,
          },
          quantity: {
            type: Sequelize.DataTypes.INTEGER,
            defaultValue: Sequelize.DataTypes.INTEGER,
            allowNull: false,
          },
          totalPrice: {
            type: Sequelize.DataTypes.INTEGER,
            defaultValue: Sequelize.DataTypes.INTEGER,
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
        queryInterface.addIndex('receipt', ['orderId'])
        queryInterface.addIndex('receipt', ['productId'])
      })
  },
  down: queryInterface => {
    return queryInterface.dropTable('receipt')
  },
}
