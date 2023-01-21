function peakIndex(arr) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

console.log(peakIndex([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]));
