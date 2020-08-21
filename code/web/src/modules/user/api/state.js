// App Imports
import { isEmpty } from '../../../setup/helpers'

// IMPORT ACTION TYPE VARIABLES
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions'

// INITIAL STATE
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null
}

// USER REDUCER
export default (state = userInitialState, action) => {
  switch (action.type) {
    // ACTION TYPE MATCHING ACTION. IF CASE MATCHES - STATE IS UPDATED ACCORDINGLY
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user,
      }

    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: action.isLoading
      }

    case LOGIN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    case LOGOUT:
      return {
        ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null
      }
    // RETURN DEFAULT STATE IF NONE OF THE ACTION TYPES MATCH ACTION
    default:
      return state
  }
}



// ANNOTATION