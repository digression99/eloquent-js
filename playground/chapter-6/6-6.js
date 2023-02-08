// Map

let ages = new Map()
ages.set('Boris', 39)
ages.set('Liang', 22)
ages.set('Julia', 62)

// console.log(`Julia is ${ages.get('Julia')}`)
// console.log(`Is Jack's age known? ${ages.has('Jack')}`)
// console.log(ages.has('toString'))

// use hasOwnProperty to check if the object has the field
// except the prototype data.
console.log({ x: 1 }.hasOwnProperty('toString')) // false
// better to use Object.hasOwn than Object.prototype.hasOwnProperty.
console.log(Object.hasOwn({ x: 1 }, 'toString')) // false
console.log('toString' in { x: 1 }) // true
console.log('Liang' in ages) // false
