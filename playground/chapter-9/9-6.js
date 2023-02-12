// replace

console.log('papa'.replace('p', 'm'))

console.log('Borobudur'.replace(/[ou]/, 'a'))
console.log('Borobudur'.replace(/[ou]/g, 'a'))

// matching group
// $1, $2, ... , $9
// $& - the entire matched string.
console.log(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
    .replace(
      /(\w+), (\w+)/g,
      "$2 $1 $&"
    )
)

// matching function
console.log(
  'the cia and fbi'
    .replace(
      /\b(fbi|cia)\b/g,
      str => str.toUpperCase()
    )
)

let stock = "1 lemon, 2 cabbages, and 101 eggs"

function minusOne(match, amount, unit) {
  amount = Number(amount) - 1

  if (amount == 1) {
    unit = unit.slice(0, unit.length - 1)
  } else if (amount == 0) {
    amount = 'no'
  }
  return `${amount} ${unit}`
}

console.log(
  stock.replace(
    /(\d+) (\w+)/g,
    minusOne
  )
)
