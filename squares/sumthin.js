let a = 0;
const b = [1, 2, 3, 4, 5].map((x) => (
  (a += x), x * x
));

console.log(a) // ?
console.log(b) // ?
