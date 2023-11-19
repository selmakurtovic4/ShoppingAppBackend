const express = require("express");
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/:id/addProduct', async (req, res, next) => {
  try {


    await orderController.addProductToOrder(req, res, next);
    res.status(200).json({ message: 'Product added to order successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



router.get('/', async (req, res, next) => {
  try {
    const orders = await orderController.getAllOrders(req, res, next);
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const order = await orderController.getOrderById(req, res, next);

    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    await orderController.updateOrder(req, res, next);
    res.status(200).json({ message: 'Update successful' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', async (req, res, next) => {
  try {
    
    const newOrder=await orderController.createOrder(req, res, next);
    res.status(200).json({ message: 'Order created successfully', data: newOrder.dataValues.id }); 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await orderController.deleteOrder(req, res, next);
    res.status(200).json({ message: 'Order deleted successfully' });
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
