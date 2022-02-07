function baseFinder(seq) {
  seq.sort((a, b) => a - b);

  let counter = +seq[0];
  for (let i = 1; i < seq.length; i++) {
    let currElem = +seq[i];
    counter++;
    if (counter !== currElem) return counter % 10;
  }

  return 10;
}

// those two are really nice solutions too
function baseFinder(seq){
  return new Set(seq.join``).size;
}

function baseFinder(seq) {
  return Math.max(...seq.join('')) + 1;
}

console.log(baseFinder(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']), 10);
console.log(baseFinder(['1', '2', '3', '4', '5', '6', '10', '11', '12', '13']), 7);
console.log(baseFinder(['50', '51', '61', '53', '54', '60', '52', '62', '55', '56']), 7);
console.log(baseFinder(['301', '302', '303', '304', '305', '310', '311', '312', '313', '314']), 6);
/*
['50', '51', '61', '53', '54', '60','52', '62', '55','56']
*/

/*
['301', '302', '303', '304', '305', '310', '311', '312', '313','314']
*/