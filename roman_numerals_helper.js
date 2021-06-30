// class RomanNumerals {
//   static lookupTable = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };

//   static toRoman(intNumber) {
//     let result = '';
//     for (const i in this.lookupTable) {
//       while (intNumber >= this.lookupTable[i]) {
//         result += i;
//         intNumber -= this.lookupTable[i];
//       }
//     }

//     return result;
//   }

//   static fromRoman(romanNumber) {
//     let result = 0;
//     for (let i = romanNumber.length - 1; i >= 0; i--) {
//       const num = this.lookupTable[romanNumber[i]];
//       if (4 * num < result) result -= num;
//       else result += num;
//     }

//     return result;
//   }
// }

function RomanNumerals() {}

RomanNumerals.lookupTable = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

RomanNumerals.toRoman = function (intNumber) {
  let result = '';
  for (const i in this.lookupTable) {
    while (intNumber >= this.lookupTable[i]) {
      result += i;
      intNumber -= this.lookupTable[i];
    }
  }

  return result;
};

RomanNumerals.fromRoman = function (romanNumber) {
  let result = 0;
  for (let i = romanNumber.length - 1; i >= 0; i--) {
    const num = this.lookupTable[romanNumber[i]];
    if (4 * num < result) result -= num;
    else result += num;
  }

  return result;
};

console.log(RomanNumerals.toRoman(1000), 'M');
console.log(RomanNumerals.toRoman(999), 'CMXCIX');
console.log(RomanNumerals.toRoman(4), 'IV');
console.log(RomanNumerals.toRoman(1), 'I');
console.log(RomanNumerals.toRoman(1991), 'MCMXCI');
console.log(RomanNumerals.toRoman(2006), 'MMVI');
console.log(RomanNumerals.toRoman(2020), 'MMXX');

console.log(RomanNumerals.fromRoman('XXI'), 21);
console.log(RomanNumerals.fromRoman('I'), 1);
console.log(RomanNumerals.fromRoman('III'), 3);
console.log(RomanNumerals.fromRoman('IV'), 4);
console.log(RomanNumerals.fromRoman('MMVII'), 2007);
console.log(RomanNumerals.fromRoman('MDCLXIX'), 1669);
