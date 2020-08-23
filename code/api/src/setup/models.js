// Imports
import Sequelize from 'sequelize'

// App Imports
// IMPORTING DATABASE CONNECTION FUNCTION THAT RETURNS SEQUELIZE DATABASE
import databaseConnection from './database'

const models = {
  // !question: does it create new database for each model? 
  User: databaseConnection.import('../modules/user/model'),
  Product: databaseConnection.import('../modules/product/model'),
  Crate: databaseConnection.import('../modules/crate/model'),
  Subscription: databaseConnection.import('../modules/subscription/model')
}

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models

// MODELS ARE ESSENCE OF SEQUELIZE. A MODEL IS ABSTRACTION THAT REPRESENTS A TABLE INSIDE DATABASE
// MODELS IS IMPORTED AND USED BY GRAPHQL RESOLVERS

// ! ANNOTATION