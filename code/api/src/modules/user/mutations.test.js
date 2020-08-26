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
      .get('/')
      .send({ mutation: '{ userUpdate(id: 2, email: "user@email.com") { id email } }' })
      .send({ query: '{ user(id: 2) { email } }' })

    expect(response.body.data.user.email).toEqual("user@email.com")
  })

  // it('does not change email if it already exists')

})
