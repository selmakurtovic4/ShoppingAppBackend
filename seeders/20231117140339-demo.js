"use strict";


/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async getUserId(userEmail, queryInterface) {
    const userId = await queryInterface.rawSelect(
      "Users",
      {
        where: {
          email: userEmail,
        },
      },
      ["id"]
    );
    return userId;
  },

  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Hastings",
        email: "johnhastings@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Mark",
        lastName: "Mayer",
        email: "markmayer@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Susan",
        lastName: "Styles",
        email: "susanstyles@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Amy",
        lastName: "Wilson",
        email: "amywilson@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Lana",
        lastName: "Johnson",
        email: "lanajohnson@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Products", [
    
      {
        title: "Product 2",
        price: 29.99,
        description: "Description for Product 2",
        numOfOrders: 0,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Product 1",
        price: 19.99,
        description: "Description for Product 1",
        numOfOrders: 0,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Product 3",
        price: 29.99,
        description: "Description for Product 2",
        numOfOrders: 0,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Product 4",
        price: 19.99,
        description: "Description for Product 1",
        numOfOrders: 0,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Product 5",
        price: 29.99,
        description: "Description for Product 2",  
        numOfOrders: 0,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);


    await queryInterface.bulkInsert('Orders', [
      {
        userId: 1,
        dateCreated: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
    await queryInterface.bulkInsert('OrderProducts', [

    {
      orderId: 1,
      productId: 1,
      quantity: 1,
    },
    {
      orderId: 1,
      productId: 2,
      quantity: 1,
    },
    {
      orderId: 1,
      productId: 3,
      quantity: 1,
    }
  ]);
/*    const userEmail = "johnhastings@example.com";
    const userId = await getUserId(queryInterface, userEmail);

    if (userId) {
    //  console.log(userId);
      const createdOrder = await queryInterface.sequelize.transaction(
        async (transaction) => {
          return await queryInterface.bulkInsert('Orders', [
            {
              userId: userId,
              dateCreated: new Date(),
              createdAt: new Date(),
              updatedAt: new Date(),
            }
          ], { transaction });
        }
      );
      console.log("order");
      console.log(createdOrder);

      const allProducts = await getAllProducts(queryInterface);
      const orderProducts = allProducts.map((productId) => {
        return {
          orderId: createdOrder.id,
          productId: productId,
          quantity: 3,
        };
      });
//      console.log(orderProducts);

      await queryInterface.sequelize.transaction(async (transaction) => {
        await queryInterface.bulkInsert('OrderProducts', orderProducts, { transaction });
      });

      console.log("New order created successfully.");
    } else {
      console.log("User not found.");
    }
  },
  */
},

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
