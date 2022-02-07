function drawHorizontal(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push('+');
  }

  return result.join('---');
}

function drawDots(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push('|');
  }

  return result.join(' o ');
}

function dot(n, m) {
  const result = [];

  for (let i = 0; i < m; i++) {
    result.push(drawHorizontal(n + 1));
    result.push(drawDots(n + 1));
  }

  result.push(drawHorizontal(n + 1));

  return result.join('\n');
}
