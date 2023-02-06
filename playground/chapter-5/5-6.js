const scripts = require('./scripts')

// given the character code,
// find the character set.
function characterScript(code) {
  for (let script of scripts) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to
    })) {
      return script
    }
  }
  return null
}

console.log(
  characterScript(121)
)
