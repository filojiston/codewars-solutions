function partitionOn(pred, items) {
  const falses = [];
  const trues = [];

  for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];
    if (pred(currentItem)) trues.push(currentItem);
    else falses.push(currentItem);
  }

  for (let i = 0; i < falses.length; i++) {
    items[i] = falses[i];
  }

  for (let i = falses.length, j = 0; j < trues.length; i++, j++) {
    items[i] = trues[j];
  }

  return falses.length;
}

// array functions
function partitionOn(pred, items) {
  const falses = items.filter(item => !pred(item));
  const trues = items.filter(pred);

  items.length = 0;

  for (let i = 0; i < falses.length; i++) items.push(falses[i]);
  for (let i = 0; i < falses.length; i++) items.push(trues[i]);

  return falses.length;
}

// spreading
function partitionOn(pred, items) {
  const falses = items.filter(item => !pred(item));
  const trues = items.filter(pred);

  items.length = 0;
  items.push(...falses);
  items.push(...trues);

  return falses.length;
}

const items = [1, 2, 3, 4, 5, 6];
function isEven(n) { return n % 2 == 0 }
const i = partitionOn(isEven, items);

console.log(i, 3, 'partioned at 3');
console.log(items.slice(0, i), [1, 3, 5]);
console.log(items.slice(i), [2, 4, 6]);
