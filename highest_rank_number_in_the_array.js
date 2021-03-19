function highestRank(arr) {
    return frequencySort(arr)[0];
}


function frequencySort(arr) {
    const freqs = {};
    arr.forEach(item => {
        freqs[item] = (freqs[item] || 0) + 1;
    });

    return arr.sort((a, b) => freqs[b] - freqs[a] || b - a);
}

const arr =  [12, 10, 8, 12, 7, 6, 4, 10];
const arr2 = [7, 10, 8, 7, 7, 6, 4, 10];
console.log(highestRank(arr), 12);
console.log(highestRank(arr2), 7);
