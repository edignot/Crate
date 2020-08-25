'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'imageUrl',
      Sequelize.STRING
    )
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('User', 'imageUrl');
  }
};
