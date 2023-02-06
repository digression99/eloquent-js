
function flatten(arr) {
  if (!Array.isArray(arr)) return arr

  const l = arr.length
  let flattened = []

  for (let i = 0; i < l; ++i) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(flatten(arr[i]))
      continue
    }
    flattened = flattened.concat(arr[i])
  }
  return flattened
}

const test1 = [
  [1, 2, 3],
  4,
  [5, 6, [7, 8]],
  [9]
]

console.log(
  flatten(test1)
)


