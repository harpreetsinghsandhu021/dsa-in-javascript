function findZeros2(arr, target, start = 0, end = arr.length - 1) {
  let mid = Math.floor(start + (end - start) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (target > arr[mid]) {
    return findZeros2(arr, target, start, mid - 1);
  } else {
    return findZeros2(arr, target, mid + 1, end);
  }
}

console.log(findZeros2([1, 1, 1, 1, 1, 0, -1, -1, -1, -1], 0));
