//merge two sorted arrays
// given two arrays nums1 and nums2
// the result array should be stored
// in the first
// array

function swap(arr1, arr2, i, j) {
  let temp = arr1[i];
  arr1[i] = arr2[j];
  arr2[j] = temp;
}

function mergeTwoSortedArrays(arr1, m, arr2, n) {
  let i = arr1.length - 1;
  let j = arr2.length - 1;

  while (i >= 0 && j >= 0) {
    if (arr2[j] > arr1[i]) {
      swap(arr1, arr2, i, j);
      j--;
    } else if (arr2[j] === arr1[i]) {
      arr1[i] = arr2[j];
    } else {
      i--;
    }
  }

  return arr1;
}

console.log(mergeTwoSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// [1,2,2,3,5,6]
