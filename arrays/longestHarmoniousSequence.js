function findLHS(nums) {
  let hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1);
  }

  let maxLength = 0;

  for (let [key, value] of hashMap) {
    if (hashMap.has(key + 1)) {
      let currLength = value + hashMap.get(key + 1);
      maxLength = Math.max(maxLength, currLength);
    }
  }

  return maxLength;
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
