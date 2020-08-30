import request from 'supertest'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from '../../setup/schema'
import models from '../../setup/models'
import connection from '../../setup/database'
import params from'../../config/params.json'

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

  beforeEach(async() => {
    const admin = await models.User.create({
      id: 1,
      name: 'The Admin',
      email: 'admin@crate.com',
      password: '123456',
      role: params.user.roles.admin,
    })

    const user = await models.User.create({
      id: 2,
      name: 'The User',
      email: 'user@crate.com',
      password: '123456',
      role: params.user.roles.user,
    })
  })

  it('changes emails', async () => {
    const response = await request(server)
      .post('/')
      .send({ query:
        `mutation { userUpdate(id: 2, email: "user@email.com") { email } }`
      })
      .expect(200)

    const test = await models.User.findByPk(2)
    expect(test.email).toEqual("user@email.com")
  })

  it('does not change email if it already exists', async () => {
    const response = await request(server)
      .post('/')
      .send({ query:
        `mutation { userUpdate(id: 2, email: "admin@crate.com") { email } }`
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
      .expect(200)

    const test = await models.User.findByPk(2)
    expect(test.description).toEqual("A user description")
  })

  it('changes shippingAddress', async () => {
    const response = await request(server)
      .post('/')
      .send({
        query:
          `mutation { userUpdate(id: 2, email: "user@crate.com",
          shippingAddress: "main.st") { shippingAddress } }`
      })
      .expect(200)

    const test = await models.User.findByPk(2)
    expect(test.shippingAddress).toEqual("main.st")
  })

  it('can add an image', async() => {
    const response = await request(server)
      .post('/')
      .send({ query:
        `mutation { userUpdate(id: 2, email: "user@crate.com"
        imageUrl: "/images/uploads/an_image.jpg") { imageUrl } }`})
      .expect(200)

    const test = await models.User.findByPk(2)
    expect(test.imageUrl).toEqual("/images/uploads/an_image.jpg")
  })

  afterEach(async() => {
    await models.User.destroy({where: { }})
  })

  afterEach(async () => {
    await models.User.destroy({ where: {} })
  })

  afterAll(() => {
    connection.close()
  })
})
