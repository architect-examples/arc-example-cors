// src/http/get-index/index.js
let fs = require('fs')
let read = file=> fs.readFileSync(`${__dirname}/${file}`).toString()
let allow = ['index.mjs']
let cache = {}

exports.handler = async function http(req) {

  // declare our content-type
  let type = 'text/javascript; charset=utf8'

  try {
    // check for a legit file
    let file = req.params.file
    if (!file || !allow.includes(file))
      throw Error(`${file} not found`)

    // cache if not cached
    if (!cache[file])
      cache[file] = read(file)

    return {
      type,
      status: 200,
      body: cache[file]
    }
  }
  catch(e) {
    return {
      type,
      status: 404,
      body: `console.log("${e.message}")`
    }
  }
}

