// Imports DATATYPES
import { GraphQLString, GraphQLInt } from 'graphql';

// App Imports
import { UserType } from './types';
import { create, remove } from './resolvers';

// Create
export const userSignup = {
    type: UserType,
    args: {
        name: {
            name: 'name',
            // DATA TYPE STRING
            type: GraphQLString,
        },

        email: {
            name: 'email',
            type: GraphQLString,
        },

        password: {
            name: 'password',
            type: GraphQLString,
        },
    },
    resolve: create,
};

// Remove
export const userRemove = {
    type: UserType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt,
        },
    },
    resolve: remove,
};

// EVERY FUNCTION IN THIS FILE IS A DIFFERENT ACTION - MUTATION
// MUTATION - MODIFIES DATA ON SERVER USING QUERY
// EVERY MUTATION HAS TYPE, ARGUMENT, RESOLVE FUNCTION ( RETURNS DATA REFLECTING ARGUMENTS PASSED INTO REQUEST )


// MUTATION ANNOTATION
