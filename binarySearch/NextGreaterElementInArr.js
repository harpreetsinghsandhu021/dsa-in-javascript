function nextGreaterNumber(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return arr[start];
}
function nextSmallestNumber(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return arr[end];
}

console.log(nextGreaterNumber([2, 3, 5, 9, 14, 16, 18], 15));
console.log(nextSmallestNumber([2, 3, 5, 9, 14, 16, 18], 15));
