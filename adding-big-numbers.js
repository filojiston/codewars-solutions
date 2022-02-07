function add(a, b) {
  let [shorter, longer] = a.length < b.length ? [a, b] : [b, a];
  while (shorter.length !== longer.length) shorter = '0' + shorter;

  let additionResult = '';
  let carry = 0;
  let sum = 0;
  for (let i = longer.length - 1; i >= 0; i--) {
    const currentOfLonger = +longer[i];
    const currentOfShorter = +shorter[i];
    sum = currentOfLonger + currentOfShorter + carry;

    if (sum >= 10 && i !== 0) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    additionResult = sum + additionResult;
  }

  additionResult = carry ? sum + additionResult : additionResult;

  return additionResult;
}

// clever
function add(a, b) {
  let res = '',
    c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    console.log(c);
    res = (c % 10) + res;
    c = c > 9;
  }
  return res;
}

console.log(add('1', '1'), '2');
console.log(add('123', '456'), '579');
console.log(add('888', '222'), '1110');
console.log(add('1372', '69'), '1441');
console.log(add('12', '456'), '468');
console.log(add('101', '100'), '201');
console.log(
  add('63829983432984289347293874', '90938498237058927340892374089'),
  '91002328220491911630239667963'
);
console.log(add('99999', '1'), '1000');
