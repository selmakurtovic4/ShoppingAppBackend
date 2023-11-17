"use strict";

async function getUserId(queryInterface, userEmail) {
  const userId = await queryInterface.rawSelect('Users', {
    where: {
      email: userEmail,
    },
  }, ['id']);
  return userId;
}

async function getAllProducts(queryInterface) {
    const products = await queryInterface.sequelize.query('SELECT * FROM Products', {
      type: queryInterface.sequelize.QueryTypes.SELECT,
    });
    return products;
  }

module.exports = {
  getUserId,getAllProducts
};
