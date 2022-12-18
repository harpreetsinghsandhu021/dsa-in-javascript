// negativeFirstAndPositiveEnd3([12, 11, -13, -5, 6, -7, 5, -3, -6])
function rotateArrayClockWiseHelperFn(arr, start, end, k = 1) {
  let p = 0;

  while (p < k) {
    let temp = arr[end];
    for (let i = end; i >= start; i--) {
      arr[i] = arr[i - 1];
    }
    arr[start] = temp;
    p++;
  }
}
function negativeFirstAndPositiveEnd4(arr) {
  let negativeIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      rotateArrayClockWiseHelperFn(arr, negativeIndex, i, 1);
      negativeIndex++;
    }
  }

  return arr;
}
