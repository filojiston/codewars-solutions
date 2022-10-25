function incrementer(nums) {
  return nums.map((el, idx) => (el + idx + 1) % 10);
}
