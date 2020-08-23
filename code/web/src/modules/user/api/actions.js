// Imports
import axios from 'axios';
import { query, mutation } from 'gql-query-builder';
import cookie from 'js-cookie';

// App Imports
import { routeApi } from '../../../setup/routes';

// Actions Types
export const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST';
export const LOGIN_RESPONSE = 'AUTH/LOGIN_RESPONSE';
export const SET_USER = 'AUTH/SET_USER';
export const LOGOUT = 'AUTH/LOGOUT';

// Actions

// Set a user after login or using localStorage token
export function setUser(token, user) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }

    return { type: SET_USER, user };
}

// Login a user using credentials
// ACTION CREATOR - FUNCTION THAT RETURN AN ACTION OBJECT
export function (userCredentials, isLoading = true) {
    return (dispatch) => {
        // ACTION IS DISPATCHED TO REDUCER ( MATCH NY TYPE ) STATE UPDATES TO LOADING WHILE WAITING FOR NETWORK REQUEST
        dispatch({
            type: LOGIN_REQUEST,
            isLoading,
        });
        // ASYNC NETWORK REQUEST
        // ROUTEAPI - GRAPHQL ENDPOINT ( graphql has only one endpoint )
        // QUERY - READ ONLY
        return axios
            .post(
                routeApi,
                query({
                    // The operation type is either query, mutation, or subscription and describes what type of operation you're intending to do
                    operation: 'userLogin',
                    // VARIABLES - DATA SENT TO THE SERVER. IN THIS CASE DATA IS {email: 'email@email.com', password: 'password'}
                    variables: userCredentials,
                    // ASKING THOSE FIELDS FROM SERVER TO RETURN BACK
                    fields: ['user {name, email, role}', 'token'],
                })
            )
            .then((response) => {
                let error = '';

                if (response.data.errors && response.data.errors.length > 0) {
                    error = response.data.errors[0].message;
                } else if (response.data.data.userLogin.token !== '') {
                    const token = response.data.data.userLogin.token;
                    const user = response.data.data.userLogin.user;

                    dispatch(setUser(token, user));

                    loginSetUserLocalStorageAndCookie(token, user);
                }

                dispatch({
                    type: LOGIN_RESPONSE,
                    error,
                });
            })
            .catch((error) => {
                dispatch({
                    type: LOGIN_RESPONSE,
                    error: 'Please try again',
                });
            });
    };
}

// Set user token and info in localStorage and cookie
export function loginSetUserLocalStorageAndCookie(token, user) {
    // Update token
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('user', JSON.stringify(user));

    // Set cookie for SSR
    cookie.set('auth', { token, user }, { path: '/' });
}

// USER SIGNUP
export function register(userDetails) {
    return (dispatch) => {
        // MUTATION - CREATE UPDATE DELETE
        return axios.post(
            routeApi,
            mutation({
                // The operation type is either query, mutation, or subscription and describes what type of operation you're intending to do
                operation: 'userSignup',
                variables: userDetails,
                fields: ['id', 'name', 'email'],
            })
        );
    };
}

// Log out user and remove token from localStorage
export function logout() {
    return (dispatch) => {
        logoutUnsetUserLocalStorageAndCookie();

        dispatch({
            type: LOGOUT,
        });
    };
}

// Unset user token and info in localStorage and cookie
export function logoutUnsetUserLocalStorageAndCookie() {
    // Remove token
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');

    // Remove cookie
    cookie.remove('auth');
}

// Get user gender
export function getGenders() {
    return (dispatch) => {
        return axios.post(
            routeApi,
            query({
                operation: 'userGenders',
                fields: ['id', 'name'],
            })
        );
    };
}

// ! ANNOTATION
