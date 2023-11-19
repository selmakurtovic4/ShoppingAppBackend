const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize, Order,OrderProduct, Product  } = require('../models'); // Adjust the import based on your models structure

class OrderService {
  constructor() {
    this.sequelize = sequelize;
    this.orderModel = Order;
    this.orderProduct=OrderProduct
    this.product=Product
  }

  static async getAllOrders() {
    try {
      const orders = await Order.findAll();
      return orders;
    } catch (error) {
      throw error;
    }
  }

  static async getOrderById(orderId) {
    try {
      const order = await Order.findByPk(orderId);
      return order;
    } catch (error) {
      throw error;
    }
  }
//this is for adding products
  static async updateOrder(orderId, updatedOrderData) {
    try {
      const order = await Order.findByPk(orderId);

      if (!order) {
        throw new Error('Order not found');
      }

      await order.update(updatedOrderData);

      return order;
    } catch (error) {
      throw error;
    }
  }

  static async createOrder(orderData) {
    try {
      const newOrder = await Order.create(orderData);
      return newOrder;
    } catch (error) {
      throw error;
    }
  }

  static async deleteOrder(orderId) {
    try {
      const order = await Order.findByPk(orderId);

      if (!order) {
        throw new Error('Order not found');
      }

      await order.destroy();

      return true;
    } catch (error) {
      throw error;
    }
  }

  static async getOrdersByUserId(userId) {

    try {
      const orders = await Order.findAll({
        where: {
          userId:userId
      }});
      
      //console.log((await Order.findAll({ include: User })).toJSON())
      if (!orders) {
        throw new Error('Orders not found');
      } 


      return orders;
    } catch (error) {
      throw error;
    }
  }


  static async addProductToOrder(orderId, productId) {
    try {
      const order = await Order.findByPk(orderId);
  
      if (!order) {
        throw new Error('Order not found');
      }
  
      const product = await Product.findByPk(productId);
  
      if (!product) {
        throw new Error('Product not found');
      }
  
      const existingOrderProduct = await OrderProduct.findOne({
        where: {
          OrderId: orderId,
          ProductId: productId,
        },
      });
  
      if (!existingOrderProduct) {
        await Product.increment('numOfOrders', {
          by: 1,
          where: { id: product.id },
        });
  
        const updatedProduct = await Product.findByPk(product.id);
        if (updatedProduct.numOfOrders === 3) {
          console.log("Product will be deleted");
          await Product.destroy({ where: { id: product.id } });
        }
      }
  
      const orderProduct = await OrderProduct.create({
        quantity: 1,
        OrderId: orderId,
        ProductId: productId,
      });
  
      return orderProduct;
    } catch (error) {
      throw error;
    }
  }
  
  


}

module.exports = OrderService;
