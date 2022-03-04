const faunadb = require('faunadb')
const client = new faunadb.Client({
  secret: process.env.FAUNA_SECRET_KEY,
})
module.exports = {
  faunadb,
  client,
}
