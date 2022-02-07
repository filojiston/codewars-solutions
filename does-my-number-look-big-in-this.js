function narcissistic(value) {
  return value.toString()
    .split('')
    .reduce((acc, curr) => {
      acc += Math.pow(+curr, value.toString().length);
      return acc;
    }, 0) == value;
}


const narcissistic = (value) => value.toString().split('').reduce((acc, curr, _, arr) => acc += Math.pow(+curr, arr.length), 0) == value;


console.log(narcissistic( 7 ), true);
console.log(narcissistic( 371 ), true);