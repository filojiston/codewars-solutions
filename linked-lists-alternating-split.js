function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  if (head === null || head.next === null) {
    throw "catch!";
  }

  let first = new Node(head.data);
  let firstIter = first;
  let second = new Node(head.next.data);
  let secondIter = second;
  let idx = 0;
  let iter = head.next.next;

  while (iter !== null) {
    if (idx % 2 === 0) {
      firstIter.next = new Node(iter.data);
      firstIter = firstIter.next;
    } else {
      secondIter.next = new Node(iter.data);
      secondIter = secondIter.next;
    }
    iter = iter.next;
    idx++;
  }

  return new Context(first, second);
}

// i wouldn't think of this solution. good usage of recursion, i liked it.
function alternatingSplit(head) {
  if (arguments.length == 0 || head == null || head.next == null)
    throw new Error("nope");
  return new Context(split(head), split(head.next));
}

const split = (head) => {
  if (head == null) return null;
  const result = new Node(head.data);
  result.next = head.next == null ? null : split(head.next.next);
  return result;
};
