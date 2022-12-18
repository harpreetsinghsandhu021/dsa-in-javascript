//merging two sorted arrays without using extra space

function handleArrayTwo(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }
  }
  return arr;
}

function mergeTwoSortedArraysWithoutSpace(arr1, arr2) {
  let i = 0;
  let j = 0;

  while (i < arr1.length) {
    if (arr1[i] > arr2[j]) {
      let temp = arr1[i];
      arr1[i] = arr2[j];
      arr2[j] = temp;
      handleArrayTwo(arr2);
    }
    i++;
  }
  console.log(arr1, arr2);
}
// mergeTwoSortedArraysWithoutSpace([1, 3, 4, 5, 7], [2, 4, 6, 8, 21]);
