function primeFactors(n) {
  let result = [];
  let miniResult = '';
  for (let i = 2; i <= n; i++) {
    if (!isPrime(i))  continue;

    let count = 0;
    while (n % i == 0) {
      count++;
      n = Math.floor(n / i);
    }

    if (count) {
      if (count === 1) {
        miniResult += i;
      } else {
        miniResult += i + '**' + count; 
      }
    }

    if (miniResult)
      result.push(miniResult);
    miniResult = '';
  }

  return result.map(x => '(' + x + ')').join('');
}

function isPrime(n) {
  if (n < 2)  return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

console.log(primeFactors(18195729),"(2**2)(3**3)(5)(7)(11**2)(17)");