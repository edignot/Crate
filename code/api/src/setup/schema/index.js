// Imports
import { GraphQLSchema } from 'graphql'

// App Imports
//query is a constant defined in the listed file
import query from './queries'
//mutation is a constant defined in the listed file
import mutation from './mutations'

// Schema
const schema = new GraphQLSchema({
  query,
  mutation
})

export default schema
