// Imports
import express from 'express'

// App Imports
import setupLoadModules from './setup/load-modules'
import setupGraphQL from './setup/graphql'
import setupUpload from './setup/upload'
import setupStartServer from './setup/start-server'

// Create express server
// EXPRESS IS A LIGHTWEIGHT WEB APPLICATION FRAMEWORK FOR NODE
// EXPRESS IS A ROUTING AND MIDDLEWARE WEB FRAMEWORK. IT'S A SERIES OF MIDDLEWARE FUNCTION CALLS
// express() IS A FUNCTION 

// CREATES NEW EXPRESS APPLICATION
const server = express()

// Setup load modules
// LOADS ALL MODULES LIKE CORS, COOKIE PARSER, BODY PARSER...
setupLoadModules(server)

// Setup uploads
// SETUP MULTER FORM FILES/IMAGES UPLOAD
setupUpload(server)

// Setup GraphQL
setupGraphQL(server)

// Start server
setupStartServer(server)


// EXPRESS ANNOTATION