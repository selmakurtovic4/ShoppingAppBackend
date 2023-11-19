const OrderService = require('../services/orderService');

async function getAllOrders(request, response, errorHandler) {
  try {
    return await OrderService.getAllOrders();
  } catch (error) {
    console.error("Error in controller:", error);
    errorHandler(error);
  }
}
module.exports = { getAllOrders};