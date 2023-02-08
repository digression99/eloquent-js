// hasOwnProperty on Map


Map.prototype.hasOwnProperty = function(v) {
  return this.has(v)
}

const m1 = new Map()

m1.set('one', 1)
m1.set('two', 2)
m1.set('three', 3)

console.log(
  m1.hasOwnProperty('one')
)

console.log(
  m1.hasOwnProperty('four')
)

// answer
let map = { one: true, two: true, hasOwnProperty: true };

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
