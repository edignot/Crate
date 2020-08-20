// App Imports
import models from '../../setup/models'

// Get subscription by ID
// finds single subscription given an id
// returns the user and the crate for that subscription id
export async function get(parentValue, { id }) {
  return await models.Subscription.findOne({
    where: { id },
    include: [
      { model: models.User, as: 'user' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Get subscription by user
// if a user has an id, finds all subscriptions for that user
// else, throws error
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
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
// gets all subscriptions in db, returns the user and the crate data for each subscription
export async function getAll() {
  return await models.Subscription.findAll({
    include: [
      { model: models.User, as: 'user' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Create subscription
// if there is a user with an id, create a new subscription
// give that subscription a crate id and the user's id
// else throw error
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
// if there is a user with an id, delete subscription based on the subscription id and the user id
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Subscription.destroy({where: {id, userId: auth.user.id}})
  } else {
    throw new Error('Access denied.')
  }
}