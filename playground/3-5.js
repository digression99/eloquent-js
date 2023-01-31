
function showStackSize(c) {
  try {
    showStackSize(c + 1)
  } catch (e) {
    console.log(`[${c + 1}]Error : `, e.message)
  }
}

let count = 0
function showStackSizeWithoutVariable() {
  try {
    count++
    showStackSizeWithoutVariable()
  } catch (e) {
    console.log(`[${count}]Error : `, e.message)
  }
}

showStackSize(1)
console.log('Keep on running...')
showStackSizeWithoutVariable()

