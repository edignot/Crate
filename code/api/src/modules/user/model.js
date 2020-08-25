'use strict'

// User
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
  // we'll need to add the various profile information parts in here as well

  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }
  // has many subscriptions, may need to add a join tables with products too

  return User
}
