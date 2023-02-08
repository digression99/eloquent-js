
function Rabbit(type) {
  this.type = type
}

Rabbit.prototype.speak = function(line) {
  console.log(this.type, 'says', line)
}

let weirdRabbit = new Rabbit('weird')

weirdRabbit.speak('haha')

// true
console.log(
  Object.getPrototypeOf(Rabbit) == Function.prototype
)

// true
console.log(
  Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype
)
