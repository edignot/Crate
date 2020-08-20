// App Imports
import { isEmpty } from '../../../setup/helpers'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions'

// Initial State
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null
}

// State
export default (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      // returns current state and 
      // sets isAuthenticated to the return value of isEmpty fn,
      // sets details to the user that is passed in the action
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user,
      }

    case LOGIN_REQUEST:
      // returns current state and 
      // sets error to null
      // sets isLoading to true
      return {
        ...state,
        error: null,
        isLoading: action.isLoading
      }

    case LOGIN_RESPONSE:
      // returns current state and
      // sets error to the error passed in the action
      // sets isLoading to false
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    case LOGOUT:
      // returns current state and
      // sets error to null
      // sets isLoading to false
      // sets isAuthenticated to false
      // sets details to null
      // why doesn't it just return initial state?  NOT DRY
      return {
        ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null
      }

    default:
      return state
  }
}