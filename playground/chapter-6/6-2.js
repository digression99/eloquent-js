
// true
console.log(
  Object.getPrototypeOf({}) == Object.prototype
)

// null
console.log(
  Object.getPrototypeOf(Object.prototype)
)

console.log(
  Object.getPrototypeOf(Math.max) == Function.prototype
)

console.log(
  Object.getPrototypeOf([]) == Array.prototype
)

// Using Object.create
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`)
  }
}

let killerRabbit = Object.create(protoRabbit)

killerRabbit.type = 'killer'
killerRabbit.speak('SKREEEE')

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit)
  rabbit.type = type
  return rabbit
}
