// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Crate type
// defines the crate type object which is what you can fetch from the api
const CrateType = new GraphQLObjectType({
  name: 'crate',
  description: 'Crate Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default CrateType