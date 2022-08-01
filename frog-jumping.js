function solution(a) {
    const jumpedIndices = new Set([0]);

    let jumps = 0;
    let currIndice = 0;
    while (true) {
        currIndice += a[currIndice]
        jumps++;
        if (jumpedIndices.has(currIndice))  return -1;
        if (a[currIndice] === undefined)    return jumps;
        jumpedIndices.add(currIndice);
    }
}
