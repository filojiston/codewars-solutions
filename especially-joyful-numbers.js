function numberJoy(n) {
    let digits = n.toString().split('').map(x => +x);
    const sumOfDigits = digits.reduce((a, b) => a + b);
    const sumOfDigitsReversed = +sumOfDigits.toString().split('').reverse().join('');

    return sumOfDigits * sumOfDigitsReversed == n;
}


console.log(numberJoy(1997), false, 'Not a Harshad number')
console.log(numberJoy(1998), false, 'Harshad but digit sum=27, and 27x72 does not equal 1998')
console.log(numberJoy(1729), true, 'Harshad and digit sum=19, and 19x91 = 1729')
console.log(numberJoy(18), false, 'Harshad but digit sum=9, and 9x9 does not equal 18')
console.log(numberJoy(1), true, "It was correct")
console.log(numberJoy(81), true, "It was correct")
console.log(numberJoy(1458), true, "It was correct")
