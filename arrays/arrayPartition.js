function arrayPartition(nums) {
  nums = nums.sort((a, b) => a - b);

  let minArray = 0;
  for (let i = 0; i <= nums.length; i++) {
    if ((i + 1) % 2 === 0) {
      minArray += Math.min(nums[i], nums[i - 1]);
    }
  }
  return minArray;
}

console.log(arrayPartition([1, 4, 3, 2]));
