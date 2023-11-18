
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      models.Order.belongsToMany(models.Product, { through: OrderProduct, foreignKey: 'productId' });
      models.Product.belongsToMany(models.Order, { through: OrderProduct, foreignKey: 'orderId' });
    }
  }
  OrderProduct.init({
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rOrderProduct',
  });
  return OrderProduct;
};