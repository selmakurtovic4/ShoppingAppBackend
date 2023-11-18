const express = require('express');
const userRoute = require('./user');
const productRoute = require('./product');
const orderRoute = require('./order');

const router = express.Router();

router.use('/user', userRoute);
router.use('/product', productRoute);
router.use('/order', orderRoute);

module.exports = router;
