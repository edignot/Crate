// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports

// FIELD ACTIONS IMPORTED ( breaking field into smaller modules )
import * as user from '../../modules/user/mutations'
import * as product from '../../modules/product/mutations'
import * as crate from '../../modules/crate/mutations'
import * as subscription from '../../modules/subscription/mutations'


// MUTATION IS A GRAPHQL TYPE OBJECT
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',
  // EACH FIELD MEANS DIFFERENT ACTION. 
  fields: {
    ...user,
    ...product,
    ...crate,
    ...subscription
  }
})

export default mutation

// MUTATIONS CRUD - CREATE DELETE UPDATE

// GRAPHQL 2