
function reverseArray(arr) {
  const newArr = []
  const l = arr.length
  for (let i = l - 1; i >= 0; --i) {
    newArr.push(arr[i])
  }
  return newArr
}

const arr = [1, 3, 4, 8, 10]

console.log(
  reverseArray(arr)
)

function reverseArrayInPlace(arr) {
  let l = arr.length
  for (let i = 0; i < l / 2; ++i) {
    [arr[i], arr[l - i - 1]] = [arr[l - i - 1], arr[i]]
  }
  return arr
}

console.log(arr)
reverseArrayInPlace(arr)
console.log(arr)
