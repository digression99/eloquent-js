// group class

class Group {
  constructor() {
    this.content = []
  }
  add(v) {
    if (this.has(v)) return
    this.content.push(v)
  }
  delete(v) {
    if (!this.has(v)) return
    const idx = this.content.indexOf(v)
    if (idx == -1) return
    this.content.splice(idx, 1)
  }
  has(v) {
    return this.content.includes(v)
  }

  static from(itr) {
    const g = new Group()
    for (let k of itr) {
      g.add(k)
    }
    return g
  }
}

const g1 = new Group()

g1.add(1)
g1.add(2)
g1.add(3)
g1.add(1)

console.log(g1)
console.log(g1.has(4))
g1.delete(1)
g1.delete(4)
console.log(g1)

const g2 = Group.from([5, 6, 7])
console.log(g2)

