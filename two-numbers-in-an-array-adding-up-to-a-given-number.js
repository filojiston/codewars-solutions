function hasPair(A, sum) {
    const seen = new Set();

    for (const element of A) {
        const curr = element;
        if (seen.has(curr) && curr != sum / 2) {
            return true;
        } else {
            seen.add(sum - curr);
        }
    }
    
    return false;
}

console.log(hasPair([1,5,6,9,10,14,16,20,27,30],36), true);