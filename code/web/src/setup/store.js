// Imports
import { compose, combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// App Imports
import common from '../modules/common/api/state'
import user from '../modules/user/api/state'
import * as product from '../modules/product/api/state'
import * as subscription from '../modules/subscription/api/state'
import * as crate from '../modules/crate/api/state'

// App Reducer
const appReducer = combineReducers({
  common,
  user,
  ...product,
  ...subscription,
  ...crate
})

// Root Reducer
// goes through reducers and sets state to undefined if action type is reset, returning initial state
// why not just dispatch the reset action instead of returning appReducer?  seems extra
export const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }

  return appReducer(state, action)
}

// Load initial state from server side
// why set initial state to the value and then delete?  
// where is initial state defined?  what is that?
let initialState
if (typeof window !== 'undefined') {
  initialState = window.__INITIAL_STATE__
  delete window.__INITIAL_STATE__
}

// Store
// store adds initial state from above?
export const store = createStore(
  rootReducer,
  initialState,

  composeWithDevTools(
    applyMiddleware(thunk),
  )
)