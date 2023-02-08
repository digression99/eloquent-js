// iterable group

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
    // you don't need parentheses with empty constructor.
    const g = new Group
    for (let v of itr) g.add(v)
    return g
  }
}

class GroupIterator {
  constructor(g) {
    this.i = 0
    this.g = g
    this.l = this.g.content.length
  }

  next() {
    if (this.i == this.l) return { value: undefined, done: true }
    return { value: this.g.content[this.i++], done: false }
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this)
}

const g1 = new Group
g1.add(1)
g1.add(2)
g1.add(3)

for (let v of g1) {
  console.log(v)
}
