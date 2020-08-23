'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('crates', [
      {
        name: 'Clothes for Men',
        description: 'A monthly supply of trendy clothes for men.',
        // Might want to keep track of the delivery date of each crate
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clothes for Women',
        description: 'A monthly supply of trendy clothes for women.',
        // In which case we'd need to add a delivery date for all of these
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Accessories for Men',
        description: 'A monthly supply of trendy accessories for men',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Accessories for Women',
        description: 'A monthly supply of trendy accessories for women',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clothes and Accessories for Men',
        description: 'A monthly supply of trendy clothes and accessories for men',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clothes and Accessories for Women',
        description: 'A monthly supply of trendy clothes and accessories for women',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('crates', null, {});
  }
}
