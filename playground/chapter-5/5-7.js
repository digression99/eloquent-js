const horseShoe = "😂😃"

console.log(horseShoe.length) // 4

console.log(horseShoe[0])

console.log(horseShoe.charCodeAt(0))

// entire unicode.
console.log(horseShoe.codePointAt(0))

// recognizes unicode.
for (let char of horseShoe) {
  console.log(char)
}



