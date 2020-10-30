function serpentineTree(node) {
  if (!node) {
    return;
  }

  let result = [];

  let queue = [];
  queue.push(node);

  while (queue.length > 0) {
    let size = queue.length;
    let temp = [];

    while (size--) {
      let current = queue.shift();
      temp.push(current.data);

      if (current.left)   queue.push(current.left);
      if (current.right)  queue.push(current.right);
    }

    result.push(temp)
  }

  let realResult = [];
  for (let i = 0; i < result.length; i++) {
    const current = result[i];
    if (i % 2 === 0) {
      for (let j = 0; j < current.length; j++) {
        realResult.push(current[j]);
      }
    } else {
      for (let j = current.length - 1; j >= 0; j--) {
        realResult.push(current[j]);
      }
    }
  }

  return realResult;
}
