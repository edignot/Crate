// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

// User type
// ANY GRAPHQL TYPE IS AN OBJECT THAT HAS NAME AND FIELDS
const UserType = new GraphQLObjectType({
    name: 'user',
    description: 'User type',

    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        role: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
    }),
});

// User Login type
const UserLoginType = new GraphQLObjectType({
    // GraphQLObjectType HAS TWO REQUIRED PROPERTIES: NAME AND FIELDS. NAME - STRING, DESCRIBES TYPE BEING DEFINED
    name: 'userAuth',
    // DESCRIPTION PROPERTY IS OPTIONAL
    description: 'User Authentication Type',
    // FIELDS IS AN OBJECT THAT TELLS GRAPHQL ABOUT ALL THE PROPERTIES ON THIS TYPE
    fields: () => ({
        // RELATION TO USER TYPE. USER IS ANOTHER TYPE OBJECT
        user: { type: UserType },
        token: { type: GraphQLString },
    }),
});

// User Gender type
const UserGenderType = new GraphQLObjectType({
    name: 'userGender',
    description: 'User Gender Type',

    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
    }),
});

export { UserType, UserLoginType, UserGenderType };

// GRAPHQL USES STRONG TYPE SYSTEM TO DEFINE CAPABILITIES OF AN API
// TYPE SYSTEM HELPS TO DEFINE SCHEMA

// const TestType = new GraphQLObjectType({
//     name: 'TestType',
//     fields: {
//         property1: { type: GraphQLString },
//         property2: new GraphQLObjectType({
//             name: 'TestType2',
//             fields: {
//                 property1: { type: GraphQLString },
//                 property2: { type: GraphQLInt },
//             },
//         }),
//     },
// });

// ! ANNOTATION
