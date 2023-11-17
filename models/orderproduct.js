const Order = require('./order');
const Product = require('./product');

module.exports = (sequelize) => {
  const OrderProduct = sequelize.define('OrderProduct', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Order.belongsToMany(Product, { through: OrderProduct });
  Product.belongsToMany(Order, { through: OrderProduct });

  return OrderProduct;
};
