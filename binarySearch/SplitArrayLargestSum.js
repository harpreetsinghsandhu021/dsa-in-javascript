function splitArray(nums, k) {
  let start = 0;
  let end = 0;

  for (let i = 0; i < nums.length; i++) {
    start = Math.max(start, nums[i]);
    end += nums[i];
  }

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;
    let count = 1;

    for (const num of nums) {
      if (sum + num > mid) {
        sum = num;
        count++;
      } else {
        sum += num;
      }
    }

    if (count <= k) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

console.log(splitArray([7, 2, 5, 10, 8], 2));
