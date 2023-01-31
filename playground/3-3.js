

let safeMode = true

if (safeMode) {
  // function binding can be changed.
  // order doesn't matter on function declaration.
  launchMissiles = function() {
    console.log('do nothing.')
  }
}

function launchMissiles() {
  console.log('launch')
}

launchMissiles()

