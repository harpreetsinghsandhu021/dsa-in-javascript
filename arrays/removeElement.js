function removeElement(nums, val) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      console.log(nums[count], nums[i]);
      nums[count] = nums[i];
      count++;
    }
  }

  return count;
}
console.log(removeElement([3, 2, 2, 3], 3));
