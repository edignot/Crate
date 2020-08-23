module.exports = {
    // PASSED QUERY INTERFACE OBJECT CAN BE USED TO MODIFY DATABASE
    // SEQUELIZE OBJECT STORES DATA( INT, STRING )

    // FUNCTION UP RETURN A PROMISE
    up: (queryInterface, Sequelize) => {
        // CREATE TABLE METHOD CREATES NEW TABLE createTable(tableName, attributes, options)
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

    // FUNCTION DOWN RETURNS A PROMISE
    down: (queryInterface, Sequelize) => {
        // DROP TABLE ALLOWS DELETION OF A TABLE dropTable(tableName, options)
        return queryInterface.dropTable('users');
    },
};

// You can use migrations to keep track of changes in database
// A Migration in Sequelize is javascript file which exports two functions, up and down , that dictate how to perform the migration and undo it. You define those functions manually, but you don't call them manually; they will be called automatically by the CLI
// Database migration is the process of transforming data between various states without any human interaction
// migrations describe how to get to the new database state and how to revert changes

// ! ANNOTATION
