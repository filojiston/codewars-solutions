const isPalindrome = (str) => {
    let l = 0, r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) return false;
        l++;
        r--;
    }
    return true;
};

const complete = str => {
    for (let k = 1; k <= str.length; k++) {
        if (isPalindrome(str.slice(k))) {
            const toAppend = str.slice(0, k).split("").reverse().join("");
            return str + toAppend;
        }
    }

    return null;
}


console.log(complete("Baa"), "BaaB");
console.log(complete("aaB"), "aaBaa");
console.log(complete("x"), "xx");
console.log(complete("aaBB"), "aaBBaa");
console.log(complete("aOOa"), "aOOaOOa");
console.log(complete("xyz"), "xyzyx");
console.log(complete("AaaaA"), "AaaaAaaaA");
console.log(complete("abab"), "ababa");
