
let doh = "Doh"

console.log(typeof doh.toUpperCase)

console.log(doh.toUpperCase())

const a = {
  'Doh': 'data 1',
  'doh': 'data 1',
}

console.log(a[doh])

let anObject = { left: 1, right: 2 }
console.log(anObject.left)

delete anObject.left
console.log(anObject.left)

console.log('left' in anObject)
console.log('right' in anObject)
