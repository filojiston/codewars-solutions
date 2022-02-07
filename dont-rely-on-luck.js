Math.random = function() {
  return 0;
}

const guess = 1;


const lucky_number = Math.floor(Math.random() * 100 + 1);
console.log(guess, lucky_number);
