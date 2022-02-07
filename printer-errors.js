const printerError = (s) => `${s.split('').filter((letter) => !checkIfGood(letter)).length}/${s.length}`;

const checkIfGood = (letter) => letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 110;


console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'), "3/56");