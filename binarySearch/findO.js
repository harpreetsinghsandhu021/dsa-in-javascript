function findZeros(arr, target) {
  console.log(arr.length);
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = ~~(start + (end - start) / 2);

    if (target > arr[mid]) {
      end = mid - 1;
    } else if (target < arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
console.log(findZeros([1, 1, 1, 1, 1, 0, -1, -1, -1, -1], 0));
