function containsDuplicate2(nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (Math.abs(map.get(nums[i]) - i) <= k) {
        return true;
      }
    }

    map.set(nums[i], i);
  }

  return false;
}

console.log(containsDuplicate2([1, 2, 3, 1, 2, 3], 2));
