// this solution solves it in O(n2)
var numSubarrayProductLessThanK = function (nums, k) {
  var count = 0;
  var i, j, product;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] < k) count++;

    product = nums[i];
    for (j = i + 1; j < nums.length; j++) {
      product = product * nums[j];

      if (product < k) count++;
      else break;
    }
  }
  return count;
};
// console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));

var numSubarrayProductLessThanK2 = function (nums, k) {
  let left = 0;
  let count = 0;
  let product = 1;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    while (product >= k && left <= right) {
      product /= nums[left];
      left++;
    }

    count += right - left + 1;
  }
  return count;
};

console.log(numSubarrayProductLessThanK2([10, 5, 2, 6], 100));
