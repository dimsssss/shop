module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .createTable(
        'receipt',
        {
          sequenceId: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          receiptId: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            allowNull: false,
          },
          orderId: {
            type: Sequelize.DataTypes.UUID,
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
            defaultValue: Sequelize.DataTypes.STRING,
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
          price: {
            type: Sequelize.DataTypes.INTEGER,
            defaultValue: Sequelize.DataTypes.INTEGER,
            allowNull: false,
          },
          country_code: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          city: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          zipcode: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: Sequelize.DataTypes.STRING,
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
        queryInterface.addIndex('receipt', ['customerName'])
      })
  },
  down: queryInterface => {
    return queryInterface.dropTable('receipt')
  },
}
