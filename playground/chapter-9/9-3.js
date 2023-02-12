// match

let s = 'one two 100'
let match = /\d+/.exec(s)
console.log(match)
console.log(match.index) // the start index of the match.
console.log(match.input) // the entire input.
console.log(s.slice(match.index)) // 100
console.log(s.match(/\d+/)) // string has a prototype method.

// index 0 has the entire match.
// index 1 has the first match, index 2 has the second match and so on.

let quotedText = /'([^']*)'/g
console.log(quotedText.exec("She said 'hello' and I said 'nice'"))

console.log(/bad(ly)?/.exec('bad')) // match[1] is undefined.

// match[1] is '3', because if there are many matches,
// only last match survives.
console.log(/(\d)+/.exec('123'))
console.log(/(\d)(\d)(\d)/.exec('123')) 
