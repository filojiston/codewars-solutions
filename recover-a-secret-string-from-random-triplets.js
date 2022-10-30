// i couldn't solve this one, but i found a solution on the internet
// this solution is frickin' clever!
function recoverSecret(triplets) {
  for (let [first] of triplets) {
    if (triplets.every((tuple) => tuple.indexOf(first) <= 0)) {
      triplets
        .filter(([item]) => item == first)
        .forEach((tuple) => tuple.shift());
      console.log(triplets);
      return (
        first + recoverSecret(triplets.filter((tuple) => tuple.length > 0))
      );
    }
  }
  return '';
}

// this recursion felt a little bit weird to me
// i had really hard time understanding it
// it bounces from letters to find the last one, then backtracks, then finds the next one, and so on
function recoverSecret(triplets) {
  const nodes = [];
  const graph = {};
  const sortedlist = [];

  function visit(node) {
    if (sortedlist.indexOf(node) < 0) {
      (graph[node] || []).forEach(function (node2) {
        visit(node2);
      });
      sortedlist.unshift(node);
    }
  }

  triplets.forEach(function (triplet) {
    triplet.forEach(function (node) {
      if (nodes.indexOf(node) < 0) nodes.push(node);
    });
    graph[triplet[0]] = (graph[triplet[0]] || []).concat(triplet[1]);
    graph[triplet[1]] = (graph[triplet[1]] || []).concat(triplet[2]);
  });

  while (nodes.length) visit(nodes.pop());
  return sortedlist.join('');
}

const secret = 'whatisup';
const triplets = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's'],
];

console.log(recoverSecret(triplets), secret);
