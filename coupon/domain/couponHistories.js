module.exports = (sequelize, DataTypes) => {
  const couponHistories = sequelize.define(
    'couponHistories',
    {
      sequenceId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      couponHistoryId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      couponTypeId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      orderId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      discountAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        onUpdate: DataTypes.NOW,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
      timestamp: false,
      paronid: true,
      tableName: 'coupon_histories',
    },
  )

  couponHistories.associate = db => {
    const {couponTypes} = db
    couponHistories.belongsTo(couponTypes, {
      foreignKey: 'couponTypeId',
      as: 'c',
    })
  }

  return couponHistories
}
