// Imports
import { GraphQLObjectType } from 'graphql';

// 
import * as user from '../../modules/user/query';
import * as product from '../../modules/product/query';
import * as crate from '../../modules/crate/query';
import * as subscription from '../../modules/subscription/query';

// QUERY IS A GRAPHQL TYPE OBJECT
// ROOT QUERY
// GraphQLObjectType HAS TWO REQUIRED PROPERTIES: NAME AND FIELDS. NAME - STRING, DESCRIBES TYPE BEING DEFINED
const query = new GraphQLObjectType({
    name: 'query',
    description: 'API Queries [Read]',
    // FIELDS IS AN OBJECT THAT TELLS GRAPHQL ABOUT ALL THE PROPERTIES ON THIS TYPE
    fields: () => ({
        ...user,
        ...product,
        ...crate,
        ...subscription,
    }),
});

export default query;

// ! ANNOTATION
