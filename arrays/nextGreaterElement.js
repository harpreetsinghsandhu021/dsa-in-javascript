function nextgreaterElement(nums1, nums2) {
  const hashmap = {};
  const output = [];

  for (let i = 0; i < nums2.length; i++) {
    hashmap[nums2[i]] = i;
  }

  for (let i = 0; i < nums1.length; i++) {
    const number = nums1[i];

    for (let j = hashmap[number]; j < nums2.length; j++) {
      if (nums2[j] > number) {
        output.push(nums2[j]);
        break;
      }
      if (j === nums2.length - 1) {
        output.push(-1);
      }
    }
  }

  return output;
}

console.log(nextgreaterElement([4, 1, 2], [1, 3, 4, 2]));
