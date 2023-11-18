const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize, Order } = require('../models'); // Adjust the import based on your models structure

class OrderService {
  constructor() {
    this.sequelize = sequelize;
    this.orderModel = Order;
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
}

module.exports = OrderService;
