function bubbleSort(arr, rows, cols) {
  if (rows === 0) return;

  if (cols < rows) {
    if (arr[cols] > arr[cols + 1]) {
      let temp = arr[cols];
      arr[cols] = arr[cols + 1];
      arr[cols + 1] = temp;
    }
    bubbleSort(arr, rows, cols + 1);
  } else {
    bubbleSort(arr, rows - 1, 0);
  }
  return arr;
}
let arr = [3, 2, 1, 0, 3, 6, 0, 0];
console.log(bubbleSort(arr, arr.length - 1, 0));
