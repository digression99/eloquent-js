

// use loop.
function every1(arr, test) {
  for (let i = 0; i < arr.length; ++i) {
    if (!test(arr[i])) return false
  }
  return true
}

// use some method.
function every2(arr, test) {
  return !arr.some(e => !test(e))
}

const a = [1, 2, 3, 4, 5]

console.log(
  a.some(el => el > 4),
  a.every(el => el > 4)
)

console.log(
  every1(a, el => el > 4),
  every2(a, el => el > 4)
)

console.log(
  every1(a, el => el > 0),
  every2(a, el => el > 0)
)
