exports.handler = async function http(request) {
  return {
    type: 'application/json; charset=utf8',
    body: JSON.stringify({
      message: 'hello world from /api',
    })
  }
}
