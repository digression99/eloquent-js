

function loop(v, test, update, action) {
  while (test(v)) {
    action(v)
    v = update(v)
  }
}

loop(0,
  n => n < 10,
  n => n + 1,
  console.log
)
