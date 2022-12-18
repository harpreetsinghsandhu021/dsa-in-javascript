// negativeToEnd([1, -1, 3, 2, -7, -5, 11, 6]);
function rotateArrAntiClockWiseHelper(arr, start, end, k = 1) {
  let p = 0;

  while (p < k) {
    let temp = arr[start];
    for (let i = start; i < end; i++) {
      arr[i] = arr[i + 1];
    }
    arr[end] = temp;
    p++;
  }
}
function negativeToEnd2(arr) {
  let negativesIndex = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 0) {
      rotateArrAntiClockWiseHelper(arr, i, negativesIndex);
      negativesIndex--;
    }
  }
  return arr;
}
