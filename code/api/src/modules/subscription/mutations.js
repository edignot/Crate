// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import SubscriptionType from './types'
import { create, remove } from './resolvers'

// Subscription create
// creates a new subscription
export const subscriptionCreate = {
  type: SubscriptionType,
  args: {
    crateId: {
      name: 'crateId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Subscription remove
// deletes a subscription given an id
export const subscriptionRemove = {
  type: SubscriptionType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}