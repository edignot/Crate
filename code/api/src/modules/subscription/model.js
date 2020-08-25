'use strict'

// Subscription
module.exports = function(sequelize, DataTypes) {
  let Subscription = sequelize.define('subscriptions', {
    userId: {
      type: DataTypes.INTEGER
    },
    crateId: {
      type: DataTypes.INTEGER
    }
    /* we'll likely need to add delivery here, as it depends on each crate and
    each user - different users can have different dates for the same crate */
  })

  Subscription.associate = function(models) {
    Subscription.belongsTo(models.User)
    Subscription.belongsTo(models.Crate)
  }
  /* essentially a joins table between crates and users - a user can have many
  crates, while a crate can be sent to many different users for this relationship */

  return Subscription
}
