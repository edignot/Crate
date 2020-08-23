// Indicates using javascript in strict mode. In this mode you can not use undeclared variables.
'use strict'

// User
// module .exports is included in every Node.js file. module is a variable that represents the current module, and exports is an object that will be exposed as a mofule. whatever you assign to module .exports will be exposed as a module. 
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })

  //creates has many relationship with subscriptions
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}