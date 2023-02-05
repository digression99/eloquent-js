
function deepEqual_answer(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" ||
    b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}


function deepEqual(o1, o2) {
  if (Array.isArray(o1) && Array.isArray(o2)) {
    return o1.every((d, i) => d == o2[i])
  }

  for (let k of Object.keys(o1)) {
    if (
      typeof o1[k] == 'object' &&
      typeof o2[k] == 'object' &&
      o1[k] != null &&
      o2[k] != null
    ) {
      if (!deepEqual(o1[k], o2[k])) return false
    } else if (o2[k] != o1[k]) return false
  }

  return true
}

const o1 = { a: 1, b: 2, c: 3, d: { x: 1, y: 2 } }
const o2 = { a: 1, b: 2, c: 3, d: { x: 2, y: 2 } }
console.log(deepEqual(o1, o2) == false)

const o3 = { a: 1, b: 2, c: 3, d: { x: 1, y: 2 } }
const o4 = { a: 1, b: 2, c: 3, d: { x: 1, y: 2 } }
console.log(deepEqual(o3, o4) == true)

const o5 = { a: 1, b: 2, c: 3, d: [1, 2, 3] }
const o6 = { a: 1, b: 2, c: 3, d: [1, 2, 4] }
console.log(deepEqual(o5, o6) == false)

const o7 = { a: 1, b: 2, c: 3, d: [1, 2, 3] }
const o8 = { a: 1, b: 2, c: 3, d: [1, 2, 3] }
console.log(deepEqual(o7, o8) == true)
