// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import { ProductType, ProductTypesType } from './types'
import { getAll, getBySlug, getById, getRelated, getTypes } from './resolvers'

// Products All
//Query you will use to get all products, similar to an index route

export const products = {
  type: new GraphQLList(ProductType),
  resolve: getAll
}

// Product By slug
//Query you will use to get one product by slug attribute, similar to a show route

export const product = {
  type: ProductType,
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}

// Product By ID
//Query you will use to get one product by its id, similar to a show route

export const productById = {
  type: ProductType,
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getById
}

// Products Related
//Query you will use to get list of all products related to given product by id
export const productsRelated = {
  type: new GraphQLList(ProductType),
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getRelated
}

// Product Types
//Query you will use to get list of all product types
export const productTypes = {
  type: new GraphQLList(ProductTypesType),
  resolve: getTypes
}
