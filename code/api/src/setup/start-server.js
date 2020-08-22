// App Imports
import { PORT, NODE_ENV } from '../config/env'

// Start server
export default function (server) {
  console.info('SETUP - Starting server..')

// STARTS EXPRESS SERVER ON A GIVEN PORT NUMBER
  server.listen(PORT, (error) => {
    // ERROR HANDLING IF STARTING SERVER FAILS
    if (error) {
      console.error('ERROR - Unable to start server.')
    } else {
      // SUCCESSFULLY STARTED SERVER
      console.info(`INFO - Server started on http://localhost:${ PORT } [${ NODE_ENV }]`)
    }
  })
}

// EXPRESS ANNOTATION 
