// eviternity number -> contains only digits 8, 5, 3
// 8 >= 5 >= 3

// in range >=a <b

function solve(a,b){

  const result = [];

  for (let i = a; i < b; i++) {
    if (isEviternity(i)) result.push(i);
  }

  return result.length;
}


// returns true if number is eviternity , undefined otherwise
function isEviternity(num) {
  const base = num.toString().split('');

  let numOfEights = 0;
  let numOfFives = 0;
  let numOfThrees = 0;

  for (let i = 0; i < base.length; i++) {
    const item = base[i];
    if (item === '8') numOfEights++;
    else if (item === '5') numOfFives++;
    else if (item === '3') numOfThrees++;
    else  return false;
  }

  return checkCounts(numOfEights, numOfFives, numOfThrees);
}

function checkCounts(x=0, y=0, z=0) {
  return x >= y && y >= z;
}

//console.log(solve(0,100),4);
console.log(solve(90,139701),99);
//console.log(solve(0,10000),37);
//console.log(solve(0,100000),103);
//console.log(solve(0,500000),148);
