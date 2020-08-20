// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import SubscriptionType from './types'
import { getAll, getByUser, get } from './resolvers'

// Subscriptions All
// gets all subscriptions
export const subscriptions = {
  type: new GraphQLList(SubscriptionType),
  resolve: getAll
}

// Subscriptions by user
// gets list of subscriptions given a user
export const subscriptionsByUser = {
  type: new GraphQLList(SubscriptionType),
  resolve: getByUser
}

// Subscription By id
// get a subscription given an id
export const subscription = {
  type: SubscriptionType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}