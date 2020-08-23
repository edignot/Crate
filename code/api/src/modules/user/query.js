// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { UserType, UserLoginType, UserGenderType } from './types'
import { getAll, getById, login, getGenders } from './resolvers'

// All
// Sets up the query to receive all of the users
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll
}

// By ID
//Query you will use to get one crate by its id, similar to a show route
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}

// Auth
//query to log in user
export const userLogin = {
  type: UserLoginType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    },

    role: {
      name: 'role',
      type: GraphQLString
    }
  },
  resolve: login
}

// Genders
// query to receive possible user genders
export const userGenders = {
  type: new GraphQLList(UserGenderType),
  resolve: getGenders
}
