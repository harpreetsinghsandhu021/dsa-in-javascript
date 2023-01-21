function findRange(nums, target) {
  let ans = [-1, -1];
  let startIndex = search(nums, target, true);
  let endIndex = search(nums, target, false);

  ans[0] = startIndex;
  ans[1] = endIndex;

  return ans;
}

function search(nums, target, findStartIndex) {
  let ans = -1;
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target > nums[mid]) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      ans = mid;

      if (findStartIndex) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return ans;
}

console.log(findRange([5, 7, 7, 8, 8, 10], 8));
