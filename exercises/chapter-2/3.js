
let size = 8

for (let i = 0; i < size; ++i) {
  console.log(
    Array
      .from({ length: size })
      .map((_, j) => (j + i) % 2 == 0 ? ' ' : '#')
      .join('')
  )
}
