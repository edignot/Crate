// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import CrateType from './types'
import { getAll, getById } from './resolvers'

// Crates All
// gets all crates
// can get by orderBy argument?
export const crates = {
  type: new GraphQLList(CrateType),
  args: {
    orderBy: { type: GraphQLString }
  },
  resolve: getAll
}

// Crate By ID
// gets crate given an id
export const crateById = {
  type: CrateType,
  args: {
    crateId: { type: GraphQLInt }
  },
  resolve: getById
}
