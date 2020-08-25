'use strict'

module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })
  //our two attributes defined in the model (outside the ID are here)

  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }
  /* this is a relationship with the subscriptions model, one to many
  It also enables a many to many relationship with the users model */

  return Crate
}
