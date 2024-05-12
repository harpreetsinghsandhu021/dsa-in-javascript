function threeSum(nums) {
  let ans = [];

  // firstly sort the array which gives a time complexity of nlogn
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    // skip duplicate elements
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      console.log(sum);

      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        //   skip duplicate elements
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return ans;
}

let nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
