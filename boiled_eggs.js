// you can put at most 8 eggs into the pot at once
// it takes 5 mins to boil an egg

function cookingTime(eggs) {
  return Math.ceil(eggs / 8) * 5;
}

console.log(cookingTime(0), 0, '0 eggs');
console.log(cookingTime(5), 5, '5 eggs');
console.log(cookingTime(10), 10, '10 eggs');