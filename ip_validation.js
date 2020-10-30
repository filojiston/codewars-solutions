const net = require('net');

function isValidIP(str) {
  const ip = str.split('.');
  
  return ip.length === 4 && ip.every(elem => {
    if (elem.startsWith('0') && elem.length !== 1)  return false;
    return elem.match(/^\d+$/g) && +elem >= 0 && +elem <= 255;
  });
}

function isValidIP(str) {
  const ip = str.split('.');
  
  return ip.length === 4 && !ip.some(elem => {
    return !elem.match(/^\d+$/) || (elem < 0 || elem > 255) || (elem.length > 1 && elem[0] === '0');
  });
}

function isValidIP(str) {
  return !(net.isIP(str) === 0);
}

console.log(isValidIP("0.0.0.0"), true);
console.log(isValidIP("12.255.56.1"), true);
console.log(isValidIP("137.255.156.100"), true);

console.log(isValidIP(""), false);
console.log(isValidIP("abc.def.ghi.jkl"), false);
console.log(isValidIP("123.456.789.0"), false);
console.log(isValidIP("12.34.56"), false);
console.log(isValidIP("01.02.03.04"), false);
console.log(isValidIP("256.1.2.3"), false);
console.log(isValidIP("1.2.3.4.5"), false);
console.log(isValidIP("123,45,67,89"), false);
console.log(isValidIP("1e0.1e1.1e2.2e2"), false);
console.log(isValidIP(" 1.2.3.4"), false);
console.log(isValidIP("1.2.3.4 "), false);
console.log(isValidIP("12.34.56.-7"), false);
console.log(isValidIP("1.2.3.4\n"), false);
console.log(isValidIP("\n1.2.3.4"), false);
