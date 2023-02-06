const scripts = require('./scripts')

function filter(array, test) {
  let passed = []

  for (let element of array) {
    if (test(element)) {
      passed.push(element)
    }
  }

  return passed
}

filter(scripts, script => script.living)
  .map(script => script.name)

scripts.filter(
  s => s.direction == 'ttb'
)
  .map(s => s.name)
  .map(s => console.log(s))
