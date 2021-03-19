function reverse(str) {
    return str.split(' ').filter(word => word).reduce((acc, curr, idx) => {
        if (idx & 1) {
            curr = curr.split('').reverse().join('');
        }
        acc.push(curr);
        return acc;
    }, []).join(' ');
}

// my one-liner (sort of xd)
// const reverse = str => str.split(' ').filter(word => word).reduce((acc, curr, idx) => { acc.push(idx & 1 ? curr.split('').reverse().join('') : curr); return acc; }, []).join(' ');

console.log(reverse("     Reverse this string, please!"), "Reverse siht string, !esaelp")
console.log(reverse("I really don't like reversing strings!"),"I yllaer don't ekil reversing !sgnirts")
