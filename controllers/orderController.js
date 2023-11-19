const OrderService = require('../services/orderService');

async function getAllOrders(request, response, errorHandler) {
  try {
    return await OrderService.getAllOrders();
  } catch (error) {
    console.error("Error in controller:", error);
    errorHandler(error);
  }
}

async function getOrdersByUserId(request, response, errorHandler) {
    try {
      const userId = request.params.userId; 

      const orders = await OrderService.getOrdersByUserId(userId);
      return orders;
    } catch (error) {
      console.error("Error in controller:", error);
      errorHandler(error);
    }
  }
  async function getOrderById(request, response, errorHandler) {
    try {
      const { id } = request.params;
      const order = await orderService.getOrderById(id);
  
      if (order) {
        console.log("Order data:", order.dataValues);
        return order.dataValues;
      }
      // No return value in the else block
    } catch (error) {
      console.error("Error in controller:", error);
      errorHandler(error);
      throw error; // Rethrow the error
    }
  }
  
  async function updateOrder(request, response, errorHandler) {
    const { id } = request.params;
    const orderData = request.body;
    console.log("Controller update");
  
    try {
      await orderService.updateOrder(id, orderData);
    } catch (error) {
      console.error('Error updating order:', error);
      errorHandler(error);
    }
  }
  
  async function createOrder(request, response, errorHandler) {
    const orderData = request.body;
    console.log("Controller create");
  
    try {
      console.log("Service");
      await orderService.createOrder(orderData);
    } catch (error) {
      console.error('Error creating order:', error);
      errorHandler(error);
    }
  }
  
  async function deleteOrder(request, response, errorHandler) {
    const { id } = request.params;
  
    try {
      await orderService.deleteOrder(id);
    } catch (error) {
      console.error('Error deleting order:', error);
      errorHandler(error);
    }
  }
  
  module.exports = { getAllOrders,getOrdersByUserId,getOrderById, updateOrder, createOrder, deleteOrder };
  
  

