'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Orders', 'status', {
      type: Sequelize.ENUM('INPROGRESS', 'FINISHED'),
      defaultValue: 'INPROGRESS',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Orders', 'status');
  },
};
