exports.handler = async function http(req) {
  return {
    headers: {"content-type": "text/html"},
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
