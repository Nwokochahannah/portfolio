const { create, login, profile } = require('./controller/auth.controller')
let customErr = new Error()

exports.handler = async (event) => {
  let payload

  console.log('headers', event.headers['x-variant'])

  try {
    if (event.headers['x-variant'] === 'create') {
      payload = JSON.parse(event.body)
      // create Admin
      if (!payload.email) {
        //throw err herr
        customErr.message = 'Content can not be empty!'
        customErr.code = 400
        throw customErr
      }
      const doc = await create(payload)

      return {
        statusCode: 200,
        body: JSON.stringify(doc),
      }
    } else if (event.headers['x-variant'] === 'login') {
      payload = JSON.parse(event.body)
      // do the other thing
      if (!payload.email) {
        //throw err herr
        customErr.message = 'Content can not be empty!'
        customErr.code = 400
        throw customErr
      }
      const doc = await login(payload)
      return {
        statusCode: 200,
        body: JSON.stringify(doc),
      }
    } else if (event.headers['x-variant'] === 'profile') {
      // do the other thing
      payload = event.queryStringParameters
      if (!payload.secret) {
        customErr.message = 'Query can not be empty!'
        customErr.code = 400
        throw customErr
      }
      const doc = await profile(payload)
      return {
        statusCode: 200,
        body: JSON.stringify(doc),
      }
    } else {
      customErr.message = 'bed request!'
      customErr.code = 400
      throw customErr
    }
  } catch (error) {
    // console.log(error)
    return {
      statusCode: error.code || 500,
      body: JSON.stringify({
        message: error.message || 'something went wrong try again!',
      }),
    }
  }
}
