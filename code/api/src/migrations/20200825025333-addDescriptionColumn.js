'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { 
    return queryInterface.addColumn(
      'users',
      'description',
      Sequelize.STRING
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('User', 'description');
  }
};
