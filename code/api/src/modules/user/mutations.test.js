import request from 'supertest'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from '../../setup/schema'
import models from '../../setup/models'

describe('user mutations', () => {
  let server;
  let user;

  beforeAll(() => {
    server = express();
    server.use('/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  })

  beforeEach(async() => {
    user = await models.User.create({name: 'John Doe', email: "user@email.com", password: "abc123"})
  })

  it('changes emails', async () => {
    const response = await request(server)
      .post('/')
      .send({ query:
        `mutation { userUpdate(id: ${ user.id }, email: "email@email.com", description: " ") { email } }`
      })
      .expect(200)

    expect(user.email).toEqual("email@email.com")
  })

  it('does not change email if it already exists', async () => {
    const response = await request(server)
      .post('/')
      .send({ query:
        `mutation { userUpdate(id: ${ user.id }, email: "user@crate.com", description: " ") { email } }`
      })

    expect(response.body.errors[0].message).toEqual(
      'The email user@crate.com is already registered. Please choose another.')
  })

  it('can add a description', async () => {
    const response = await request(server)
      .post('/')
      .send({ query:
        `mutation { userUpdate(id: ${ user.id }, email: "user@email.com",
        description: "A user description") { description } }`
      })
      .expect(200)

    expect(user.description).toEqual("A user description")
  })

  afterEach(async() => {
    return await models.User.destroy({where: { id: user.id }})
  })

})
