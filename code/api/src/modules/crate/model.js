// Indicates using javascript in strict mode. In this mode you can not use undeclared variables.
'use strict'
// module .exports is included in every Node.js file. module is a variable that represents the current module, and exports is an object that will be exposed as a mofule. whatever you assign to module .exports will be exposed as a module. 
module.exports = function(sequelize, DataTypes) {
  //defines a crate mdoule as a name as a string and a decription as text, string and text are from sequelize
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })

  // creates has many relationship with subscriptions
  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate
}