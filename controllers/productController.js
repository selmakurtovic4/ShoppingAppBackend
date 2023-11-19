const productService = require('../services/productService');

async function getAllProducts(request, response, errorHandler) {
  try {
    return await productService.getAllProducts();
  } catch (error) {
    console.error("Error in controller:", error);
    errorHandler(error);
  }
}

async function getProductById(request, response, errorHandler) {
  try {
    const { id } = request.params;
    const product = await productService.getProductById(id);

    if (product) {
      console.log("Product data:", product.dataValues);
      return product.dataValues;
    }
    // No return value in the else block
  } catch (error) {
    console.error("Error in controller:", error);
    errorHandler(error);
    throw error; // Rethrow the error
  }
}

async function updateProduct(request, response, errorHandler) {
  const { id } = request.params;
  const productData = request.body;
  console.log("Controller update");

  try {
    await productService.updateProduct(id, productData);
  } catch (error) {
    console.error('Error updating product:', error);
    errorHandler(error);
  }
}

async function createProduct(request, response, errorHandler) {
  const productData = request.body;
  console.log("Controller create");

  try {
    console.log("Service");
    await productService.createProduct(productData);
  } catch (error) {
    console.error('Error creating product:', error);
    errorHandler(error);
  }
}

async function deleteProduct(request, response, errorHandler) {
  const { id } = request.params;

  try {
    await productService.deleteProduct(id);
  } catch (error) {
    console.error('Error deleting product:', error);
    errorHandler(error);
  }
}

module.exports = { getAllProducts, getProductById, updateProduct, createProduct, deleteProduct };
