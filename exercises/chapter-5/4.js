// dominant writing direction
const SCRIPTS = require('../../playground/chapter-5/scripts')

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to
    })) {
      return script
    }
  }
  return null
}

function countBy(items, groupName) {
  let counts = []

  for (let item of items) {
    let name = groupName(item)
    let known = counts.findIndex(c => c.name == name)

    if (known == -1) {
      counts.push({
        name,
        count: 1
      })
    } else {
      counts[known].count++
    }
  }

  return counts
}

function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0))
    return script ? script.name : 'none'
  })
    .filter(({ name }) => name != 'none')

  const biggest = scripts.reduce((biggest, cur) => {
    return biggest.count > cur.count ? biggest : cur
  })

  return SCRIPTS.find(s => s.name == biggest.name).direction
}

function dominantDirection2(text) {
  let scripts = countBy(text, char =>
    characterScript(char.codePointAt(0))?.name ?? 'none'
  )
    .filter(({ name }) => name != 'none')

  const biggest = scripts.reduce((biggest, cur) => {
    return biggest.count > cur.count ? biggest : cur
  })

  return SCRIPTS.find(s => s.name == biggest.name).direction
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
