// grouping

// 'i' means ignore capitals.
// (hoo+) means the '+' is applied to the group (hoo+).
let cartoonCrying = /boo+(hoo+)+/i // 


console.log(cartoonCrying.test('Boohooooohoohoooo')) // true
