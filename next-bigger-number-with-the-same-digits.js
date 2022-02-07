// working but too slow as i expected
// lets improve
function nextBigger(n) {
  const limit = Math.pow(10, n.toString().length);
  const arrToCompare = n.toString().split('').sort();
  
  for (let i = n + 1; i < limit; i++) {
    const currNumberArr = i.toString().split('').sort();
    if (JSON.stringify(arrToCompare) == JSON.stringify(currNumberArr))  return i;
  }

  return -1;
}

function nextBigger(n) {
  const limit = parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
  
  for (let i = n + 1; i <= limit; i++) 
    if(hasSameDigits(n, i)) return i;
  
  return -1;
}

// this function hashes numbers with prime number indexes
// if hashes same, then it has same digits and same length
function hasSameDigits(a, b) {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    let hashA = 1, hashB = 1;
    while (a > 0) {
        hashA *= primes[a%10];
        a = Math.floor(a / 10);
    }
    while (b > 0) {
        hashB *= primes[b%10];
        b = Math.floor(b / 10);
    }
    
    return hashA == hashB;
}

console.log(nextBigger(12),21);
console.log(nextBigger(513),531);
console.log(nextBigger(2017),2071);
console.log(nextBigger(414),441);
console.log(nextBigger(144),414);