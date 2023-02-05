// destructuring

const { sqrt } = Math

function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
    sqrt(
      (n10 + n11) * (n00 + n01) *
      (n01 + n11) * (n00 + n10)
    )
}

let { name } = { name: "Faraji", age: 23 }
console.log(name)
