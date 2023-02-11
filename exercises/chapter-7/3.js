// group saving

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

class PGroup {
  constructor(content) {
    this.content = content
  }

  add(v) {
    if (this.has(v)) return this
    return new PGroup(this.content.concat(v))
  }

  delete(v) {
    if (!this.has(v)) return this
    const idx = this.content.findIndex(c => c === v)

    return new PGroup([
      ...this.content.slice(0, idx),
      ...this.content.slice(idx + 1)
    ])
  }

  has(v) {
    return this.content.includes(v)
  }

  static empty() {
    return new PGroup([])
  }
}

const init = PGroup.empty()
console.log(init)

const next1 = init.add(1)
console.log(next1, init)

const next2 = next1.add(2)
console.log(next2, next1)

const next3 = next2.delete(1)
console.log(next3, next2)
