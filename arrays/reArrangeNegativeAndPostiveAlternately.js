// multipleLeftRotations([1, 3, 5, 7, 9],1)
// multipleLeftRotations([1, 3, 5, 7, 9],3)
// multipleLeftRotations([1, 3, 5, 7, 9],4)
// multipleLeftRotations([1, 3, 5, 7, 9],6)
// reArranging negative and positive elements alternately
function reArrangeNegativeAndPostiveAlternately(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    while (arr[i] > 0) i++;

    while (arr[j] < 0) j--;

    if (i < j) {
      swap(arr, i, j);
    }
  }

  let k = 0;

  while (k < arr.length && i < arr.length) {
    swap(arr, k, i);
    k += 2;
    i++;
  }

  return arr;
}
