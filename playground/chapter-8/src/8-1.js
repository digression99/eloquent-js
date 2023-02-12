// "use strict"
// no strict program.
function canYouSpotTheProblem() {
  // no declaration of let.
  for (counter = 0; counter < 10; counter++) {
    console.log('happy happy')
  }
}

canYouSpotTheProblem()

function Person(name) { this.name = name }
const p = Person('ferdinand')
console.log(name) // bounded to the global object.
