function unluckyDays(year) {
  const FRIDAY = 5;
  return Array.from({ length: 12 }, (_, i) => new Date(year, i, 13)).filter(date => date.getDay() === FRIDAY).length;
}

console.log(unluckyDays(1586), 1, "should be: 1");
console.log(unluckyDays(1001), 3, "should be: 3");
console.log(unluckyDays(2819), 2, "should be: 2");
console.log(unluckyDays(2792), 2, "should be: 2");
console.log(unluckyDays(2723), 2, "should be: 2");
console.log(unluckyDays(1909), 1, "should be: 1");
console.log(unluckyDays(1812), 2, "should be: 2");
console.log(unluckyDays(1618), 2, "should be: 2");
console.log(unluckyDays(2132), 1, "should be: 1");
console.log(unluckyDays(2065), 3, "should be: 3");
