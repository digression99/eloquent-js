let kim = "Kim"
kim.age = 88
console.log(kim.age) // undefined

// string methods
console.log('coconuts'.slice(4, 7))
console.log('coconuts'.indexOf('u'))
// with string, you can search multiple length of string.
console.log('one two three'.indexOf('ee'))

// with string, you can search multiple length of string.
console.log(' okay \n '.trim())

console.log(String(6).padStart(3, "0"))

let sentence = "Secretarybirds specialize in stomping"
let words = sentence.split(' ')
console.log(words.join('. '))
console.log('LA'.repeat(3))


