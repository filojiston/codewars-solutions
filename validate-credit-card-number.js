function validate(n) {
  let ints = n.toString().split('');
  ints = ints.map((curr, index, arr) => {
    curr = +curr;
    if (arr.length % 2 == 0) {
      if (index % 2 == 0)  {
        let result = curr * 2;
        return result > 9 ? result - 9 : result;
      }
    } else {
      if (index % 2 !== 0) {
        let result = curr * 2;
        return result > 9 ? result - 9 : result;
      }
    }

    return curr;
  });

  const sum = ints.reduce((a, b) => a + b);
  return !(sum % 10);
}


console.log(validate(123), false);
console.log(validate(1), false);
console.log(validate(2121), true);
console.log(validate(1230), true);
console.log(validate(891), false);