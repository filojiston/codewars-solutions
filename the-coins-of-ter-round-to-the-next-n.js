function adjust(coin, price) {
  for (let i = price; ; i++) {
    if (i % coin === 0) {
      return i;
    }
  }
}

console.log(adjust(3, 0), 0);
console.log(adjust(3, 1), 3);
console.log(adjust(3, -2), 0);
console.log(adjust(3, -4), -3);
console.log(adjust(3, 3), 3);
console.log(adjust(3, 6), 6);
console.log(adjust(3, 7), 9);
