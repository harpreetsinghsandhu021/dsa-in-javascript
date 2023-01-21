function findMinimum(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (mid < end && nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    if (mid > start && nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }

    if (nums[start] <= nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return nums[0];
}

console.log(findMinimum([5, 1, 2, 3, 4]));
