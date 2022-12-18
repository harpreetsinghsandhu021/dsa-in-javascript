function minimizeTheDifference(arr, k) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let diff = arr[arr.length - 1] - arr[0];
  let min;
  let max;

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - k < 0) continue;

    max = Math.max(arr[i - 1] + k, arr[arr.length - 1] - k);
    min = Math.min(arr[i] - k, arr[0] + k);

    diff = Math.min(diff, max - min);
  }

  return diff;
}
minimizeTheDifference([1, 15, 10], 6);
