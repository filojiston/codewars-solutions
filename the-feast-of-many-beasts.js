function feast(beast, dish) {
  return beast.startsWith(dish.charAt(0)) && beast.endsWith(dish.charAt(dish.length - 1));
}


console.log(feast("great blue heron", "garlic naan"), true)
console.log(feast("chickadee", "chocolate cake"), true)
console.log(feast("brown bear", "bear claw"), false)
