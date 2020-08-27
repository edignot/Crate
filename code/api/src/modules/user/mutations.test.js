import request from 'supertest'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from '../../setup/schema'

describe('user mutations', () => {
  let server;

  beforeAll(() => {
    server = express();
    server.use('/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  })

  it('changes emails', async () => {
    const response = await request(server)
      .post('/')
      .send({ query:
        'mutation { userUpdate(id: 2, email: "user@email.com", description: " ") { email } }'
      })
      .send({ query: '{ user(id: 2) { email description } }' })
      .expect(200)

    expect(response.body.data.user.email).toEqual("user@email.com")
  })

  it('does not change email if it already exists', async () => {
    const response = await request(server)
      .post('/')
      .send({ query:
        'mutation { userUpdate(id: 2, email: "admin@crate.com", description: " ") { email } }'
      })

    expect(response.body.errors[0].message).toEqual(
      'The email admin@crate.com is already registered. Please choose another.')
  })

  it('can add a description', async () => {
    const response = await request(server)
      .post('/')
      .send({ query:
        `mutation { userUpdate(id: 2, email: "user@crate.com",
        description: "A user description") { description } }`
      })
      .send({ query: '{ user(id: 2) { description } }' })
      .expect(200)

    expect(response.body.data.user.description).toEqual("A user description")
  })

})
