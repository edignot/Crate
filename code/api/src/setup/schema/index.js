// Imports
import { GraphQLSchema } from 'graphql';

// App Imports
import query from './queries';
import mutation from './mutations';

// SCHEMA CAN BY ACCESSED BY A CLIENT
// SCHEMA MANAGES QUERIES AND MUTATIONS, DESCRIBES COMPLETE SET OF POSSIBLE DATA ( OBJECTS, FIELDS, RELATIONSHIPS...)
const schema = new GraphQLSchema({
    // QUERIES ARE USED TO FETCH DATA FROM GRAPHQL ( LIKE GET IN REST API )
    query,
    // MUTATIONS USED TO MODIFY DATA ON THE SERVER AND GET UPDATED DATA BACK ( CREATE, UPDATE, DELETE )
    mutation,
});

export default schema;

// ALMOST ALL GRAPHQL TYPES DEFINED ARE OBJECTS

// SCHEMA SERVES AS A CONTACT BETWEEN CLIENT AND SERVER, SO BE AND FE CAN WORK INDEPENDENTLY
// GRAPHQL 1
// GraphQL schema is at the core of any GraphQL server implementation. It describes the functionality AVAILABLE to the client applications that connect to it.

// ANNOTATION
