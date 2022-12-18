// negativeToEnd2([1, -1, 3, 2, -7, -5, 11, 6]);
// reArrangeInHighestAndSmallest([10, 9, 8, 7, 6]);
//finding largest sum contigous array
//using kaden`s algoritmn
function largestSumContigiousArray(arr) {
  let curr = 0;
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    curr = curr + arr[i];

    if (curr > max) {
      max = curr;
    }

    if (curr < 0) {
      curr = 0;
    }
  }

  return max;
}
