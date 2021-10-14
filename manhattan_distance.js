function manhattanDistance(pointA, pointB) {
  return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
}

console.log(manhattanDistance([1,1],[1,1]), 0);
console.log(manhattanDistance([5,4],[3,2]), 4);
console.log(manhattanDistance([1,1],[0,3]), 3);
