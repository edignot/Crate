'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'shipDate',
      Sequelize.DATEONLY
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('User', 'shipDate');
  }
};
