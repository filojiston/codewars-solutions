function search(budget, prices) {
    return prices.filter(price => budget >= price)
        .sort((a, b) => a - b)
        .join(',');
}

// that's a good solution, too. i didn't know that toString method
// does exact same thing as joining array elements with comma
const search = (budget, prices) => prices.filter(v => v <= budget).sort((a, b) => a - b).toString();

console.log(search(3, [6, 1, 2, 9, 2]), "1,2,2")
console.log(search(14, [7, 3, 23, 9, 14, 20, 7]), "3,7,7,9,14")
console.log(search(0, [6, 1, 2, 9, 2]), "")
