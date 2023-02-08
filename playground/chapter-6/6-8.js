// Symbol

class Rabbit {
  constructor(type) {
    this.type = type
  }
  speak(line) {
    console.log(line)
  }
}

let sym = Symbol('name')
// Even though the name is same,
// every symbol is unique.
console.log(sym == Symbol('name')) // false

Rabbit.prototype[sym] = 55

let blackRabbit = new Rabbit('black')
console.log(blackRabbit[sym]) // 55

const toStringSymbol = Symbol('toString')

Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`
}

console.log([1, 2].toString())
console.log([1, 2][toStringSymbol]())

let stringObject = {
  [toStringSymbol]() {
    return 'a jute rope'
  }
}

console.log(
  stringObject[toStringSymbol]()
)

console.log(Symbol.iterator)
console.log(toStringSymbol)
