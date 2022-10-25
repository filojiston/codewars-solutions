function areaLargestSquare(r) {
  return Math.floor(Math.pow(r * Math.SQRT2, 2));
}

// silly me, √2 * √2 = 2, so this would be enough
function areaLargestSquare(r) {
  return r * r * 2;
}

console.log(areaLargestSquare(5), 50);
console.log(areaLargestSquare(7), 98);
console.log(areaLargestSquare(15), 450);
