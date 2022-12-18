// console.log(swapZeroes([5, 6, 0, 4, 6, 0, 9, 0, 8]));
// console.log(swapZeroesTwo([5, 6, 0, 4, 6, 0, 9, 0, 8]));
// console.log(swapZeroesThree([5, 6, 0, 4, 6, 0, 9, 0, 8]));
// reverse([4, 5, 1, 2])
function reArrange(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if ((i & 1) === 0) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    } else {
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  return arr;
}
