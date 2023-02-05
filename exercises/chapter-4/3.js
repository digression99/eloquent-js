// list

function arrayToList(arr) {
  function helper(ls, arr) {
    if (arr.length === 0) return null

    return {
      value: arr[0],
      rest: helper(ls, arr.slice(1))
    }
  }
  return helper(null, arr)
}

function listToArray(ls) {
  if (ls === null) return []
  return [ls.value].concat(listToArray(ls.rest))
}

function prepend(value, rest) {
  return {
    value,
    rest
  }
}

function nth(n, ls) {
  function helper(c, ls) {
    if (ls == null) return null
    if (c == 0) return ls.value
    return helper(c - 1, ls.rest)
  }
  return helper(n, ls)
}

const ls1 = { value: 3, rest: null }
const ls2 = { value: 2, rest: ls1 }
const ls3 = { value: 1, rest: ls2 }
// console.log(ls3)

const arr = [1, 2, 3, 4, 5]
const lis4 = arrayToList(arr)
console.log(JSON.stringify(lis4, null, 2))
console.log(listToArray(lis4))

console.log(nth(3, lis4))
console.log(nth(0, lis4))
console.log(nth(6, lis4))

