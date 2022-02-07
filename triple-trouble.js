function tripledouble(num1, num2) {
  // a place to store the numbers which has straight triple
  let numbers = [];

  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  // iterate over num1 and seek the straight triples
  for (let i = 0; i < strNum1.length - 2; i++) {
    if (strNum1[i] === strNum1[i + 1] && strNum1[i] === strNum1[i + 2]) {
      numbers.push(strNum1[i]);
    }
  }

  console.log(numbers);
  // if there isnt a straight triple, return 0
  if (!numbers)  return 0;

  // iterate over num2 and seek the straight double
  for (let i = 0; i < strNum2.length - 1; i++) {
    if (strNum2[i] === strNum2[i + 1] && numbers.includes(strNum2[i])) {
      return 1;
    }
  }

  return 0;
}

// a regex solution which is nice
// there is 10 digits so loop over each digit and check if it matches with given RegExp
// clever!
function tripledouble(num1, num2) {
  for (let i = 0; i < 10; i++) {
    if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
      return 1;
    }
  }
  return 0;
}


console.log(tripledouble(451999277,41177722899),1);
console.log(tripledouble(1222345, 12345),0);
console.log(tripledouble(12345, 12345),0);
console.log(tripledouble(666789, 12345667),1);
console.log(tripledouble(10560002, 100),1);
console.log(tripledouble(1112, 122),0);
console.log(tripledouble(6729838333222444, 44636962244),1);
