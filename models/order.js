'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsToMany(models.Product, { through: 'OrderProduct' });
      Order.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  Order.init({
    userId: DataTypes.INTEGER,
    dateCreated: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM('INPROGRESS', 'FINISHED'),
      defaultValue: 'INPROGRESS', // Set a default value if needed
    },
  }, {
    sequelize,
    modelName: 'Order',
  });

  return Order;
};
