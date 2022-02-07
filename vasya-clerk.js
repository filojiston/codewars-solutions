function tickets(peopleInLine){
  const ticketCost = 25;
  const moneyInRegister = {
    25: 0,
    50: 0,
    100: 0,
  };

  for (let money of peopleInLine) {
    if (money === ticketCost) {
      moneyInRegister[money]++;
    } else {
      let change = money - ticketCost;
      if (change === 75) {
        if (moneyInRegister[50] > 0 && moneyInRegister[25] > 0) {
          moneyInRegister[50]--;
          moneyInRegister[25]--;
          moneyInRegister[100]++;
        } else if (moneyInRegister[25] > 2) {
          moneyInRegister[25] -= 3;
        } else {
          return 'NO';
        }
      } else {
        if (moneyInRegister[25] > 0) {
          moneyInRegister[25]--;
          moneyInRegister[50]++;
        } else {
          return 'NO';
        }
      }
    }
  }
  return 'YES';
}

console.log(tickets([25, 25, 50, 50]), "YES");
console.log(tickets([25, 100]), "NO");
