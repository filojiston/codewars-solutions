function diamond(n) {
  // if the number is negative of even
  if (n < 0 || !(n & 1)) {
    // return null
    return null;
  }
  
  // a place to store the result
  let result = '';

  // a place to store the number of spaces
  let numberOfSpaces = Math.floor(n / 2);
  // a place to store the number of asterisks
  let numberOfAsterisks = 1;

  // iterate up to n
  for (let i = 0; i < n; i++) {
    // add proper number of spaces to result
    for (let j = 0; j < numberOfSpaces; j++) {
      result += ' ';
    }
    // add proper number of asterisks to result
    for (let j = 0; j < numberOfAsterisks; j++) {
      result += '*';
    }
    // add a newline to result
    result += '\n';

    // calculate number of spaces and asterisks
    if (i >= Math.floor(n / 2)) {
      numberOfSpaces++;
      numberOfAsterisks -= 2;
    } else {
      numberOfSpaces--;
      numberOfAsterisks += 2;
    }
  }

  // return result
  return result;
}

console.log(diamond(1), "*\n");
console.log(diamond(3), " *\n***\n *\n");
console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n");
console.log(diamond(2), null);
console.log(diamond(-3), null);
console.log(diamond(0), null);
