// date

console.log(new Date())

// month starts from 0. 11 equals to Dec.
console.log(new Date(2009, 11, 9))
console.log(new Date(2009, 11, 9, 12, 59, 59, 999))

console.log(new Date(2013, 11, 19).getTime())
console.log(new Date(1387407600000))

console.log(new Date(2009, 11, 9).getFullYear()) // 2009
console.log(new Date(2009, 11, 9).getYear()) // 109. not used frequently.

function getDate(string) {
  let [_, month, day, year] =
    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string)
  return new Date(year, month - 1, day)
}

console.log(getDate('1-30-2003'))
