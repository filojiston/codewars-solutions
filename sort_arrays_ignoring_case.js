function sortme(names) {
    names.sort((a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0));
    return names;
}


console.log(sortme(["Hello", "there", "I'm", "fine"]), ["fine", "Hello", "I'm", "there"]);
console.log(sortme(["C", "d", "a", "B"]), ["a", "B", "C", "d"]);