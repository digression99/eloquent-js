// carot(^) means the start of the string.
// dollar($) means the end of the string.

let moreThanOneNumber = /^\d+$/
console.log(moreThanOneNumber.exec('123123'))
console.log(moreThanOneNumber.exec('123123a')) // null

let startWithExlamationMark = /^!(\w)*!?$/

console.log(startWithExlamationMark.exec('!haha'))
console.log(startWithExlamationMark.exec('!haha!'))

// word boundary
console.log('word boundary 1:', /\bcat\b/.test('concatenate')) // false
console.log('word boundary 2:', /\bcat\b/.test('I love my cat')) // true

// piping
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/
console.log(animalCount.test('15 pigs'))
console.log(animalCount.test('15 pigchickens'))
