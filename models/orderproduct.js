const { DataTypes } = require('sequelize');
const Order = require('./order');
const Product = require('./product');

module.exports = (sequelize) => {
  const OrderProduct = sequelize.define('OrderProduct', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Order.belongsToMany(Product, { through: OrderProduct, foreignKey: 'productId' });
  Product.belongsToMany(Order, { through: OrderProduct, foreignKey: 'orderId' });

  return OrderProduct;
};
