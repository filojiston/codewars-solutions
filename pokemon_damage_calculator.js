function calculateDamage(yourType, opponentType, attack, defense) {
  let effectiveness;

  switch (yourType) {
    case 'fire':
      if (opponentType === 'grass') effectiveness = 2;
      else if (opponentType === 'electric') effectiveness = 1;
      else effectiveness = 0.5;
      break;
    case 'water':
      if (opponentType === 'fire') effectiveness = 2;
      else effectiveness = 0.5;
      break;
    case 'grass':
      if (opponentType === 'water') effectiveness = 2;
      else if (opponentType === 'electric') effectiveness = 1;
      else effectiveness = 0.5;
      break;
    case 'electric':
      if (opponentType === 'water') effectiveness = 2;
      else if (opponentType === 'fire' || opponentType === 'grass') effectiveness = 1;
      else effectiveness = 0.5;
      break;
  }

  return 50 * (attack / defense) * effectiveness;
}

console.log(calculateDamage('fire', 'water', 100, 100), 25);
console.log(calculateDamage('grass', 'water', 100, 100), 100);
console.log(calculateDamage('electric', 'fire', 100, 100), 50);
console.log(calculateDamage('grass', 'electric', 57, 19), 150);
console.log(calculateDamage('grass', 'water', 40, 40), 100);
console.log(calculateDamage('grass', 'fire', 35, 5), 175);
console.log(calculateDamage('fire', 'electric', 10, 2), 250);
