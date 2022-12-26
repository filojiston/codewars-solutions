function hasSurvived(attackers, defenders) {
  let attackerSurvivors = 0;
  let defenderSurvivors = 0;
  let totalAttackerPower = 0;
  let totalDefenderPower = 0;
  const attackersCopy = [...attackers];
  const defendersCopy = [...defenders];

  while (attackersCopy.length && defendersCopy.length) {
    const attacker = attackersCopy.shift() || 0;
    const defender = defendersCopy.shift() || 0;

    totalAttackerPower += attacker;
    totalDefenderPower += defender;

    if (attacker > defender) {
      attackerSurvivors++;
    } else if (defender > attacker) {
      defenderSurvivors++;
    }
  }

  while (attackersCopy.length) {
    totalAttackerPower += attackersCopy.shift();
    attackerSurvivors++;
  }

  while (defendersCopy.length) {
    totalDefenderPower += defendersCopy.shift();
    defenderSurvivors++;
  }

  if (defenderSurvivors > attackerSurvivors) {
    return true;
  } else if (attackerSurvivors > defenderSurvivors) {
    return false;
  } else {
    return totalDefenderPower >= totalAttackerPower;
  }
}

// i liked this solution because it solves immutability with checking elements in the array with index
function hasSurvived(attackers, defenders) {
  let attack = 0;
  let defend = 0;
  let attackSum = 0;
  let defendSum = 0;
  let i = 0;
  while (attackers[i] || defenders[i]) {
    if (!attackers[i] || attackers[i] < defenders[i]) {
      defend++;
    } else if (!defenders[i] || attackers[i] > defenders[i]) {
      attack++;
    }
    if (attackers[i]) {
      attackSum += attackers[i];
    }
    if (defenders[i]) {
      defendSum += defenders[i];
    }
    i++;
  }
  return defend === attack ? attackSum <= defendSum : defend > attack;
}

// this solution is clean and concise, i like that more than the above
// just it could be more verbose by using attacker instead of a and defender instead of d
function hasSurvived(a, d) {
  const aStart = a.reduce((val, acc) => acc + val, 0);
  const dStart = d.reduce((val, acc) => acc + val, 0);

  let dAfterFight = d.filter((el, idx) => 0 < el - a[idx]).length;
  let aAfterFight = a.filter((el, idx) => 0 < el - d[idx]).length;

  if (dAfterFight > aAfterFight) return true;
  if (dAfterFight === aAfterFight) return dStart >= aStart;
  return false;
}

console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false);
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]), true);
console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]), true);
console.log(hasSurvived([], [1, 2, 3]), true);
console.log(hasSurvived([1, 2, 3], []), false);
console.log(
  hasSurvived(
    [32, 65, 21, 83, 85, 7, 71, 45, 20, 63],
    [83, 44, 38, 55, 84, 80, 58, 20, 4, 74]
  ),
  false
);
