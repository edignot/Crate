// Indicates using javascript in strict mode. In this mode you can not use undeclared variables.
'use strict'

// Subscription
module.exports = function(sequelize, DataTypes) {
//defines a subcription mdoule as a id as a integer and crate id as integer, integer from sequelize
  let Subscription = sequelize.define('subscriptions', {
    userId: {
      type: DataTypes.INTEGER
    },
    crateId: {
      type: DataTypes.INTEGER
    }
  })

  //defines belongs to relationships with user and crate
  Subscription.associate = function(models) {
    Subscription.belongsTo(models.User)
    Subscription.belongsTo(models.Crate)
  }

  return Subscription
}