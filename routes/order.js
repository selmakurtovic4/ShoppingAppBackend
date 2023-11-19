const express = require("express");
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/', async (req, res, next) => {
  try {
    const orders = await orderController.getAllOrders(req, res, next);
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/user/:userId', async (req, res, next) => {
    try {
      const orders = await orderController.getOrdersByUserId(req, res, next);
  
      if (orders) {
        res.status(200).json(orders);
      } else {
        res.status(404).json({ message: 'Orders not found' });
      }
    } catch (error) {
     
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
module.exports = router;
