
function findSolution(target) {
  function find(current, history) {
    if (current == target) return history
    if (current > target) return ''
    return find(current + 5, `(${history} + 5)`)
      || find(current * 3, `(${history} * 3)`)
  }
  return find(1, "1")
}

console.log(findSolution(24))
console.log(findSolution(13))
