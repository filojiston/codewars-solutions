// this is not my solution, but idea is the same
// run three loops and calculate substrings then add them together
function fullScan(parts) {
  parts = parts.map((item) => {
    return item.split("\n");
  });

  return parts
    .reduce((str, a) => {
      a.forEach((b, i) => {
        let cur = str[i] || "";
        let subLen = Math.min(b.length, cur.length);
        while (cur.slice(-subLen) !== b.slice(0, 0 + subLen) && subLen > 0) {
          subLen--;
        }
        str[i] = cur + b.slice(subLen);
      });
      return str;
    }, [])
    .join("\n");
}

// console.log(fullScan(["trainin", "ning in", "in code", "odewars"]),
//   "training in codewars");
var part1 = `trainin
give me`,
  part2 = `ning in
 me a n`,
  part3 = `in code
 nice s`,
  part4 = `odewars
e solut`,
  part5 = `wars
olution`,
  result = `training in codewars
give me a nice solution`;
console.log(fullScan([part1, part2, part3, part4, part5]), result);
