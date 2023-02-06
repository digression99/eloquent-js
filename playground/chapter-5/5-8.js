const scripts = require('./scripts')

function characterScript(code) {
  for (let script of scripts) {
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

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0))
    return script ? script.name : 'none'
  })
    .filter(({ name }) => name != 'none')

  let total = scripts.reduce((n, { count }) => n + count, 0)
  if (total == 0) return 'no scripts found'

  return scripts.map(({ name, count }) => {
    return `${Math.round(count * 100 / total)}% ${name}`
  })
    .join(', ')
}

console.log(
  textScripts('가나다 123123abcde, This is korean.')
)
