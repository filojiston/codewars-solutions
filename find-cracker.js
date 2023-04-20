function findHack(arr) {
  const maxPoints = 200;
  const extraPoints = 20;
  const notes = {
    A: 30,
    B: 20,
    C: 10,
    D: 5,
  };

  function calculateRealPoints(answers) {
    return (
      Math.min(
        answers.reduce((acc, answer) => acc + (notes[answer] || 0), 0),
        maxPoints
      ) + calculateExtraPoints(answers)
    );
  }

  function calculateExtraPoints(answers) {
    if (
      answers.length >= 5 &&
      answers.every((answer) => (notes[answer] || 0) >= 20)
    ) {
      return extraPoints;
    }
    return 0;
  }

  return arr
    .filter(([_, points, answers]) => {
      const realPoints = calculateRealPoints(answers);
      return points !== realPoints;
    })
    .map((item) => item[0]);
}

const array = [
  ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
  ["name2", 120, ["B", "A", "A", "A"]],
  ["name3", 160, ["B", "A", "A", "A", "A"]],
  ["name4", 140, ["B", "A", "A", "C", "A"]],
];

console.log(findHack(array), ["name2", "name4"]);
