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
  

module.exports = { getAllOrders,getOrdersByUserId};