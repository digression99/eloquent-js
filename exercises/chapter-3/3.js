function countChar(s, ch) {
  return [...s].filter(c => c == ch).length
}

function countBs(s) {
  return countChar(s, 'B')
}

console.log(
  countBs('abcBsdeB1Bqwr')
)
