//return next permutation
function nextPermutation(arr) {
  // declaring variables
  let i, j;

  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      break;
    }
  }

  // if there is no i then reverse the array
  if (i < 0) {
    arr.reverse();
  } else {
    for (j = arr.length - 1; j > i; j--) {
      if (arr[j] > arr[i]) {
        break;
      }
    }

    // swapping i and j
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    // reversing the array from i + 1 to arr`s length
    reverseArray(arr, i + 1, arr.length - 1);
  }
  return arr;
}
// nextPermutation([1, 2, 3, 6, 5, 4]);
// nextPermutation([3, 2, 1]);
// nextPermutation([1, 2, 3, 4]);
// 1, 2, 4, 3, 5, 6
