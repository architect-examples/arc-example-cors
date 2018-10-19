exports.handler = async function http(req) {
  let stage = process.env.NODE_ENV
  return {
    type: 'text/html; charset=utf8',
    body: `
      <!doctype html>
      <html>
      <body>
      <h1>yo</h1>
      <script type=module src=/${stage}/js/index.mjs></script>
      </body>
      </html>
    `
  }
}
