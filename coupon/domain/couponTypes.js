module.exports = (sequelize, DataTypes) => {
  const couponTypes = sequelize.define(
    'couponTypes',
    {
      couponTypeId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      couponType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
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
      tableName: 'coupon_types',
    },
  )

  return couponTypes
}
