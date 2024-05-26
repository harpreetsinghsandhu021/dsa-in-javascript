var productExceptSelf = function (nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // Populate left products
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  // Populate right products and multiply
  let rightProduct = 1;

  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
