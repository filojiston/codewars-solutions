// get total sum
function procedure(n) {
    // find all of its multiples up to and including 100
    const multiples = getMultiplesUpTo100(n);

    // digit sum of each multiple
    const digitSums = multiples.map(getDigitSumOfNumber);

    return digitSums.reduce((sum, digitSum) => sum + digitSum, 0);
}

function getMultiplesUpTo100(n) {
    const multiples = [];
    for (let i = n; i <= 100; i++) {
        if (i % n == 0) {
            multiples.push(i);
        }
    }

    // alternatively
    // for (let i = n; i <= 100; i += n) {
    //     multiples.push(i)
    // }
    // but if n = 0 then we'll get an infinite loop

    return multiples;
}

function getDigitSumOfNumber(n) {
    return n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

console.log(procedure(30), 18);
console.log(procedure(12), 72);
console.log(procedure(49), 30);
console.log(procedure(17), 48);
console.log(procedure(10), 46);

