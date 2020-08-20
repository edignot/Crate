// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import { ProductType, ProductTypesType } from './types'
import { getAll, getBySlug, getById, getRelated, getTypes } from './resolvers'

// Products All
// list of all products
export const products = {
  type: new GraphQLList(ProductType),
  resolve: getAll
}

// Product By slug
// gets product given a slug
export const product = {
  type: ProductType,
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}

// Product By ID
// gets product given an id
export const productById = {
  type: ProductType,
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getById
}

// Products Related
// gets list of related products given id
// where is this kept?  how are items related to one another?
export const productsRelated = {
  type: new GraphQLList(ProductType),
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getRelated
}

// Product Types
// gets list of all types of products
// still don't know what a type is in this sense
export const productTypes = {
  type: new GraphQLList(ProductTypesType),
  resolve: getTypes
}
