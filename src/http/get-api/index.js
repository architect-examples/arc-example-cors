let arc = require('@architect/functions')

exports.handler = arc.http.async(fun)

async function fun (request) {
  return {
    cors: true,
    json: {
      message: 'hello world from /api',
    }
  }
}
