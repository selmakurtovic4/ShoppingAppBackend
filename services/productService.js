const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize, Product } = require('../models')

class ProductService {
  constructor() {
    this.sequelize = sequelize;
    this.productModel = Product;
  }

  static async getAllProducts() {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      throw error;
    }
  }

  static async getProductById(productId) {
    try {
      const product = await Product.findByPk(productId);
      return product;
    } catch (error) {
      throw error;
    }
  }

  static async updateProduct(productId, updatedProductData) {
    try {
      const product = await Product.findByPk(productId);

      if (!product) {
        throw new Error('Product not found');
      }

      await product.update(updatedProductData);

      return product;
    } catch (error) {
      throw error;
    }
  }

  static async createProduct(productData) {
    try {
      const newProduct = await Product.create(productData);
      return newProduct;
    } catch (error) {
      throw error;
    }
  }

  static async deleteProduct(productId) {
    try {
      const product = await Product.findByPk(productId);

      if (!product) {
        throw new Error('Product not found');
      }

      await product.destroy();

      return true;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductService;
