//This file defines the responses we return when information is queried
// App Imports
import models from '../../setup/models'

// Get subscription by ID
export async function get(parentValue, { id }) {
    //await pauses your code on this line while other code is executed in the meantime, until a promise is received
  return await models.Subscription.findOne({
    where: { id },
    include: [
      { model: models.User, as: 'user' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Get subscription by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
      //await pauses your code on this line while other code is executed in the meantime, until a promise is received
    return await models.Subscription.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
        {model: models.Crate, as: 'crate'},
      ]
    })
  } else {
    throw new Error('Please login to view your subscriptions.')
  }
}

// Get all subscriptions
export async function getAll() {
  return await models.Subscription.findAll({
      //await pauses your code on this line while other code is executed in the meantime, until a promise is received
    include: [
      { model: models.User, as: 'user' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Create subscription
export async function create(parentValue, { crateId }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Subscription.create({
      crateId,
      userId: auth.user.id
    })
  } else {
    throw new Error('Please login to subscribe to this crate.')
  }
}

// Delete subscription
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Subscription.destroy({where: {id, userId: auth.user.id}})
  } else {
    throw new Error('Access denied.')
  }
}