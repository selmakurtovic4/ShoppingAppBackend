'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
  Product.belongsToMany(models.Order, { through: 'OrderProduct' });
  }
  }

  Product.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      numOfOrders: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          max: 3, 
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,

      },
      
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );

  return Product;
};
