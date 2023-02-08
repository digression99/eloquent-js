
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`)
}

let whiteRabbit = {
  type: 'white',
  speak
}

let hungryRabbit = {
  type: 'hungry',
  speak
}

// whiteRabbit.speak('oh my ears and whiskers, how late its getting!')
// hungryRabbit.speak('oh my ears and whiskers, how late its getting!')

speak.call(hungryRabbit, 'Burp!')

function normalize() {
  console.log(this.coords.map(n => n / this.length))
}

normalize.call({ coords: [0, 2, 3], length: 5 })
