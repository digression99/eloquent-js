let re1 = new RegExp('abc')
let re2 = /abc/
let eighteenPlus = /eighteen\+/

console.log(re2.test('abcde')) // true
console.log(re2.test('abxde')) // false

console.log(
  /[0123456789]/.test('in 1992')
)
console.log(
  /[0-9]/.test('in 1992') // unicode range.
)

// \d - all numbers.
// \w - english + number
// \s - whitespaces(space, tab, newlines)
// \D - everything but numbers.
// \W - everything but english + number
// \S - everything but whitespaces
// . - everything except newline

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;

// true
console.log(
  dateTime.test("01-30-2003 15:20")
)

// false
console.log(
  dateTime.test("30-jan-2003 15:20")
)

// inside a square bracket, 
// the meaning of .(dot) disappears.
// the start carot(^) reverses the meaning of a set.

let notBinary = /[^01]/
console.log(
  notBinary.test("11001000101010110")
)
console.log(
  notBinary.test("11002000101010110")
)

let onlyNumbers = /[\d.]/ // number or dot.
console.log('onlyNumbers', onlyNumbers.test('kk1.k')) // true
console.log(onlyNumbers.test('abcde.')) // true

// repetition on pattern
console.log(/'\d+'/.test("'123'")) // '+' means 1 or more match.
console.log(/'\d*'/.test("''")) // '*' means 0 or more match.

let neighbor = /neighbou?r/ // '?' means 0 or 1 match.
console.log('neighbor', neighbor.test('neighbour'))
console.log(neighbor.test('neighbor'))
console.log(neighbor.test('neighbouur'))

// {m,n} means m to n match.
// {m,} means m or more match.
// {m} means only m match.
let dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/
console.log('dateTime2', dateTime2.test('1-30-2003 8:45'))
