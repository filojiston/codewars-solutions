function mostFrequentItemCount(collection) {
    if (collection.length === 0) return 0;
    
    const counts = {};

    collection.forEach(item => {
        counts[item] = counts[item] + 1 || 1;
    });

    return Math.max(...Object.values(counts));
}

console.log(mostFrequentItemCount([3, -1, -1]), 2);
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5);
