function pofi(n) {
  switch (n) {
    case 4:
      return '1';
    case 3:
      return '-i';
    case 2:
      return '-1';
    case 1:
      return 'i';
    case 0:
      return '1';
  }
  while (n > 4) {
    n -= 4;
    switch (n) {
      case 4:
        return '1';
      case 3:
        return '-i';
      case 2:
        return '-1';
      case 1:
        return 'i';
    }
  }
}

function pofi(n) {
  return ['1', 'i', '-1', '-i'][n % 4];
}

console.log(pofi(0), '1');
console.log(pofi(1), 'i');
console.log(pofi(2), '-1');
console.log(pofi(3), '-i');
console.log(pofi(4), '1');
console.log(pofi(5), 'i');
console.log(pofi(6), '-1');
console.log(pofi(7), '-i');
console.log(pofi(8), '1');
console.log(pofi(9), 'i');
console.log(pofi(10), '-1');
