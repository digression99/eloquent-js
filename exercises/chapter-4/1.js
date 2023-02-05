
function range(start, end, step = 1) {
  const result = []
  for (let i = start; i <= end; i += step) {
    result.push(i)
  }
  return result
}

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur)
}

console.log(
  sum(
    range(1, 10)
  )
)

console.log(
  sum(
    range(1, 10, 2)
  )
)
