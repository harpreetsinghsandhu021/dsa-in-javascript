// findMinimumElement([5, 6, 1, 2, 3, 4])
function multipleLeftRotations(arr, k) {
  let p = 0;

  while (p < k) {
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    p++;
  }

  return arr;
}
