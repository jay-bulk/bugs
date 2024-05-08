let sum = 0;
const squares = [1, 2, 3, 4, 5].map((x) => (
  (sum += x), x * x
));

console.log(sum) // 15
console.log(squares) // [1, 4, 9, 16, 25]
