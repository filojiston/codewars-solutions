const isPerfectSquare = (num) => Number.isInteger(Math.sqrt(num));
const findNextSquare = (sq) => isPerfectSquare(sq) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;


console.log(findNextSquare(121), 144);
console.log(findNextSquare(625), 676);
console.log(findNextSquare(319225), 320356);
console.log(findNextSquare(155));
console.log(findNextSquare(342786627));