// Imports
import { compose, combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// App Imports
import common from '../modules/common/api/state';
import user from '../modules/user/api/state';
import * as product from '../modules/product/api/state';
import * as subscription from '../modules/subscription/api/state';
import * as crate from '../modules/crate/api/state';

const appReducer = combineReducers({
    common,
    user,
    ...product,
    ...subscription,
    ...crate,
});

// Root Reducer
export const rootReducer = (state, action) => {
    // RESETTING ALL STATE (TO UNDEFINED ) ON SERVER IF ACTION TYPE IS 'RESET' ( NOT ACCESSIBLE TO USER )
    if (action.type === 'RESET') {
        state = undefined;
    }
    return appReducer(state, action);
};

// Load initial state from server side
// window.__INITIAL_STATE__ IS AN EMPTY OBJECT! WHY DELETING RIGHT AFTER? ALSO IN view.js UPDATING INITIAL STATE DOESN'T CHANGE ANYTHING
let initialState;
if (typeof window !== 'undefined') {
    initialState = window.__INITIAL_STATE__;
    delete window.__INITIAL_STATE__;
}

// CREATE STORE AND PASS INITIAL STATE
export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

// ------------------- THUNK ----------------------
// MIDDLEWARE FOR ASYNC LOGIC ( middleware allows side effects ( like API calls ) without blocking state updates )
// REDUX-THUNK DEFINES ASYNC ACTION CREATORS
// ALLOWS ACTION CREATOR TO RETURN A FUNCTION(DOESN'T HAVE TO BE PURE, SO CAN HAVE ASYNC CALLS ) INSTEAD OF AN ACTION OBJECT
// https://www.youtube.com/watch?v=z2XCUu2wIl0
// ------------------- THUNK ----------------------

// REDUX STORE THUNK ANNOTATION

// ! ANNOTATION