const leastLarger = (arr, index) => arr.indexOf(arr.filter(x => x > arr[index]).sort((a, b) => a - b)[0]);

// function leastLarger (arr, index) {
//   const target = arr[index];
//   const x = arr.filter(x => x > target);
//   console.log(arr.indexOf(x.sort((a, b) => a - b)[0]));
// }

// console.log( leastLarger( [4, 1, 3, 5, 6], 0 ), 3 );
// console.log( leastLarger( [4, 1, 3, 5, 6], 4 ), -1 );
console.log( leastLarger( [ 1, 2, 3, 4, 5, 0 ], 5), 0);