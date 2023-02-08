// vector

class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus(v) {
    return new Vector(this.x + v.x, this.y + v.y)
  }

  minus(v) {
    return new Vector(this.x - v.x, this.y - v.y)
  }

  static length(v) {
    const { sqrt, pow } = Math
    return sqrt(
      pow(v.x, 2) + pow(v.y, 2)
    )
  }
}

const v1 = new Vector(1, 2)
const v2 = new Vector(3, 4)

const v3 = v1.plus(v2)
const v4 = v3.plus(v2)

console.log(v3, v4)

console.log(Vector.length(v4))

const v5 = v1.minus(v2).minus(v2)
console.log(Vector.length(v5))
