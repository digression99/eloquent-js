
const { cos, sin, random, PI, max, min } = Math

function randomPointOnCircle(radius) {
  let angle = random() * 2 * PI
  return {
    x: radius * cos(angle),
    y: radius * sin(angle)
  }
}
console.log(randomPointOnCircle(2))


