function whoWon(players, extraCard, extraTakers) {
  for (const [player, score] of Object.entries(players)) {
    let totalScore = score
      .split(', ')
      .map((x) => {
        if ('JKQA'.includes(x)) {
          return 10;
        } else {
          return +x;
        }
      })
      .reduce((a, b) => a + b);
    if (extraTakers.includes(player)) {
      if ('JKQA'.includes(extraCard)) {
        totalScore += 10;
      } else {
        totalScore += +extraCard;
      }
    }
    players[player] = totalScore;
  }

  const result = Object.entries(players);
  result.sort((a, b) => {
    if (a[1] != b[1]) {
      if (a[1] > 21 || b[1] > 21) {
        return a[1] - b[1];
      } else {
        return b[1] - a[1];
      }
    }
    return a[0].localeCompare(b[0]);
  });

  return result;
}
