const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', async (req, res, next) => {
  try {
    const products = await productController.getAllProducts(req, res, next);
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await productController.getProductById(req, res, next);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    await productController.updateProduct(req, res, next);
    res.status(200).json({ message: 'Update successful' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', async (req, res, next) => {
  try {
    await productController.createProduct(req, res, next);
    res.status(200).json({ message: 'Product created successfully' }); 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await productController.deleteProduct(req, res, next);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
