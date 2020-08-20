// Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// App Imports
import serverConfig from '../../config/server'
import params from '../../config/params'
import models from '../../setup/models'

// Create
export async function create(parentValue, { name, email, password }) {
  // Users exists with same email check
  const user = await models.User.findOne({ where: { email } })
  // awaits the find method to match email with users entered email
  if (!user) {
    // User does not exists
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)
    // if no user yet, create a new one with the following details
    return await models.User.create({
      name,
      email,
      password: passwordHashed
    })
  } else {
    // User exists
    // prints message that there is already a user with this email address
    throw new Error(`The email ${ email } is already registered. Please try to login.`)
  }
}

export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })
  // opposite of above
  // finds a user, if they dont exist then print message,
  // if they do exist compare passwords
  // if password doesn't match, print message,
  // if it does, create token and return the user obj and the token
  if (!user) {
    // User does not exists
    throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`)
  } else {
    const userDetails = user.get()

    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    if (!passwordMatch) {
      // Incorrect password
      throw new Error(`Sorry, the password you entered is incorrect. Please try again.`)
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        role: userDetails.role
      }

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
    }
  }
}

// Get by ID
//returns a user given an id
export async function getById(parentValue, { id }) {
  return await models.User.findOne({ where: { id } })
}

// Get all
// returns all users
export async function getAll() {
  return await models.User.findAll()
}

// Delete
// deletes a user given an id
export async function remove(parentValue, { id }) {
  return await models.User.destroy({ where: { id } })
}

// User genders
// returns a user's gender
// based on what? inherent params?
export async function getGenders() {
  return Object.values(params.user.gender)
}
