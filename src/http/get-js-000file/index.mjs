// /js/index.mjs
async function main() {

  let res = await fetch(`${window.location.pathname}/api`)
  let result = await res.json()
  console.log('response from /api', result)
}

// whee
main()
