/**
 *
 * @param {faunadb} faunadb
 * @param {client} client
 * @param {Object} payload
 * @returns {Promise}
 */

const { faunadb, client } = require('../fauna')
// const { verifyIdentity } = require('../utility/helpers')

exports.create = async (payload) => {
  const { Create, Collection } = faunadb.query

  return client.query(
    Create(Collection('admins'), {
      credentials: { password: payload.password },
      data: {
        firstName: 'Hannah'.toLowerCase(),
        lastName: 'Nwokocha'.toLowerCase(),
        email: payload.email?.toLowerCase(),
        middleName: 'Sopuruchi'.toLowerCase(),
        photoUrl: 'https://avatars.githubusercontent.com/u/62136073?v=4',
        createdAt: new Date(),
      },
    })
  )
}

exports.login = (payload) => {
  const { Login, Match, Index } = faunadb.query
  const { email, password } = payload

  return client.query(
    Login(Match(Index('admins_by_email'), email), { password })
  )
}

exports.profile = async (payload) => {
  const { Get, Ref, Collection } = faunadb.query
  // const valid = await verifyIdentity(faunadb, payload)

  return client.query(Get(Ref(Collection('admins'), payload.id)))
}

exports.logout = () => {
  const { Logout } = faunadb.query

  return client.query(Logout(true))
}
