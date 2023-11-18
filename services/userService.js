// Assuming you are using CommonJS syntax (Node.js)
const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize, User } = require('../models'); // Adjust the import based on your models structure

class UserService {
  constructor() {
    this.sequelize = sequelize;
    this.userModel = User;
  }

  static async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw error;
    }
  }


/*
  static async getUserById(userId) {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(userId, updatedUserData) {
    try {
      const user = await User.findByPk(userId);

      if (!user) {
        throw new Error('User not found');
      }

      await user.update(updatedUserData);

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async createUser(userData) {
    try {
      const newUser = await User.create(userData);
      return newUser;
    } catch (error) {
      throw error;
    }
  }


  static async deleteUser(userId) {
    try {
      const user = await User.findByPk(userId);

      if (!user) {
        throw new Error('User not found');
      }

      await user.destroy();

      return true; 
    } catch (error) {
      throw error;
    }
  }
  */
}

module.exports= UserService;
