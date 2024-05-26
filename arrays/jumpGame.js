var canJump = function (nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (maxReach < i) {
      return false;
    }
    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return maxReach;
};

console.log(canJump([3, 2, 1, 0, 4]));
