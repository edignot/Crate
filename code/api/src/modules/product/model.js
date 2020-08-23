// Indicates using javascript in strict mode. In this mode you can not use undeclared variables.
'use strict'

// Product
// module .exports is included in every Node.js file. module is a variable that represents the current module, and exports is an object that will be exposed as a mofule. whatever you assign to module .exports will be exposed as a module. 
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    name: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    }
  })
} 

// this model does not list any relationships