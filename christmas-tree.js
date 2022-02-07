function christmasTree(height) {
  let tree = [];

  for (let i = 1, j = height - 1; i <= height; i++, j--) {
    const branch = [];
    const stars = i * 2 - 1;
    branch.push(' '.repeat(j));
    branch.push('*'.repeat(stars));
    branch.push(' '.repeat(j));
    tree.push(branch);
  }
  return tree.map((branch) => branch.join('')).join('\n');
}

// console.log(christmasTree(0), '""');
// console.log(christmasTree(1), '"*"');
// console.log(christmasTree(2), '" * \\n***"');
// console.log(christmasTree(3), '"  *  \\n *** \\n*****"');
console.log(christmasTree(4), '"   *   \\n  ***  \\n ***** \\n*******"');
