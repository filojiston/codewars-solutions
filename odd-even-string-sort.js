function sortMyString(str) {
  let odds = '';
  let evens = '';
  for (let i = 0; i < str.length; i++) {
    if (i & 1) {
      odds += str[i];
    } else {
      evens += str[i];
    }
  }

  return [evens, odds].join(' ');
}

// compact solution, i liked it
const sortMyString = s => {
  let even = s.split('').filter((v, i) => i % 2 === 0).join('')
  let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
  return even + ' ' + odd
}

// this is nice too, same as mine but less lines, still readable imo
function sortMyString(S) {
  let even = [], odd = [];
  S.split('').forEach((e, i) => { i % 2 === 0 ? even.push(e) : odd.push(e) })
  return `${even.join('')} ${odd.join('')}`;
}

console.log(sortMyString("CodeWars"), "CdWr oeas");
console.log(sortMyString("YCOLUE'VREER"), "YOU'RE CLEVER");
