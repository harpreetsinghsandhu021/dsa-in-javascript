// ref : https://leetcode.com/problems/minimum-size-subarray-sum/

// O(n) solution
function smallestSubWithSum(target, nums) {
  let result = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= target) {
      result = Math.min(result, i + 1 - left);
      sum -= nums[left];
      left++;
    }
  }

  return result != Number.MAX_SAFE_INTEGER ? result : 0;
}

console.log(smallestSubWithSum(7, [2, 3, 1, 2, 4, 3]));
