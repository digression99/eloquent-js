// polymorphism

class Rabbit {
  constructor(type) {
    this.type = type
  }
  speak(line) {
    console.log(line)
  }
}

let rb1 = new Rabbit('rabbit')
console.log(rb1)

Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`
}

console.log(rb1) // console.log doesn't call toString()
console.log(String(rb1))


