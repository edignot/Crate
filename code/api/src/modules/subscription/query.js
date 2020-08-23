// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import SubscriptionType from './types'
import { getAll, getByUser, get } from './resolvers'

// Subscriptions All
//Query you will use to get all subscriptions, similar to an index route

export const subscriptions = {
  type: new GraphQLList(SubscriptionType),
  resolve: getAll
}

// Subscriptions by user
//Query you will use to get possibly multiple subscritions by its user id
export const subscriptionsByUser = {
  type: new GraphQLList(SubscriptionType),
  resolve: getByUser
}

// Subscription By id
//Query you will use to get one subscription by its id, similar to a show route

export const subscription = {
  type: SubscriptionType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}