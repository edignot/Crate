'use strict';

// User
module.exports = function (sequelize, DataTypes) {
  // CREATING SEQUELIZE MODEL INSTANCE
    let User = sequelize.define('users', {
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.TEXT,
        },
        password: {
            type: DataTypes.TEXT,
        },
        role: {
            type: DataTypes.TEXT,
        },
    });

    User.associate = function (models) {
        User.hasMany(models.Subscription);
    };

    return User;
};

// IMPORTED BY api/src/setup/models AND THEN COMBINED MODEL IS IMPORTED BY RESOLVERS .
// MODELS ARE ESSENCE OF SEQUELIZE. A MODEL IS ABSTRACTION THAT REPRESENTS A TABLE INSIDE DATABASE

// ! ANNOTATION
