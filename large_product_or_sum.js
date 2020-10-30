function sumOrProduct(array, n) {
    const sorted = array.sort((a, b) => a - b);
    const largest = sorted.slice(-n).reduce((a, b) => a + b);
    const lowest = sorted.slice(0, n).reduce((a, b) => a * b);

    if (largest > lowest) return "sum";
    else if (largest < lowest) return "product";
    
    return "same";
}

console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4), "sum");
console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3), "product");
console.log(sumOrProduct([10, 20, 3, 30, 5, 4], 3), "same");
