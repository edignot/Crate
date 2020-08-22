module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.TEXT,
            },
            password: {
                type: Sequelize.TEXT,
            },
            role: {
                type: Sequelize.TEXT,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    },
};

// A Migration in Sequelize is javascript file which exports two functions, up and down , that dictate how to perform the migration and undo it. You define those functions manually, but you don't call them manually; they will be called automatically by the CLI
// Database migration is the process of transforming data between various states without any human interaction

// ANNOTATION
