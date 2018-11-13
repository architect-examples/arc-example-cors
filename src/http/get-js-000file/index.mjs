// /js/index.mjs
async function main() {

  let res = await fetch(`/api`)
  let result = await res.json()
  console.log('response from /api', result)
}

// whee
main()
