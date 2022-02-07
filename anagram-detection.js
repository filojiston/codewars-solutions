function isAnagram(test, original) {
  // edge cases
  if (!test || !original) return false;
  if (test.length !== original.length)  return false;

  const my_test = test.toLowerCase().split('').sort();
  const my_original = original.toLowerCase().split('').sort();

  for (let i = 0; i < my_test.length; i++) {
    if (my_test[i] !== my_original[i])  return false;
  }

  return true;
}


console.log(isAnagram("foefet", "toffee"), true);
console.log(isAnagram("Buckethead", "DeathCubeK"), true);
console.log(isAnagram("Twoo", "WooT"), true);
console.log(isAnagram("dumble", "bumble"), false);
console.log(isAnagram("ound", "round"), false);
console.log(isAnagram("apple", "pale"), false);