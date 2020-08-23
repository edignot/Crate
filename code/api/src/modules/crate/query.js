// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import CrateType from './types'
import { getAll, getById } from './resolvers'

// Crates All
// Sets up query you will use to get all  crates, similar to an index route
export const crates = {
  type: new GraphQLList(CrateType),
  args: {
    orderBy: { type: GraphQLString }
  },
  resolve: getAll
}

// Crate By ID
//Query you will use to get one crate by its id, similar to a show route
export const crateById = {
  type: CrateType,
  args: {
    crateId: { type: GraphQLInt }
  },
  resolve: getById
}
