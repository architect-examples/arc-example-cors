exports.handler = async function http(req) {
  return {
    type: 'text/html; charset=utf8',
    body: `
      <!doctype html>
      <html>
      <body>
      <h1>yo</h1>
      <script type=module src=/js/index.mjs></script>
      </body>
      </html>
    `
  }
}
