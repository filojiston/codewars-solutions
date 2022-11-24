function parse(string) {
    const elems =  string.split(' -> ');

    const head = elems[0] === 'null' ? null : new Node(+elems[0]);
    let current = head;

    for (let i = 1; i < elems.length; i++) {
        if (elems[i] === 'null') {
            current.next = null;
        } else {
            current.next = new Node(+elems[i]);
            current = current.next;
        }
    }

    return head;
}

// nice, compact and understandable one liner
const parse = string => string.split(' -> ').slice(0, -1).reduceRight((a, b) => new Node(Number(b), a), null);

console.log(parse("1 -> 2 -> 3 -> null"), new Node(1, new Node(2, new Node(3))));
console.log(parse("0 -> 1 -> 4 -> 9 -> 16 -> null"), new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))));
console.log(parse("null"), null);
