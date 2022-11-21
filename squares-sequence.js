function squares(x, n) {
    if (n <= 0)  return [];
    const result = [x];
    for (let i = 0; i < n - 1; i++) {
        result.push(Math.pow(result[result.length - 1], 2))
    }

    return result;
}

// that was the solution i wanted to do
// well, i don't like math
function squares(x, n) {
    return Array.from({length: n}, (v, k) => Math.pow(x, Math.pow(2, k)))
}

console.log(squares(2,5),[2,4,16,256,65536]);   
console.log(squares(3,3),[3,9,81]);  
console.log(squares(5,3),[5,25,625]);  
console.log(squares(10,4),[10,100,10000,100000000]);
console.log(squares(2,0), []);
console.log(squares(2,-5), []);