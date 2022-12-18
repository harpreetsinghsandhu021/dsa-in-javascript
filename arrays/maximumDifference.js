//minimize the maximum difference b/w the heights
function maximumDifference(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + k;
  }
  console.log(arr);
}
// maximumDifference([1, 15, 10], 6);
