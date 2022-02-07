// my first solution
// function generateColor() {
//   const values = '0123456789ABCDEF';
//   let result = '#';

//   for (let i = 0; i < 6; i++) {
//     result += values[Math.floor(Math.random() * values.length)];
//   }

//   return result;
// }

// my one liner solution
const generateColor = () =>
  new Array(7).fill(0).map((elem, idx) => idx == 0 ? '#' : '0123456789ABCDEF'[Math.floor(Math.random() * 16)]).join('');

// like that solution
// function generateColor() {
//   return `#${(0 | Math.random() * 0xEEEEEE + 0x111111).toString(16)}`
// }

console.log(generateColor())
console.log(generateColor())
console.log(generateColor())
console.log(generateColor())
console.log(generateColor())
console.log(generateColor())
console.log(generateColor())
console.log(generateColor())
console.log(generateColor())
