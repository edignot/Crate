// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { UserType, UserLoginType, UserGenderType } from './types'
import { getAll, getById, login, getGenders } from './resolvers'

// All
// array of all user objs
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll
}

// By ID
// single user by user id
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}

// Auth
// type is obj from types.js  has user and token fields
// has email, password, role args
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
// list of genders objs from types.js
export const userGenders = {
  type: new GraphQLList(UserGenderType),
  resolve: getGenders
}
