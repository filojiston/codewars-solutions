function strToHash(str) {
  return str.split(', ').reduce((acc, curr) => {
    let [key, value] = curr.split('=');
    if (value) acc[key] = +value;
    return acc;
  }, {});
}

console.log(strToHash('a=1, b=2, c=3, d=4'), { a: 1, b: 2, c: 3, d: 4 });
console.log(strToHash(''), {});
