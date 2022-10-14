function containAllRots(str, arr) {
    if (str.length === 0)   return true;

    const rotations = findRotations(str);
    return rotations.every(rot => arr.includes(rot));
}

function findRotations(str) {
    const rotations = [str];
    for (let i = 0; i < str.length - 1; i++) {
        str = str.substring(1) + str[0];
        rotations.push(str);
    }
    return rotations;
}

// instead of rotating one letter at a time,
// we could rotate as substrings like bsjq -> b|sjq (sjqb) -> bs|jq (jqbs) -> bsj|q (qbsj)

console.log(containAllRots("", []), true)
console.log(containAllRots("", ["bsjq", "qbsj"]), true)
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true)
console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), false)
