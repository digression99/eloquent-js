const JOURNAL = require('./journal.js')
// correlation

function phi(table) {
  const [first, second, third, fourth] = table

  return (fourth * first - third * second) / Math.sqrt(
    (third + fourth) *
    (first + second) *
    (second + fourth) *
    (first + third)
  )
}

function tableFor(event, journal) {
  let table = [0, 0, 0, 0]

  for (let i = 0; i < journal.length; ++i) {
    let entry = journal[i], index = 0

    if (entry.events.includes(event)) index += 1
    if (entry.squirrel) index += 2
    table[index] += 1
  }

  return table
}

function journalEvents(journal) {
  let events = []

  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) events.push(event)
    }
  }
  return events
}

function calculateCorrelation(journal) {
  for (let event of journalEvents(journal)) {
    let correlation = phi(tableFor(event, journal))
    if (correlation > 0.1 || correlation < -0.1) {
      console.log(
        `${event}: ${correlation}`
      )
    }
  }
}

console.log(tableFor('pizza', JOURNAL))
console.log(journalEvents(JOURNAL))

calculateCorrelation(JOURNAL)

for (let entry of JOURNAL) {
  if (entry.events.includes('peanuts') &&
    !entry.events.includes('brushed teeth')) {
    entry.events.push('peanut teeth')
  }
}

console.log(
  phi(tableFor('peanut teeth', JOURNAL))
)
