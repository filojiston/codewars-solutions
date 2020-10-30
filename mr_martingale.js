function martingale(bank, outcomes)
{
  let currentBet = 100;
  
  for (let outcome of outcomes) {
    bank -= currentBet;
    if (outcome) {
        bank += currentBet * 2;
        currentBet = 100;
    }
    else  currentBet *= 2;
  }
  
  return bank;
}

console.log(martingale(500, []), 500);
console.log(martingale(1000, [1, 1, 0, 0, 1]), 1300);
console.log(martingale(0, [0, 0, 0, 0, 1, 0, 0]), -200);
console.log(martingale(5100, [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0]), 5600);
console.log(martingale(-500, [1, 1, 0, 1, 0, 1, 0]), -200);