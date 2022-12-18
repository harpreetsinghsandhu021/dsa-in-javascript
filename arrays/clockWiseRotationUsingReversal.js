// majorityElements3([9, 9, 8, 8, 8, 8]);
// ROTATING array clockwise using reversal algorithmn
function clockWiseRotationUsingReversal(arr, d) {
  let n = arr.length - 1;

  reverseArray(arr, 0, n - d);
  reverseArray(arr, n - d, d);
  reverseArray(arr, 0, n);

  return arr;
}
