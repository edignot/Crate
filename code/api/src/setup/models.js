// Imports
//Sequalize is a Javascript Libarary that makes it easy to manage a SQL Database
import Sequelize from 'sequelize'

// App Imports
import databaseConnection from './database'

//connects each model to its table in the database
const models = {
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
