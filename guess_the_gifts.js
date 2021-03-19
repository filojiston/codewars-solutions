function guessGifts(wishlist, presents) {
  const result = [];

  for (const present of presents) {
    const theSize = present.size;
    const isClatters = present.clatters;
    const theWeight = present.weight;

    for (const item of wishlist) {
      const itemSize = item.size;
      const itemIsClatters = item.clatters;
      const itemWeight = item.weight;

      if (theSize === itemSize && isClatters === itemIsClatters &&
        theWeight === itemWeight) result.push(item.name);
    }
  }

  return [...new Set(result)];
}

// this is a good solution too
// also doesn't use unnecessary variables - liked it
function guessGifts(wishlist, presents) {
  return wishlist.filter(function (x) {
    return presents.some(function (y) {
      return x.size == y.size && x.clatters == y.clatters && x.weight == y.weight;
    });
  }).map(function (x) { return x.name; });
}

const wishlist = [
  { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
  { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
  { name: "Card Game", size: "small", clatters: "no", weight: "light" }
];

const presents = [
  { size: "medium", clatters: "a bit", weight: "medium" },
  { size: "small", clatters: "yes", weight: "light" }
];

console.log(guessGifts(wishlist, presents), ["Toy Car", "Mini Puzzle"]);
