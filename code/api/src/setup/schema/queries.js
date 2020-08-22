// Imports
import { GraphQLObjectType } from 'graphql';

// 
import * as user from '../../modules/user/query';
import * as product from '../../modules/product/query';
import * as crate from '../../modules/crate/query';
import * as subscription from '../../modules/subscription/query';

// QUERY IS A GRAPHQL TYPE OBJECT
// ROOT QUERY
const query = new GraphQLObjectType({
    name: 'query',
    description: 'API Queries [Read]',
    // RETURNING FIELDS OBJECTS 
    fields: () => ({
        ...user,
        ...product,
        ...crate,
        ...subscription,
    }),
});

export default query;

// GRAPHQL ANNOTATION
