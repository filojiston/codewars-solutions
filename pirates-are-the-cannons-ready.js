function cannonsReady(gunners) {
    for (const [_, isReady] of gunners) {
        if (!isReady) {
            return 'Shiver me timbers!';
        }
    }

    return 'Fire!';
}

function cannonsReady(gunners) {
    return Object.values(gunners).every(isReady => isReady == 'aye') ? 'Fire!' : 'Shiver me timbers!';
}

let a = { 'Mike': 'aye', 'Joe': 'aye', 'Johnson': 'aye', 'Peter': 'aye' };
let b = { 'Mike': 'aye', 'Joe': 'nay', 'Johnson': 'aye', 'Peter': 'aye' };

console.log(cannonsReady(a), 'Fire!');
console.log(cannonsReady(b), 'Shiver me timbers!');
