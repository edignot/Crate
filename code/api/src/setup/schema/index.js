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
// GRAPHQL ANNOTATION
