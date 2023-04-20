function sortEmotions(arr, order) {
  const sortLookup = [":D", ":)", ":|", ":(", "T_T"];

  let descending = arr.sort(
    (a, b) => sortLookup.indexOf(a) - sortLookup.indexOf(b)
  );
  return order ? descending : descending.reverse();
}

console.log(sortEmotions([":D", "T_T", ":D", ":("], true), [
  ":D",
  ":D",
  ":(",
  "T_T",
]);
console.log(sortEmotions(["T_T", ":D", ":(", ":("], true), [
  ":D",
  ":(",
  ":(",
  "T_T",
]);
console.log(sortEmotions([":)", "T_T", ":)", ":D", ":D"], true), [
  ":D",
  ":D",
  ":)",
  ":)",
  "T_T",
]);
console.log(sortEmotions([":D", "T_T", ":D", ":("], false), [
  "T_T",
  ":(",
  ":D",
  ":D",
]);
console.log(sortEmotions(["T_T", ":D", ":(", ":("], false), [
  "T_T",
  ":(",
  ":(",
  ":D",
]);
console.log(sortEmotions([":)", "T_T", ":)", ":D", ":D"], false), [
  "T_T",
  ":)",
  ":)",
  ":D",
  ":D",
]);
console.log(sortEmotions([], false), []);
console.log(sortEmotions([], true), []);
