// it may happen that the input string have leading,
// trailing whitespaces and more than a unique whitespace
// between two consecutive numbers

function orderWeight(strng) {
  // remove all trailing spaces
  let str_arr = strng.replace(/\s{2,}/g, ' ').trim().split(' ');
  // sort array based on given instructions
  str_arr.sort((a, b) => {
    const weightA = a.split('').map(x => +x).reduce((a, b) => a + b);
    const weightB = b.split('').map(x => +x).reduce((a, b) => a + b);
    if (weightA !== weightB) return weightA - weightB;
    return a.localeCompare(b);
  });

  // return as a string joined by a whitespace
  return str_arr.join(' ');
}

function orderWeight(strng) {
  let str_arr = strng.replace(/\s{2,}/g, ' ').trim().split(' ');
  str_arr.sort((a, b) => {
    const weightA = a.split('').map(x => +x).reduce((a, b) => a + b);
    const weightB = b.split('').map(x => +x).reduce((a, b) => a + b);
    return weightA === weightB ? a.localeCompare(b) : weightA - weightB;
  });

  return str_arr.join(' ');
}



console.log(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99");
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"),
  "11 11 2000 10003 22 123 1234000 44444444 9999");
