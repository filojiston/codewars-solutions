
// A robot with the most speed attacks first.If they are tied, the first
// robot passed in attacks first.
// Robots alternate turns attacking.Tactics are used in order.
// A fight is over when a robot has 0 or less health or both
// robots have run out of tactics.
// A robot who has no tactics left does no more damage, but the
// other robot may use the rest of his tactics.
// If both robots run out of tactics, whoever has the most health wins.
// Return the message "{Name} has won the fight."
// If both robots run out of tactics and are tied for health, the fight is
// a draw.Return "The fight was a draw."

function fight(robot1, robot2, tactics) {
  // decide who's gonna attack first
  let currentHitter = robot1.speed >= robot2.speed ? robot1 : robot2;
  let currentTaker = currentHitter === robot1 ? robot2 : robot1;

  // small helper functions
  const hasTacticsLeft = robot => robot.tactics.length !== 0;
  const swapRobots = (r1, r2) => [r2, r1];


  // while no one is ded
  while ((robot1.health > 0 && robot2.health > 0)) {
    let hitterTacticsLeft = hasTacticsLeft(currentHitter);
    let takerTacticsLeft = hasTacticsLeft(currentTaker);

    // if no one has tactics left
    if (!hitterTacticsLeft && !takerTacticsLeft) {
      // if their health is same, then it's a tie
      if (robot1.health === robot2.health)
        return 'The fight was a draw.';
      else // else, we have a winner
        break
    }

    // if current hitter run out of tactics, swap robots and continue
    if (!hitterTacticsLeft) {
      [currentHitter, currentTaker] = swapRobots(currentHitter, currentTaker);
      continue;
    }

    // current hitter hits, current taker takes the damage
    currentTaker.health -= tactics[currentHitter.tactics[0]];
    currentHitter.tactics.shift();
    [currentHitter, currentTaker] = swapRobots(currentHitter, currentTaker);
  }

  // decide winner and return
  return `${robot1.health > robot2.health ? robot1.name : robot2.name} has won the fight.`;
}

function fight(robot1, robot2, tactics) {
  let currentHitter = robot1.speed >= robot2.speed ? robot1 : robot2;
  let currentTaker = currentHitter === robot1 ? robot2 : robot1;

  const hasTacticsLeft = robot => robot.tactics.length !== 0;
  const swapRobots = (r1, r2) => [r2, r1];

  while ((robot1.health > 0 && robot2.health > 0)) {
    if (!hasTacticsLeft(currentHitter) && !hasTacticsLeft(currentTaker)) {
      if (robot1.health === robot2.health)
        return 'The fight was a draw.';
      else
        break
    }

    if (!hasTacticsLeft(currentHitter)) {
      [currentHitter, currentTaker] = swapRobots(currentHitter, currentTaker);
      continue;
    }

    currentTaker.health -= tactics[currentHitter.tactics[0]];
    currentHitter.tactics.shift();
    [currentHitter, currentTaker] = swapRobots(currentHitter, currentTaker);
  }

  return `${robot1.health > robot2.health ? robot1.name : robot2.name} has won the fight.`;
}


// robot1 = {
//   "name": "Rocky", "health": 100, "speed": 20,
//   "tactics": ["punch", "punch", "laser", "missile"]
// };
// robot2 = {
//   "name": "Missile Bob", "health": 100, "speed": 21,
//   "tactics": ["missile", "missile", "missile", "missile"]
// };
// tactics = { "punch": 20, "laser": 30, "missile": 35 };
// console.log(fight(robot1, robot2, tactics), "Missile Bob has won the fight.");

// robot1 = { "name": "Rocky", "health": 200, "speed": 20, "tactics": ["punch", "punch", "laser", "missile"] };
// robot2 = { "name": "Missile Bob", "health": 100, "speed": 21, "tactics": ["missile", "missile", "missile", "missile"] };
// tactics = { "punch": 20, "laser": 30, "missile": 35 };
// console.log(fight(robot1, robot2, tactics), "Rocky has won the fight.");

// robot1 = {
//   name: 'Rocky',
//   health: 799,
//   speed: 83,
//   tactics:
//     ['punch',
//       'punch',
//       'laser',
//       'missile',
//       'punch',
//       'laser',
//       'missile',
//       'punch',
//       'laser',
//       'missile',
//       'punch',
//       'laser',
//       'missile']
// }
// robot2 = {
//   name: 'Missile Bob',
//   health: 614,
//   speed: 12,
//   tactics:
//     ['punch',
//       'punch',
//       'laser',
//       'missile',
//       'punch',
//       'laser',
//       'missile',
//       'punch',
//       'laser',
//       'missile',
//       'punch',
//       'laser',
//       'missile']
// }


// tactics = { punch: 20, laser: 30, missile: 35 }
// console.log(fight(robot1, robot2, tactics), "Rocky has won the fight.");


robot1 = {
  name: 'Rocky',
  health: 742,
  speed: 55,
  tactics:
    ['punch',
      'punch',
      'laser',
      'missile',
      'punch',
      'laser',
      'missile',
      'punch',
      'laser',
      'missile',
      'punch',
      'laser',
      'missile']
}
robot2 = {
  name: 'Missile Bob',
  health: 751,
  speed: 26,
  tactics:
    ['punch',
      'punch',
      'laser',
      'missile',
      'punch',
      'laser',
      'missile',
      'punch',
      'laser',
      'missile',
      'punch',
      'laser',
      'missile']
}
tactics = { punch: 20, laser: 30, missile: 35 }
console.log(fight(robot1, robot2, tactics), "Missile Bob has won the fight.");
