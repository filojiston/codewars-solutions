function arrayToTree(array) {
  function addItem(node, item) {
    const queue = [];
    queue.push(node);
    while (queue.length != 0) {
      node = queue.shift();

      if (node.left === undefined) {
        node.left = new TreeNode(item, undefined, undefined);
        break;
      } else {
        queue.push(node.left);
      }

      if (node.right === undefined) {
        node.right = new TreeNode(item, undefined, undefined);
        break;
      } else {
        queue.push(node.right);
      }
    }
  }

  if (!array || array.length === 0) return undefined;
  const root = new TreeNode(array[0], undefined, undefined);

  for (let i = 1; i < array.length; i++) {
    addItem(root, array[i]);
  }

  return root;
}
