function cakes(recipe, available) {
  const amounts = [];
  for (const [ingredient, amount] of Object.entries(recipe)) {
    if (!available.hasOwnProperty(ingredient)) return 0;
    amounts.push(Math.floor(available[ingredient] / amount));
  }

  return Math.min(...amounts);
}

// cool solution but it iterates no matter what
// mine solution stop iterating if there is no ingredient available in recipe
function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    console.log(val);
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}

let recipe, available;

// recipe = { flour: 500, sugar: 200, eggs: 1 };
// available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
// console.log(cakes(recipe, available), 2, "Wrong result for example #1");

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available), 0, "Wrong result for example #2");
