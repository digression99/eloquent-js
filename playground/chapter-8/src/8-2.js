const accounts = {
  a: 100,
  b: 0,
  c: 20
}

function getAccount() {
  let accountName = prompt('enter an account name')

  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error('No such account:', accountName)
  }

  return accountName
}

function transfer(from, amount) {
  if (accounts[from] < amount) return
  accounts[from] -= amount
  accounts[getAccount()] += amount
}

// using finally
function transfer(from, amount) {
  if (accounts[from] < amount) return

  let progress = 0

  try {
    accounts[from] -= amount
    progress = 1
    accounts[getAccount()] += amount
    progress = 2
  } finally {
    // if error occurs on getAccount
    if (progress == 1) {
      accounts[from] += amount
    }
  }
}

class InputError extends Error { }

function promptDirection(question) {
  let result = prompt(question)
  if (result.toLowerCase() == 'left') return 'L'
  if (result.toLowerCase() == 'right') return 'R'
  throw new InputError(`Invalid direction: ${result}`)
}

function tryPrompt() {
  for (; ;) {
    try {
      let dir = promptDirection('Where?')
      console.log('You chose', dir)
      break
    } catch (e) {
      if (e instanceof InputError) {
        // check only known errors.
        console.log('not a valid direction. try again.')
      } else {
        throw e
      }
    }
  }
}
